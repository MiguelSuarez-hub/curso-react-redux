/* eslint-disable react/prop-types */
import { useEffect} from "react";
import { Col, Spin } from "antd";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import { fetchPokemonWithDetails } from "./slices/dataSlice";

function App() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonWithDetails());
  }, []);

  return (
    <div className="App">
      <h1>Pokedux</h1>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? <Col span={12} offset={12} style={{ marginTop: 50 }}>
        <Spin spinning size="large" />
      </Col> : <PokemonList pokemons={pokemons}/> }    
    </div>
  );
}

export default App;
