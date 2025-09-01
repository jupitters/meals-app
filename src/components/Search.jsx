import { useState } from "react"
import useGlobalContext from "../GlobalContext"

const Search = () => {
  return (
    <header className="search-container">
      <form>
        <input type="text" placeholder="Type your favorite meal!" className="form-input"/>
        <button type="submit" className="btn">search</button>
        <button type="button" className="btn btn-hipster">surprise me!</button>
      </form>
    </header>
  )
}

export default Search