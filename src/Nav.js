import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Nav extends Component {

  // Calls the onSearch function and passes the value of the button that was clicked.
  searchText = e => {
    this.props.onSearch(e.target.innerText);
  }

  // Calls the function on specific links
  render() {
    return ( 
      <nav className="main-nav">
        <ul>
          <li><Link to="/cats" onClick={this.searchText}>Cats</Link></li>
          <li><Link to="/dogs" onClick={this.searchText}>Dogs</Link></li>
          <li><Link to="/computers" onClick={this.searchText}>Computers</Link></li>
        </ul>
      </nav>
    );
  }
}
 
export default Nav;