import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FcPlus } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { increment } from '../../Redux/basket/basketSlice';
import { localStorageFunc } from '../../Helpers/localStorageFunc';
import * as SC from './ProductCard.styled';

interface IProps {
  title: string;
  image: string;
  id: number;
  description?: string;
  count: number;
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
  const dicpatch = useDispatch();

  const onDetailsBtn = (): void => {
    setShowDetails(prevState => !prevState);
  };

  const onAddButton = useCallback(() => {
    const result: boolean = localStorageFunc({
      title,
      image,
      id,
      price,
      count,
    });

    if (!result) {
      toast.warn(`Alrady in basket`);
      return;
    }
    dicpatch(increment(1));
    toast.success(`Yahoooo, added to the basket`);
  }, [title, image, id, price, count, dicpatch]);

  const descriptionKey = description?.replaceAll(':', '_');

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
        {showDetails && <p> {t(`curd.description.${descriptionKey}`)}</p>}
        <SC.BtnDetails type="button" onClick={onDetailsBtn}>
          <SC.Span>
            {!showDetails ? t(`curdbtn.Details`) : t(`curdbtn.Hide`)}
          </SC.Span>
        </SC.BtnDetails>
      </div>
    </SC.Item>
  );
};
