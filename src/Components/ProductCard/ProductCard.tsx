import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FcPlus } from 'react-icons/fc';
import * as SC from './ProductCard.styled';

interface IProps {
  title: string;
  image: string;
  id: number;
  description: string;
  count: number;
  rate: number;
  price: number;
  key: number;
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

  return (
    <SC.Item key={id}>
      <h2>{t(`mens.title.${title}`)}</h2>
      <SC.Wrap>
        <img src={image} alt={title} style={{ width: '150px' }} />
        <div>
          <p>
            {t('productinfo.Price')}: {price} $
          </p>
          <p>
            {t('productinfo.Stock')}: {count}
          </p>
          <p>
            {t('productinfo.Rating')}: {rate}
          </p>
          <SC.AddBtn type="button">
            <FcPlus size={24} />
          </SC.AddBtn>
        </div>
      </SC.Wrap>
      <div>
        {showDetails && <p> {t(`mens.description.${description}`)}</p>}
        <button type="button" onClick={onDetailsBtn}>
          {!showDetails ? t(`productbtn.Details`) : t(`productbtn.Hide`)}
        </button>
      </div>
    </SC.Item>
  );
};
