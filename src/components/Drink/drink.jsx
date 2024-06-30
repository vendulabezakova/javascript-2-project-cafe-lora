import './style.css';
import { Layer } from '../Layer/layer.jsx';

export const Drink = ({ id, name, ordered, image, layers }) => {
  return (
    <div className="drink">
      <h2>{name}</h2>
      <img src={image} alt={name} />
    </div>
  );
};