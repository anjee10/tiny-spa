import React from "react"
import { Link } from "react-router-dom"
import { LazyLoadImage } from 'react-lazy-load-image-component';

// comic `li` element
const ComicList = (props) => {
  const comicPageLink = `/comic/${props.comicData.num}`

  return (
    <li className="comics_item">
      <Link to={comicPageLink}>
        <div className="comic">
          <div className="comic_image">
            <LazyLoadImage
              src={props.comicData.img}
							alt={props.comicData.title}
							effect="blur"
            />
          </div>
        </div>
      </Link>
    </li>
  )
}

export default ComicList
