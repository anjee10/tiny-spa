import random from "lodash.random"

const MAX_COMICS_TO_SHOW = 9

const fetchComics = async () => {
  let comicDataEndpoints = []

  // populating comics endpoints
  while (comicDataEndpoints.length < MAX_COMICS_TO_SHOW) {
    const comicId = random(100, 700)
    comicDataEndpoints.push(
      `http://localhost:${process.env.REACT_APP_PROXY_PORT}/comic/${comicId}`
    )
  }

  // fetching all comics asynchronously
  return await Promise.all(
    comicDataEndpoints.map((endpoint) => fetch(endpoint))
  )
    .then((responses) => {
      console.log(responses)
      return Promise.all(
        responses.map((response) => {
          return response.json()
        })
      )
    })
    .then((data) => data)
    .catch((e) => console.log(e))
}

export default fetchComics
