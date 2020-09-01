import React, { Component } from "react"
import ComicList from "./ComicList"
import Loader from "./Loader"
import fetchComics from "../lib/fetchComics"

class Comics extends Component {
  constructor(props) {
    super(props)
    this.fetchData = this.fetchData.bind(this)
  }

  // fetching comics and setting it to store
  fetchData = () => {
    this.props.isLoading(true)
    fetchComics().then((response) => this.props.updateStore(response))
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    return (
      <div>
        {this.props.loading ? (
          <Loader />
        ) : (
          <div>
            <div>
              <ul className="comics">
                {this.props.comicsData.map((comicData, i) => (
                  <ComicList key={i} comicData={comicData} />
                ))}
              </ul>
            </div>
            <div className="reload">
              <button onClick={this.fetchData}>Reload</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Comics
