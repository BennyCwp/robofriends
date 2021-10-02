import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchInput: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({
          robots: users,
        });
      });
  }

  inputChange = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
  };

  render() {
    const { robots, searchInput } = this.state;
    const filteredArray = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    return robots.length === 0 ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Robofriends</h1>
        <SearchBox handleChange={this.inputChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robotsArray={filteredArray} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
