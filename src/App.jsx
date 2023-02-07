import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import LocationInfo from "./components/LocationInfo";
import Pagination from "./components/Pagination";
import ResidentList from "./components/ResidentList";
import ResidentForm from "./ResidentForm";
import { numbersPage } from "./utils/handlePagination";
import { getRandomNumber } from "./utils/handleRamdom";

const RESIDENT_PERPAGE = 10;

function App() {
  //Estado que alamcena la informacion de la location
  const [location, setLocation] = useState();
  //Estado que almacena el valor del input no controlado
  const [nameLocation, setNameLocation] = useState("");
  const [page, setPage] = useState(1);

  //funcion que se ejecuta en el submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); //prevee la ejecucion de un formulario vacio
    setNameLocation(e.target.idLocation.value);
  };
  //Funcion que se encarga de obtener los residentes de la pagina actual
  const pagination = () => {
    const maxLimit = page * RESIDENT_PERPAGE;
    const minLimit = maxLimit - RESIDENT_PERPAGE;
    // if(!location) return []
    const newResident = location?.residents.slice(minLimit, maxLimit);
    return newResident;
  };

  //Efecto que se ejecuta en el primer render y cuando cambia nameLocation
  useEffect(() => {
    setPage(1);
    const dimension = nameLocation === "" ? getRandomNumber(126) : nameLocation;
    const URL = `https://rickandmortyapi.com/api/location/${dimension}`;
    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  }, [nameLocation]);

  return (
    <div className="App">
      <div className="banner">
        <ResidentForm handleSubmit={handleSubmit} />
      </div>
      <LocationInfo location={location} />      
      <Pagination numbersPage={numbersPage} setPage={setPage} location={location} RESIDENT_PERPAGE={RESIDENT_PERPAGE} />
      <ResidentList pagination={pagination} />
      <Pagination numbersPage={numbersPage} setPage={setPage} location={location} RESIDENT_PERPAGE={RESIDENT_PERPAGE} />
    </div>
  );
}

export default App;
