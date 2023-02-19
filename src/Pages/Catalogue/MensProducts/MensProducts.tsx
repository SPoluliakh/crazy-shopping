import { useFetchProductsQuery } from '../../../Redux/catalogueOperations/catalogueOperations';

import { ProductCard } from '../../../Components/ProductCard/ProductCard';

export const MensProducts = () => {
  const { data } = useFetchProductsQuery(`men's clothing`);

  return (
    <>
      <ul>
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
      </ul>
    </>
  );
};