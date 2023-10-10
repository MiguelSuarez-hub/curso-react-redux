/* eslint-disable react/prop-types */
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import StarButton from './StarButton';
import { setFavorite } from '../slices/dataSlice';
import { useDispatch } from 'react-redux';

const PokemonCard = ({ name, imagen, abilities, id, favorite }) => {
  const dispatch = useDispatch();

  const handleOnFavorite = () => {
    dispatch(setFavorite({pokemonId: id}));
  } 

  return (
    <Card
      title={name}
      cover={
        <img
          src={imagen}
          alt={name}
        />
      }
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite}/>}
    >
      <Meta description={abilities.length > 1 ? `${abilities[0]}, ${abilities[1]}` : abilities[0] } />
    </Card>
  );
};

export default PokemonCard;