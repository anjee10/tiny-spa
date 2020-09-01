import React, { Component } from "react"
import find from "lodash.find"

// comic page having all required details
class ComicPage extends Component {
  render() {
    // fetching which comic is clicked!
    const { match } = this.props.data
    const comicId = match.params.id

    // checking if there is anything in local storage to use?
    const comicsData =
      this.props.comicsData.length > 0
        ? this.props.comicsData
        : JSON.parse(localStorage.getItem("lsComicsData")) || []

    // persisting in local storage, so page refresh can still get store state data
    localStorage.setItem("lsComicsData", JSON.stringify(comicsData))

    // finding clicked comic id from comics data
    const comicFound = find(comicsData, function (d) {
      return d.num === parseInt(comicId, 10)
    })

    return (
      <div>
        {comicFound ? (
          <div>
            <div className="comics__item">
              <div className="comic">
                <div className="comic_image">
                  <img
                    src={comicFound.img}
                    alt={comicFound.title}
                    loading="lazy"
                  />
                </div>
                <div>&nbsp;</div>
                {comicFound.num ? (
                  <div>
                    <div>Number: {comicFound.num}</div>
                    <div>&nbsp;</div>
                  </div>
                ) : null}
                {comicFound.title ? (
                  <div>
                    <div>Title: {comicFound.title}</div>
                    <div>&nbsp;</div>
                  </div>
                ) : null}
                {comicFound.day || comicFound.month || comicFound.year ? (
                  <div>
                    <div>
                      Date: {comicFound.day}/{comicFound.month}/
                      {comicFound.year}
                    </div>
                    <div>&nbsp;</div>
                  </div>
                ) : null}
                {comicFound.transcript ? (
                  <div>
                    <div>Transcript: {comicFound.transcript}</div>
                    <div>&nbsp;</div>
                  </div>
                ) : null}
                <div>&nbsp;</div>
              </div>
            </div>
          </div>
        ) : (
          "Comic not found :("
        )}
      </div>
    )
  }
}

export default ComicPage
