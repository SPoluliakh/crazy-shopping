import { useFetchProductsQuery } from '../../../Redux/catalogueOperations/catalogueOperations';
import { ProductCard } from '../../../Components/ProductCard/ProductCard';
import { Loader } from '../../../Components/Loader/Loader';
import * as SC from './MensProducts.styled';

export const MensProducts = () => {
  const { data, isLoading } = useFetchProductsQuery(`men's clothing`);

  return (
    <>
      {isLoading && <Loader />}
      <SC.List>
        {data?.map(
          ({
            title,
            image,
            id,
            description,
            price,
            rating: { count, rate },
          }) => (
            <ProductCard
              key={id}
              title={title}
              image={image}
              id={id}
              description={description}
              count={count}
              rate={rate}
              price={price}
            />
          )
        )}
      </SC.List>
    </>
  );
};
