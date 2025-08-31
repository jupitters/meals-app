import { AppContext } from "./context";
import { useContext } from "react";

const useGlobalContext = () => {
  return useContext(AppContext);
}

export default useGlobalContext