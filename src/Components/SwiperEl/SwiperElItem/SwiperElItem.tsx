import { useState } from 'react';
import { Modal } from '../../Modal/Modal';
import * as SC from './SwiperElItem.styled';
import { ProductCard } from '../../ProductCard/ProductCard';

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

export const SwiperElItem = ({
  id,
  image,
  title,
  description,
  count,
  rate,
  price,
}: IProps) => {
  const [isModal, setIsModal] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModal(prevState => !prevState);
  };
  return (
    <SC.Item onClick={toggleModal}>
      <img src={image} alt={title} />
      {isModal && (
        <Modal toggleModal={toggleModal}>
          <ProductCard
            id={id}
            image={image}
            title={title}
            description={description}
            count={count}
            rate={rate}
            price={price}
          />
        </Modal>
      )}
    </SC.Item>
  );
};
