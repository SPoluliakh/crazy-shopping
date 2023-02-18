// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
import { useFetchProductsQuery } from '../../Redux/catalogueOperations/catalogueOperations';
import { CatalogueNav } from './CatalogueNav/CatalogueNav';

export const CataloguePage = () => {
  const { data } = useFetchProductsQuery('', {
    refetchOnMountOrArgChange: true,
  });

  return (
    <>
      <CatalogueNav />
      <ul>
        {data?.map(
          ({ title, image, id, description, rating: { count, rate } }) => (
            <li key={id}>
              <h2>{title}</h2>
              <img src={image} alt={title} style={{ width: '150px' }} />
              <p>{description}</p>
              <p>{count}</p>
              <p>{rate}</p>
            </li>
          )
        )}
      </ul>
      {/* <Suspense fallback={null}>
        <Outlet />
      </Suspense> */}
    </>
  );
};
