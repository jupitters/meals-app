import Meals from "./components/Meals"
import Search from "./components/Search"
import Modal from "./components/Modal"
import './App.css';
import useGlobalContext from "./GlobalContext";

function App() {
  const { showModal } = useGlobalContext();

  return (
    <main>
      <Search />
      <Meals />
      {showModal && <Modal />}
    </main>
  )
}

export default App
