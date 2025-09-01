import { useState } from "react"
import useGlobalContext from "../GlobalContext"

const Search = () => {
  const { setSearchTerm } = useGlobalContext();
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(text) {
      setSearchTerm(text);
      setText('');
    }
  }

  return (
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type your favorite meal!" className="form-input" onChange={handleChange} value={text}/>
        <button type="submit" className="btn">search</button>
        <button type="button" className="btn btn-hipster">surprise me!</button>
      </form>
    </header>
  )
}

export default Search