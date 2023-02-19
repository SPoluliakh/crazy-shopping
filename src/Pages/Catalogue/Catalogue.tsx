import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useFetchProductsQuery } from '../../Redux/catalogueOperations/catalogueOperations';
import { CatalogueNav } from './CatalogueNav/CatalogueNav';
import { ProductCard } from '../../Components/ProductCard/ProductCard';
import * as SC from './Catalogue.styled';

export const CataloguePage = () => {
  const { data } = useFetchProductsQuery('', {
    refetchOnMountOrArgChange: true,
  });
  const { pathname } = useLocation();

  return (
    <>
      <CatalogueNav />
      {pathname === '/catalogue' && (
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
      )}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
