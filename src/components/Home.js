import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  // clearing local storage on landing page of the app
  localStorage.clear();

  return (
    <div className="home">
      <h1>Welcome to Single Page Application (SPA)!</h1>
      <h2>
        <Link to="/comics">Comics</Link>
      </h2>
    </div>
  )
}

export default Home
