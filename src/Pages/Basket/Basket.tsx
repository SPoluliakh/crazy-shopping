import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ELocalStorage } from '../../Helpers/enums/ls.enum';
import { BasketItem } from './BasketItem/BasketItem';

interface IProduct {
  title: string;
  image: string;
  id: number;
  price: number;
  count: number;
}

export const Basket = () => {
  const [produts] = useState<IProduct[] | []>(() => {
    const isInLs = localStorage.getItem(ELocalStorage.product);
    if (!isInLs) {
      return [];
    }
    const products: IProduct[] = JSON.parse(isInLs);
    return products;
  });
  const location = useLocation();

  return (
    <>
      <Link to={location.state?.from ?? '/'}>Go back </Link>
      <ul>
        {produts.map(({ title, image, id, price, count }) => (
          <BasketItem
            key={id}
            title={title}
            image={image}
            id={id}
            price={price}
            count={count}
          />
        ))}
      </ul>
    </>
  );
};
