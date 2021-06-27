import Banner from "./components/banner/Banner";
import Nav from "./components/navbar/Nav.js";
import ToolBar from "./components/toolbar/ToolBar.js";
import GridDashboard from "./components/gridDashboard/GridDashboard.js";
import "./App.css";
import { useState } from "react";


function App() {
  const [tag, setTag] = useState("");
  const [fav, setFav] = useState([]);

  const selectTag = (tag) => {
    setTag(tag);
  };

  const pushFav = (pushfav) => {
    let random = fav;
    random.push(pushfav);
    setFav(random);
  };

  return (
    <div className="App">
      <Nav />
      <Banner />
      <ToolBar selectTag={selectTag} />
      <GridDashboard selectedTag={tag} pushFav={pushFav} favourites={fav} />
    </div>
  );
}

export default App;
