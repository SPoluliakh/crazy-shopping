import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FcPlus } from 'react-icons/fc';
import { ELocalStorage } from '../../Helpers/enums/ls.enum';
import * as SC from './ProductCard.styled';

interface IProps {
  title: string;
  image: string;
  id: number;
  description?: string;
  count?: number;
  rate?: number;
  price: number;
  key?: number;
}

export const ProductCard = ({
  title,
  image,
  id,
  description,
  count,
  rate,
  price,
}: IProps) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const { t } = useTranslation();

  const onDetailsBtn = (): void => {
    setShowDetails(prevState => !prevState);
  };

  const onAddButton = () => {
    const itemToAdd: IProps = { title, image, id, price };
    const isInLS: string | null = localStorage.getItem(ELocalStorage.product);
    if (!isInLS) {
      localStorage.setItem(ELocalStorage.product, JSON.stringify([itemToAdd]));
      return;
    }
    const lsProducts = JSON.parse(isInLS);
    const product: boolean = lsProducts.some(
      (item: IProps) => item.id === itemToAdd.id
    );
    if (!product) {
      localStorage.setItem(
        ELocalStorage.product,
        JSON.stringify([...lsProducts, itemToAdd])
      );
      return;
    }
  };

  return (
    <SC.Item key={id}>
      <h2>{t(`curd.title.${title}`)}</h2>
      <SC.Wrap>
        <img src={image} alt={title} style={{ width: '150px' }} />
        <div>
          <p>
            {t('curdinfo.Price')}: {price} $
          </p>
          <p>
            {t('curdinfo.Stock')}: {count}
          </p>
          <p>
            {t('curdinfo.Rating')}: {rate}
          </p>
          <SC.AddBtn type="button" onClick={onAddButton}>
            <FcPlus size={24} />
          </SC.AddBtn>
        </div>
      </SC.Wrap>
      <div>
        {showDetails && <p> {t(`curd.description.${description}`)}</p>}
        <button type="button" onClick={onDetailsBtn}>
          {!showDetails ? t(`curdbtn.Details`) : t(`curdbtn.Hide`)}
        </button>
      </div>
    </SC.Item>
  );
};
