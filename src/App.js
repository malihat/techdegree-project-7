import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import SearchForm from './Search'
import PhotoList from './PhotoList'
import Nav from './Nav'
import NotFound from './NotFound'
import './newIndex.css';

import apiKey from './config'

class App extends Component {
  constructor() {
    super();
    this.state = { 
        photos : []
    }
  }

  // Calls function when page first loads
  componentDidMount() {
    var animal = 'cats'
    this.doSearch(animal);
  }

  // Fetches data from flickr api 
  doSearch = (search) => {
    let api = apiKey;
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${search}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(resData => this.setState({ photos: resData.photos.photo}))
    .catch(err => {
        console.log("There is an error: ", err )
    })
  }

  render() {
    return (

      <BrowserRouter> 
        <div className='container'>

          <SearchForm onSearch={this.doSearch}/>
          <Nav onSearch={this.doSearch} />

          <Switch>
            {/* Redirects the path to /cats when root path is searched */}
            <Route exact path="/" render={ () => <Redirect to="/cats" />} />
            
            <Route path="/" render={props => <PhotoList data={this.state.photos} {...props} />} />
            <Route path="/search/:search" render={ props => <PhotoList {...props} data={this.state.photos} /> } />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
