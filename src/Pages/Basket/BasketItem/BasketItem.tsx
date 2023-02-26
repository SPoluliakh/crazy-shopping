import { useState, MouseEvent } from 'react';
import {
  HiOutlineTrash,
  HiOutlineArrowLongDown,
  HiOutlineArrowLongUp,
} from 'react-icons/hi2';
import { useDispatch } from 'react-redux';
import { decrement } from '../../../Redux/basket/basketSlice';
import * as SC from './BasketItem.styled';

interface IProps {
  title: string;
  image: string;
  id: number;
  price: number;
  key: number;
  count: number;
  onDeleteBtn: (id: number) => void;
}

export const BasketItem = ({
  title,
  image,
  price,
  count,
  id,
  onDeleteBtn,
}: IProps) => {
  const [totalPrice, setTotalPrice] = useState<number>(1);
  const dispatch = useDispatch();

  const countQuantity = (evt: MouseEvent<HTMLButtonElement>) => {
    const { name } = evt.currentTarget;
    setTotalPrice(prevState =>
      name === 'increment' ? prevState + 1 : prevState - 1
    );
  };

  const handleItemDelete = () => {
    onDeleteBtn(id);
    dispatch(decrement(1));
  };

  return (
    <SC.Item>
      <SC.Wrapper>
        <SC.Img src={image} alt={title} />
        <SC.Title>{title}</SC.Title>
        <p>{(price * totalPrice).toFixed(2)} $</p>
        <SC.CountWrapper>
          <SC.Buttons
            type="button"
            name="increment"
            onClick={countQuantity}
            disabled={totalPrice === count}
          >
            <HiOutlineArrowLongUp size="24" />
          </SC.Buttons>
          <p> {totalPrice} </p>
          <SC.Buttons
            type="button"
            name="decrement"
            onClick={countQuantity}
            disabled={totalPrice === 1}
          >
            <HiOutlineArrowLongDown size="24" />
          </SC.Buttons>
        </SC.CountWrapper>
      </SC.Wrapper>
      <SC.DeleteBtn onClick={handleItemDelete}>
        <HiOutlineTrash size="24" fill="indianred" />
      </SC.DeleteBtn>
    </SC.Item>
  );
};
