import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useFetchProductsQuery } from '../../Redux/catalogueOperations/catalogueOperations';
import { CatalogueNav } from './CatalogueNav/CatalogueNav';
import { ProductCard } from '../../Components/ProductCard/ProductCard';

export const CataloguePage = () => {
  const { data } = useFetchProductsQuery('', {
    refetchOnMountOrArgChange: true,
  });
  const { pathname } = useLocation();

  return (
    <>
      <CatalogueNav />
      {pathname === '/catalogue' && (
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
      )}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
