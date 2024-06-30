import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header/header.jsx';
import { Footer } from '../components/Footer/footer.jsx';
import { Gallery } from '../components/Gallery/gallery.jsx';
import { Menu } from '../components/Menu/menu.jsx';
import { Contact } from '../components/Contact/contact.jsx';
import { Banner } from '../components/Banner/banner.jsx';
import { Drink } from '../components/Drink/drink.jsx';



document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);

const nav = document.querySelector('.nav-btn')
const rolloutNav = document.querySelector('.rollout-nav')
nav.addEventListener('click', () => {
rolloutNav.classList.toggle('nav-closed')
})

 rolloutNav.addEventListener('click', () => {
 rolloutNav.classList.add('nav-closed')
 })

 const buttons = document.querySelectorAll('.order-btn')
 buttons.forEach((button, index) => {
  button.addEventListener('click', async() => {
    const response = await fetch(`http://localhost:4000/api/drinks/${drinks[index].id}`, {
      method:'PATCH',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify([{ op: 'replace', path: '/ordered', value: true }])
    });
    const data = await response.json();
    window.location.reload()
  });
});