import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/CardList.component";
import { SearchBox } from "./components/search-box/searchbox.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monster: users }));
  }

  handleInput = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { searchField, monster } = this.state;

    const filteredMonsters = monster.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>MONSTER ROLODEX</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleInput={this.handleInput}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
