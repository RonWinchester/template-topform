import React from "react";
import {
  Route,
  Switch,
  useLocation,
  useHistory,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Catalog from "./components/Catalog/Catalog";
import { getMovies } from "./utils/Api";
import Footer from "./components/Footer/Footer";
import Card from "./components/Cards/Cards";

function App() {
  const handleRequest = () => {
    getMovies()
      .then((response) => {
        localStorage.setItem("savedMovies", JSON.stringify(response));
        const saveMovieSearch = JSON.parse(localStorage.getItem("savedMovies"));
        setItems(saveMovieSearch.slice(1, 10));
        setTech(saveMovieSearch.slice(10, 20));
        setTech1(saveMovieSearch.slice(20, 30));
        setTech2(saveMovieSearch.slice(30, 40));
        setTech3(saveMovieSearch.slice(40, 50));
        setTech4(saveMovieSearch.slice(50, 60));
      })
      .catch((err) => {
        console.log(`Ошибка при загрузке карточек: ${err}`);
      });
  };

  const [tech, setTech] = React.useState([]);
  const [tech1, setTech1] = React.useState([]);
  const [tech2, setTech2] = React.useState([]);
  const [tech3, setTech3] = React.useState([]);
  const [tech4, setTech4] = React.useState([]);

  React.useEffect(() => {
    handleRequest();
  }, []);

  const [items, setItems] = React.useState([]);
  return (
    <>
      <Switch>
        <>
          <Header></Header>
          <Route exact path="/">
            <Catalog items={items} />
          </Route>
          <Route path="/katalog/tech">
            <Catalog items={tech} />
          </Route>
          <Route path="/katalog/clothes">
            <Catalog items={tech1} />
          </Route>
          <Route path="/katalog/forkids">
            <Catalog items={tech2} />
          </Route>
          <Route path="/katalog/cosmo">
            <Catalog items={tech3} />
          </Route>
          <Route path="/katalog/forpets">
            <Catalog items={tech4} />
          </Route>
{/*           <Route parh='/goods'>
            <Card></Card>
          </Route> */}
          <Footer></Footer>
        </>
      </Switch>
    </>
  );
}

export default App;
