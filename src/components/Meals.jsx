// import { useGlobalContext } from "../context"
import useGlobalContext from "../GlobalContext";

const Meals = () => {
  const context = useGlobalContext();
  console.log(context);
  return (
    <div>Meals Component</div>
  )
}

export default Meals