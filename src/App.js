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
import Element from "./components/Card/Card";

function App() {

  const [tech, setTech] = React.useState([]);
  const [tech1, setTech1] = React.useState([]);
  const [tech2, setTech2] = React.useState([]);
  const [tech3, setTech3] = React.useState([]);
  const [tech4, setTech4] = React.useState([]);

  const [items, setItems] = React.useState([]);

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

  React.useEffect(() => {
    handleRequest();
  }, []);

  const [good, setGood] = React.useState({});
  const [loc, setLoc] = React.useState('')
  function goodsPage(item, loc) {
    setGood(item);
    setLoc(loc);
  }

  return (
    <>
      <Switch>
        <>
          <Header></Header>
          <Route exact path="/main">
            <Catalog items={items} goodsPage={goodsPage} />
          </Route>
          <Route exact path="/katalog/tech">
            <Catalog items={tech} goodsPage={goodsPage} />
          </Route>
          <Route exact path="/katalog/clothes">
            <Catalog items={tech1} goodsPage={goodsPage} />
          </Route>
          <Route exact path="/katalog/forkids">
            <Catalog items={tech2} goodsPage={goodsPage} />
          </Route>
          <Route exact path="/katalog/cosmo">
            <Catalog items={tech3} goodsPage={goodsPage} />
          </Route>
          <Route exact path="/katalog/forpets">
            <Catalog items={tech4} goodsPage={goodsPage} />
          </Route>
          <Route exact path={`${loc}/${good.id}`}>
            <Element item={good}></Element>
          </Route>
          <Footer></Footer>
        </>
      </Switch>
    </>
  );
}

export default App;
