import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Search from './Search/Search';
import Result from './Result/Result';
import axios from "axios";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: []
    }
    console.log(this.state.info);
  }

  componentDidMount() {
    this.getSearch()
  }

//Get ID, image and recipe name
  getSearch() {
    axios.get(`https://api.spoonacular.com/recipes/search?apiKey=13df1ae347014b5f8b2e14deeae44fe9`)
    .then((response) => {
      console.log(response);
        this.setState({
          info: response.data.results
        })
        console.log(this.state.info);
    }
  )}

//Get ingredients needed to make recipe ID
  getRecipe() {
    axios.get(``)
    .then((response) => {
      console.log(response);
        this.setState({
          info: response.data.results
        })
        console.log(this.state.info);
    }
  )}



  render() {
    return (
      <div className="mainBody">
        <div className="maxContainer">
          <Header />
          <Search />
          <div className="resultsContainer">

            {this.state.info.map((info)=> {
              console.log(info.id);
            return (
                <Result
                  title={info.title}
                  image={info.image}
                  key={info.id}
                />
            );
          })}
        </div>

        </div>
      </div>
    );
  };
}



export default App;
