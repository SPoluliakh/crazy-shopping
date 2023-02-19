import { useState } from 'react';
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

  const onDetailsBtn = (): void => {
    setShowDetails(prevState => !prevState);
  };

  return (
    <SC.Item key={id}>
      <h2>{title}</h2>
      <SC.Wrap>
        <img src={image} alt={title} style={{ width: '150px' }} />
        <div>
          <p>Price: {price} $</p>
          <p>Stock: {count} </p>
          <p>Rating: {rate}</p>
          <SC.AddBtn type="button">
            <FcPlus size={24} />
          </SC.AddBtn>
        </div>
      </SC.Wrap>
      <div>
        {showDetails && <p> {description}</p>}
        <button type="button" onClick={onDetailsBtn}>
          {!showDetails ? 'Details' : 'Hide'}
        </button>
      </div>
    </SC.Item>
  );
};
