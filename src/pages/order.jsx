import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import { Footer } from '../components/Footer/footer.jsx';
import { Header } from '../components/Header/header.jsx';
import { Order } from '../components/Order/order.jsx';

const response = await fetch('http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image');
const json = await response.json();
const orderedItems = json.data;
console.log(orderedItems)


document.querySelector('#root').innerHTML = render(
  <div className="page">
    <div className="page">
      <Header showMenu={false}/>
      <main className="order">
        <div className="container order__content">
          <h1>Vaše objedávnka</h1>
          <Order items={orderedItems} />
        </div>
      </main>
     <Footer />
    </div>
  </div>
);
