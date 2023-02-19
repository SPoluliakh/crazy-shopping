import { useFetchProductsQuery } from '../../../Redux/catalogueOperations/catalogueOperations';
import { ProductCard } from '../../../Components/ProductCard/ProductCard';
import * as SC from './ElectronicsProducts.styled';

export const ElectronicsProducts = () => {
  const { data } = useFetchProductsQuery(`electronics`);
  return (
    <>
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
