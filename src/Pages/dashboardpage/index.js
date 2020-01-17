import React from "react";
import Box from "../../Components/Box/index";
import ColumnChart from "../../Components/Charts/ColumnChart";
import PieChart from "../../Components/Charts/PieChart";
import BarChart from "../../Components/Charts/BarChart";
import DateTimeChart from "../../Components/Charts/DateTimeChart";
import ContactChip from "../../Components/ContactChip/index";
import RepoDescription from "../../Components/RepoDescription/index";
import "./style.css";
import MOCK from "../../MockData/data";
class DashboardPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: MOCK.INDIVIDUAL_REPO,
      languages: MOCK.LANGUAGES,
      contributors: MOCK.CONTRIBUTORS,
      deployments: MOCK.DEPLOYMENTS,
      commits: MOCK.COMMITS,
      pull_requests: {
        OPEN: MOCK.PR_OPEN.total_count,
        CLOSED: MOCK.PR_CLOSED.total_count
      },
      nameList: []
    };
  }

  formatDeployementData = data => {
    let dates = data.map(item =>
      item.created_at ? item.created_at.substr(0, 10) : null
    );
    let obj = {};

    dates.map(item => {
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
    //https://api.github.com/repos/facebook/react/deployments
    //https://api.github.com/repos/facebook/react/commits
    //https://api.github.com/search/issues?q=repo:freeCodeCamp/freeCodeCamp%20is:pr%20is:open&per_page=100
    //https://api.github.com/search/issues?q=repo:freeCodeCamp/freeCodeCamp%20is:pr%20is:closed&per_page=1
    // const {
    //   match: { params }
    // } = this.props;
    // fetch(`https://api.github.com/repos/${params.owner}/${params.name}`)
    //   .then(res => res.json())
    //   .then(result => {
    //     console.log(result);
    //   });
  }
  render() {
    const {
      result,
      contributors,
      languages,
      deployments,
      pull_requests
    } = this.state;

    const topFiveContributorData = contributors.map(item => {
      return { label: item.login, y: item.contributions };
    });
    const contributorsList = contributors.map(item => {
      return { img_url: item.avatar_url, name: item.login, url: item.url };
    });
    const languagesData = Object.keys(languages).map(item => {
      return { label: item, y: languages[item] };
    });
    const deploymentData = this.formatDeployementData(deployments);
    console.log(contributorsList);
    const pullRequestData = [
      { y: pull_requests.OPEN, label: "Open" },
      { y: pull_requests.CLOSED, label: "Closed" }
    ];
    return (
      <div className="wrapper">
        <RepoDescription result={result} />

        <Box project={result} />
        <div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="section section-fix-height">
                <div className="section-header star">Pull Requests</div>
                <div className="chart-container">
                  {/* <PieChart data={topFiveContributorData.slice(0, 5)} /> */}
                  <ColumnChart data={pullRequestData} />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="section section-fix-height">
                <div className="section-header fork">
                  Languages contribution
                </div>
                <div className="chart-container">
                  <BarChart data={languagesData} />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 ">
              <div className="section section-fix-height">
                <div className="section-header watch">Deployment status</div>
                <div className="chart-container">
                  <DateTimeChart data={deploymentData} />
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
