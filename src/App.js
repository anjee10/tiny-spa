import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LazyLoad from "react-lazyload"
import "./App.css"
import Home from "./components/Home"
import Comics from "./components/Comics"
import ComicPage from "./components/ComicPage"
import { isLoading, updateStore } from "./actions"

// react router component having switch and routes
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <LazyLoad>
              <Route
                exact
                path="/comics"
                render={(props) => (
                  <Fragment>
                    <Comics {...this.props} />
                  </Fragment>
                )}
              />
              <Route
                path="/comic/:id"
                render={(props) => <ComicPage {...this.props} data={props} />}
              />
            </LazyLoad>
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch) => ({
  updateStore: (data) => dispatch(updateStore(data)),
  isLoading: (data) => dispatch(isLoading(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
