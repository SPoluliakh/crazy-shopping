import { useState, MouseEvent } from 'react';
import * as SC from './BasketItem.styled';

interface IProps {
  title: string;
  image: string;
  id?: number;
  price: number;
  key: number;
  count: number;
}

export const BasketItem = ({ title, image, price, count }: IProps) => {
  const [totalPrice, setTotalPrice] = useState<number>(1);

  const countQuantity = (evt: MouseEvent<HTMLButtonElement>) => {
    const { name } = evt.currentTarget;
    setTotalPrice(prevState =>
      name === 'increment' ? prevState + 1 : prevState - 1
    );
  };
  return (
    <SC.Item>
      <SC.Img src={image} alt={title} />
      <SC.Title>{title}</SC.Title>
      <p>{price * totalPrice} $</p>
      <SC.CountWrapper>
        <button
          type="button"
          name="increment"
          onClick={countQuantity}
          disabled={totalPrice === count}
        >
          +
        </button>
        <p> {totalPrice} </p>
        <button
          type="button"
          name="decrement"
          onClick={countQuantity}
          disabled={totalPrice === 1}
        >
          -
        </button>
        <button>DELETE</button>
      </SC.CountWrapper>
    </SC.Item>
  );
};
