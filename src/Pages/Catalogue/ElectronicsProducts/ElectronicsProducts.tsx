import { useFetchProductsQuery } from '../../../Redux/catalogueOperations/catalogueOperations';
import { ProductCard } from '../../../Components/ProductCard/ProductCard';
import { Loader } from '../../../Components/Loader/Loader';
import * as SC from './ElectronicsProducts.styled';

export const ElectronicsProducts = () => {
  const { data, isLoading } = useFetchProductsQuery(`electronics`);
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
