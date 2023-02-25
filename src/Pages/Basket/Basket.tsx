import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HiOutlineArrowUturnLeft } from 'react-icons/hi2';
import { ELocalStorage } from '../../Helpers/enums/ls.enum';
import { BasketItem } from './BasketItem/BasketItem';
import { CustomLink } from '../../Components/CustomLink/CustomLink';
import { NoInfo } from '../../Components/NoInfo/NoInfo';
import * as SC from './Basket.styled';
import { useTranslation } from 'react-i18next';

interface IProduct {
  title: string;
  image: string;
  id: number;
  price: number;
  count: number;
}

export const Basket = () => {
  const [products, setProducts] = useState<IProduct[] | []>(() => {
    const isInLs = localStorage.getItem(ELocalStorage.product);
    if (!isInLs) {
      return [];
    }
    const products: IProduct[] = JSON.parse(isInLs);
    return products;
  });
  const location = useLocation();
  const { t } = useTranslation();

  const onDeleteBtn = (id: number) => {
    const items = products.filter(item => item.id !== id);
    setProducts(items);
    localStorage.setItem(ELocalStorage.product, JSON.stringify(items));
  };

  return (
    <SC.Wrap>
      <CustomLink to={location.state?.from ?? '/'}>
        <HiOutlineArrowUturnLeft /> {t('basket.Go back')}
      </CustomLink>

      {products.length ? (
        <SC.List>
          {products.map(({ title, image, id, price, count }) => (
            <BasketItem
              key={id}
              title={title}
              image={image}
              id={id}
              price={price}
              count={count}
              onDeleteBtn={onDeleteBtn}
            />
          ))}
        </SC.List>
      ) : (
        <NoInfo>{t('basket.Your basket is empty...')}</NoInfo>
      )}
    </SC.Wrap>
  );
};
