import Overlay from './components/Overlay';
import Authorization from './components/Authorization';
import Card from './components/Card';
import Header from  './components/Header';
import React from 'react'
import axios from 'axios'

// const arr = [
//   {
//     "price": 10499,
//     "title": "Кроссовки Nike Air Force 1",
//     "imageUrl": "./img/sneakers/sneakers1.svg",
//   },
//
//   {
//     "price": 11999,
//     "title": "Кроссовки Jordan Air Jordan 1",
//     "imageUrl": "./img/sneakers/sneakers2.svg",
//   },
//
//   {
//     "price": 8499,
//     "title": "Кроссовки adidas Originals Stan Smith",
//     "imageUrl": "./img/sneakers/sneakers3.svg",
//   },
//
//   {
//     "price": 10499,
//     "title": "Кроссовки PUMA x Butter Goods Slipstream",
//     "imageUrl": "./img/sneakers/sneakers4.svg",
//   },
//
//   {
//     "price": 10799,
//     "title": "Кроссовки Nike Air Force 1 High",
//     "imageUrl": "./img/sneakers/sneakers5.svg",
//   },
//
//   {
//     "price": 23999,
//     "title": "Кроссовки adidas Originals Yeezy Boost 350",
//     "imageUrl": "./img/sneakers/sneakers6.svg",
//   },
//
//   {
//     "price": 14499,
//     "title": "Мужские кроссовки Nike Air Max 2021",
//     "imageUrl": "./img/sneakers/sneakers7.svg",
//   },
//
//   {
//     "price": 8999,
//     "title": "Мужские кроссовки Jordan One Take III",
//     "imageUrl": "./img/sneakers/sneakers8.svg",
//   },
// ]

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [formOpened, setFormOpened] = React.useState(false);

  const onAddToCart = (obj) => {
      axios.post('https://61c0378233f24c00178231b8.mockapi.io/cart', obj );
      setCartItems(prev => [...prev, obj]);
  }

  const onRemoveItem = (id) => {
      axios.delete(`https://61c0378233f24c00178231b8.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter(item => item.id !== id));npm
  }

  const onChangeSearchInput  = (event) => {
      setSearchValue(event.target.value);
  }

  React.useEffect(() => {
      axios.get('https://61c0378233f24c00178231b8.mockapi.io/items')
          .then((res) => {
              setItems(res.data);
          });
      axios.get('https://61c0378233f24c00178231b8.mockapi.io/cart')
          .then((res) => {
              setCartItems(res.data);
          });
  }, [])

  return (
      <div className="wrapper">
        {cartOpened && <Overlay items={cartItems} onClose = {() => setCartOpened(false)} onRemove={onRemoveItem}/>}

        {formOpened && <Authorization onCloseForm = {() => setFormOpened(false)}/>}

        <Header onClickCart = {() => setCartOpened(true)} onClickForm = {() => setFormOpened(true)} />

        <div className="slider">
          <img src="./img/slider.svg" alt="slider"/>
          <div className="sliderItem">
            <div className="sliderTitle">
              <h1>Выбери свой <br/><b className="sliderTitleStyle">стиль</b></h1>
            </div>
            <button className="sliderButton">Смотреть</button>
          </div>
          <div className="sliderItemImg">
          </div>
        </div>

        <div className="content">
          <div className="contentHeader">
              <h3>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Рекомендуем'}</h3>
              <div className="searchBlock">

                  {searchValue && (
                      <img onClick={() => setSearchValue ('')}
                           className="deleteSearch"
                           width={16} height={16}
                           src="./img/deleteInput.svg" alt="Delete"/>
                  )}

                  <img width={20} height={30} src="./img/search.svg" alt="Search"/>
                  <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
              </div>
          </div>

          <div className="contentCard">
            {items
                .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                .map((item, title) => (
                <Card
                    key = {item.title}
                    price={item.price}
                    title={item.title}
                    imageUrl={item.imageUrl}
                    onPlus = {(obj) => onAddToCart(obj)}
                />
            ))}
          </div>
        </div>

        <div className="banner">
          <img src="./img/banner.svg" alt="banner"/>
          <div className="bannerTitle">#Не будь как <b>все</b></div>
        </div>

        <footer className="footer">
          <div className="footerContainer">
            <ul className="footerItem"><h3>О компании</h3>
              <li>Вакансии</li>
              <li>Контакты</li>
              <li>Магазины</li>
              <li>Новости</li>
              <li>Обратная связь</li>
              <li>О нас</li>
              <li>Оферта</li>
            </ul>
            <ul className="footerItem"><h3>Помощь</h3>
              <li>Бонусная программа</li>
              <li>Доставка и оплата</li>
              <li>Обмен и возрват</li>
              <li>Подобрать размер</li>
              <li>Подарочный сертификат</li>
            </ul>
            <ul className="footerItem"><h3>Бренды</h3>
              <li>adidas</li>
              <li>nike</li>
              <li>puma</li>
              <li>Jordan</li>
            </ul>
          </div>
        </footer>
      </div>

  )}

export default App;
