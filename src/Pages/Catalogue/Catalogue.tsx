import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useFetchProductsQuery } from '../../Redux/catalogueOperations/catalogueOperations';
import { CatalogueNav } from './CatalogueNav/CatalogueNav';
import { ProductCard } from '../../Components/ProductCard/ProductCard';
import { Loader } from '../../Components/Loader/Loader';
import * as SC from './Catalogue.styled';

export const CataloguePage = () => {
  const { data, isLoading } = useFetchProductsQuery('', {
    refetchOnMountOrArgChange: true,
  });
  const { pathname } = useLocation();

  return (
    <SC.Section>
      <CatalogueNav />
      {isLoading && <Loader />}
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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </SC.Section>
  );
};
