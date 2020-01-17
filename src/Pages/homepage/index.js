import React from "react";
import Card from "../../Components/Card/index";
import MOCK from "../../MockData/data";
import Spinner from "../../Components/Spinner/index";
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      result: MOCK.TOP_REPO,
      nameList: []
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 5000);
    //https://api.github.com/repos/daltoniam/Starscream/contributors?sort=contributions&order=desc&per_page=100
    // fetch(
    //   "https://api.github.com/search/repositories?q=stars:%22%3E10000%22&sort=stars&order=desc&per_page=100"
    // )
    //   .then(res => res.json())
    //   .then(result => {
    //     let nameList =
    //       result && result.items.map(item => item.name);
    //     console.log(nameList);
    //     this.setState({ result, nameList });
    //   });
  }
  render() {
    const { result, loading } = this.state;
    if (loading) {
      return <Spinner />;
    }
    return (
      <div className="wrapper">
        {result && result.items && <Card reposList={result.items} />}
      </div>
    );
  }
}
export default HomePage;
