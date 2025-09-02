import Meals from "./components/Meals"
import Search from "./components/Search"
import Modal from "./components/Modal"
import './App.css';
import useGlobalContext from "./GlobalContext";
import Favorites from "./components/Favorites";

function App() {
  const { showModal, favorites } = useGlobalContext();

  return (
    <main>
      <Search />
      {favorites.length > 0 && <Favorites />}
      <Meals />
      {showModal && <Modal />}
    </main>
  )
}

export default App
