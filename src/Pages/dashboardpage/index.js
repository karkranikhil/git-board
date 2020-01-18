import React from "react";
import Box from "../../Components/Box/index";
import ColumnChart from "../../Components/Charts/ColumnChart";
// import PieChart from "../../Components/Charts/PieChart";
import BarChart from "../../Components/Charts/BarChart";
import DateTimeChart from "../../Components/Charts/DateTimeChart";
import ContactChip from "../../Components/ContactChip/index";
import RepoDescription from "../../Components/RepoDescription/index";
import Spinner from "../../Components/Spinner/index";
import "./style.css";
import MOCK from "../../MockData/data";
class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      result: {},
      languages: {},
      contributors: [],
      deployments: [],
      commits: [],
      pull_requests: {
        OPEN: null,
        CLOSED: null
      }
    };
  }

  formatDeployementData = data => {
    let dates = data.map(item =>
      item.created_at ? item.created_at.substr(0, 10) : null
    );
    let obj = {};
    dates.forEach(item => {
      if (obj[item]) {
        obj[item] = obj[item] + 1;
      } else {
        obj[item] = 1;
      }
    });
    console.log(obj);
    return Object.keys(obj).map(item => {
      return { x: new Date(item.split("-").join(",")), y: obj[item] };
    });
  };
  componentDidMount() {
    console.log(MOCK);
    if (MOCK.useMock) {
      this.setState({
        loading: false,
        result: MOCK.INDIVIDUAL_REPO,
        languages: MOCK.LANGUAGES,
        contributors: MOCK.CONTRIBUTORS,
        deployments: MOCK.DEPLOYMENTS,
        commits: MOCK.COMMITS,
        pull_requests: {
          OPEN: MOCK.PR_OPEN && MOCK.PR_OPEN.total_count,
          CLOSED: MOCK.PR_CLOSED && MOCK.PR_CLOSED.total_count
        }
      });
    } else {
      const {
        match: { params }
      } = this.props;
      console.log(
        `https://api.github.com/repos/${params.owner}/${params.name}`
      );
      console.log(
        `https://api.github.com/repos/${params.owner}/${params.name}/deployments`
      );
      console.log(
        `https://api.github.com/repos/${params.owner}/${params.name}/languages`
      );
      console.log(
        `https://api.github.com/repos/${params.owner}/${params.name}/contributors?sort=contributions&order=desc&per_page=100`
      );
      console.log(
        `https://api.github.com/search/issues?q=repo:${params.owner}/${params.name}%20is:pr%20is:open&per_page=100`
      );
      console.log(
        `https://api.github.com/search/issues?q=repo:${params.owner}/${params.name}%20is:pr%20is:closed&per_page=100`
      );
      let individualRepoApiCall = fetch(
        `https://api.github.com/repos/${params.owner}/${params.name}`
      );
      let deploymentApiCall = fetch(
        `https://api.github.com/repos/${params.owner}/${params.name}/deployments`
      );
      let languagesApiCall = fetch(
        `https://api.github.com/repos/${params.owner}/${params.name}/languages`
      );
      let contributorsApiCall = fetch(
        `https://api.github.com/repos/${params.owner}/${params.name}/contributors?sort=contributions&order=desc&per_page=100`
      );
      let openPrApiCall = fetch(
        `https://api.github.com/search/issues?q=repo:${params.owner}/${params.name}%20is:pr%20is:open&per_page=100`
      );
      let closedPrApiCall = fetch(
        `https://api.github.com/search/issues?q=repo:${params.owner}/${params.name}%20is:pr%20is:closed&per_page=100`
      );
      let commitApiCall = fetch(
        `https://api.github.com/repos/${params.owner}/${params.name}/commits`
      );

      Promise.all([
        individualRepoApiCall,
        deploymentApiCall,
        languagesApiCall,
        contributorsApiCall,
        openPrApiCall,
        closedPrApiCall,
        commitApiCall
      ])
        .then(values => Promise.all(values.map(value => value.json())))
        .then(finalVals => {
          console.log(finalVals);
          this.setState({
            result: finalVals[0],
            deployments: finalVals[1],
            languages: finalVals[2],
            contributors: finalVals[3],
            pull_requests: {
              OPEN: finalVals[4].total_count,
              CLOSED: finalVals[5].total_count
            },
            commits: finalVals[6],
            loading: false
          });
        })
        .catch(error => {
          this.setState({ loading: false });
          throw error;
        });
    }
  }
  render() {
    const {
      result,
      contributors,
      languages,
      deployments,
      pull_requests,
      loading
    } = this.state;

    // const topFiveContributorData = contributors.map(item => {
    //   return { label: item.login, y: item.contributions };
    // });
    const contributorsList = contributors.map(item => {
      return { img_url: item.avatar_url, name: item.login, url: item.url };
    });
    const languagesData = Object.keys(languages).map(item => {
      return {
        label: item,
        y: languages[item],
        indexLabel: `${languages[item]}`
      };
    });
    const deploymentData =
      deployments && deployments.length > 0
        ? this.formatDeployementData(deployments)
        : [];
    console.log(contributorsList);
    const pullRequestData = [
      {
        y: pull_requests.OPEN,
        label: "Open",
        indexLabel: `${pull_requests.OPEN}`
      },
      {
        y: pull_requests.CLOSED,
        label: "Closed",
        indexLabel: `${pull_requests.CLOSED}`
      }
    ];
    if (loading) {
      return <Spinner />;
    }
    return (
      <div className="wrapper">
        <RepoDescription result={result} />

        <Box project={result} />
        <div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="section section-fix-height">
                <div className="section-header info">Pull Requests</div>
                <div className="chart-container">
                  {/* <PieChart data={topFiveContributorData.slice(0, 5)} /> */}
                  <ColumnChart data={pullRequestData} />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="section section-fix-height">
                <div className="section-header fork">
                  Top 5 Languages contribution
                </div>
                <div className="chart-container">
                  {languagesData.length ? (
                    <BarChart data={languagesData.slice(0, 5)} />
                  ) : (
                    <h1>Languages details are not available</h1>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 ">
              <div className="section section-fix-height">
                <div className="section-header watch">Deployment status</div>
                <div className="chart-container">
                  {deploymentData.length ? (
                    <DateTimeChart data={deploymentData} />
                  ) : (
                    <h1>Deployment details are not available</h1>
                  )}
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="section section-fix-height">
                <div className="section-header issues">Contributors</div>
                <div className="chart-container contact-chip-container">
                  {contributorsList.map(item => {
                    return <ContactChip data={item} key={item.url} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DashboardPage;
