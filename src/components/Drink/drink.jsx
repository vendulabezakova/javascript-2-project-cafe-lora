import './style.css';
import { Layer } from '../Layer/layer.jsx';

export const Drink = ({ id, name, ordered, image, layers }) => {
return(
    <div className="drinks-list">
      <div className="drink">
        <div className="drink__product">
          <div className="drink__cup">
            <img src={image} alt={name} />
          </div>
          <div className="drink__info">
            <h3>{name}</h3>
            <Layer color="#feeeca" label="mléčná pěna" />
          </div>
        </div>
    <form className="drink__controls">
      <input type="hidden" className="order-id" value="0" />
      <button className="order-btn">
        Objednat
      </button>
    </form>
    </div>
    </div>
)
};