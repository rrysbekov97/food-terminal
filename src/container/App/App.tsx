import './App.css';
import {useState} from 'react';
import FastFoodItem from '../../components/FastFoodItem/FastFoodItem';
// import {fastfooditems} from './constants';
import removeItemImg from '../../assets/remove.png';

import {FastfoodItem} from '../../type';
import burgerLogo from '../../assets/burger.png';
import friedLogo from '../../assets/fried.png';
import coffeeLogo from '../../assets/coffee.png';
import teaLogo from '../../assets/tea.png';
import colaLogo from '../../assets/cola.png';

 
export const fastfooditems:FastfoodItem[] = [
  {name: 'Hamburger', price: 80, image: burgerLogo},
  {name: 'Cheeseburger', price: 90, image: burgerLogo},
  {name: 'Fries', price: 45, image: friedLogo},
  {name: 'Coffee', price: 70, image: coffeeLogo},
  {name: 'Tea', price: 50, image: teaLogo},
  {name: 'Cola', price: 40, image: colaLogo}
];

const App = () => {
  const [order, setOrder] = useState([
    {name: 'Hamburger', count: 0},
    {name: 'Cheeseburger', count: 0},
    {name: 'Fries', count: 0},
    {name: 'Coffee', count: 0},
    {name: 'Tea', count: 0},
    {name: 'Cola', count: 0}
  ]);

  const addButton = (name: string) => {
    const index = order.findIndex(item => name === item.name);
    const newList = [...order];
    const newObj = {...order[index]};
    newObj.count = newObj.count + 1;
    newList[index] = newObj;
    setOrder(newList);
  };

  const deleteBtn = (name: string) => {
    const index = order.findIndex(item => name === item.name);
    const newArr = [...order];
    const newObj = {...order[index]};
    newObj.count = newObj.count - 1;
    newArr[index] = newObj;
    setOrder(newArr);
  };
  const getPrice = (name: string): number => {
    const index = fastfooditems.findIndex(item => item.name === name);
    return fastfooditems[index].price;
  };

  return (
    <div className="food__container">
      <div className="food__order">
        <div>Order details:</div>
        {
          order
            .filter(item => item.count)
            .map(item => {
              return (
                <div className="food__item__order" key={Math.random()}>
                  <span>{item.name}</span>
                  <span className="food__count">x{item.count}</span>
                  <span className="food__price">{getPrice(item.name)} KGS</span>
                  <img className="food__item__remove" onClick={() => deleteBtn(item.name)} src={removeItemImg}
                       alt="Delete item"/>
                </div>
              );
            })
        }
         
      </div>
      <div>Add items:</div>
      <div className="food__items">
        {
          fastfooditems.map(item => {
            return (
              <FastFoodItem
                key={item.name}
                name={item.name}
                price={item.price}
                image={item.image}
                addItem={() => addButton(item.name)}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default App;
