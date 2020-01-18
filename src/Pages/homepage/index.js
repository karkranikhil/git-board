import React from "react";
import Card from "../../Components/Card/index";
import MOCK from "../../MockData/data";
import Spinner from "../../Components/Spinner/index";
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      result: [],
      total: []
    };
  }
  componentDidMount() {
    if (MOCK.useMock) {
      this.setState({
        total: MOCK.TOP_REPO.items,
        result: MOCK.TOP_REPO.items,
        loading: false
      });
    } else {
      fetch(
        "https://api.github.com/search/repositories?q=stars:%22%3E10000%22&sort=stars&order=desc&per_page=100"
      )
        .then(res => res.json())
        .then(result => {
          this.setState({
            total: result.items,
            result: result.items,
            loading: false
          });
        })
        .catch(error => {
          this.setState({ loading: false });
          throw error;
        });
    }
  }
  filterHandler = event => {
    const { total } = this.state;
    let value = event.target.value
      ? event.target.value.toLowerCase()
      : event.target.value;

    let filteredResult = total.filter(item =>
      item.name.toLowerCase().includes(value)
    );
    this.setState({ result: filteredResult });
  };
  render() {
    const { total, result, loading } = this.state;
    console.log(total.length);
    console.log(result.length);

    if (loading) {
      return <Spinner />;
    }
    return (
      <div className="wrapper">
        <div>
          <input
            type="text"
            className="searchbox"
            placeholder="Search by repository name"
            onChange={this.filterHandler}
          />
        </div>
        {total.length && result.length ? (
          <Card reposList={result} />
        ) : total.length && !result.length ? (
          <div className="error-box">
            Sorry !! Repository name you have entered is not in the
              top 100.
          </div>
        ) : (
          <div className="error-box">
            Sorry, API limit is over for the day please try again later.
          </div>
        )}
      </div>
    );
  }
}
export default HomePage;
