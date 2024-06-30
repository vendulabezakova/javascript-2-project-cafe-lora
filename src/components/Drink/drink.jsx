import './style.css';
import { Layer } from '../Layer/layer.jsx';

export const Drink = ({ name, image, layers }) => {
  return (
    <div className="drink">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <div className="layers">
        {layers.map((layer, index) => (
          <Layer key={index} color={layer.color} label={layer.label} />
        ))}
      </div>
    </div>
  );
};