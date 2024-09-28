import React from 'react';
import './FastFoodItem.css';
import {FastfoodItem} from '../../type';

interface Props extends FastfoodItem {
  addItem: React.MouseEventHandler;
}

const FastFoodItem: React.FC<Props> = ({
                                         name,
                                         price,
                                         image,
                                         addItem
                                       }) => {
  return (
    <div className="food__item" onClick={addItem}>
      <img src={image} alt={name}/>
      <div className="food__text__block">
        <span className="food__item__title">{name}</span>
        <span className="food__item__price">Price: {price} KGS</span>
      </div>
    </div>
  );
};

export default FastFoodItem;