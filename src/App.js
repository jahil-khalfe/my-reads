import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchPage from './SearchPage'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true
  }

  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <Route exact path="/" component={ListBooks}/>
            <Route path="/search" component={SearchPage}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default BooksApp
