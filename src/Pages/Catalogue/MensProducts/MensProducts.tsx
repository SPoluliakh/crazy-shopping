import { useFetchProductsQuery } from '../../../Redux/catalogueOperations/catalogueOperations';
import { CatalogueNav } from '../CatalogueNav/CatalogueNav';

export const MensProducts = () => {
  const { data } = useFetchProductsQuery(`men's clothing`);
  console.log(data);
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
    </>
  );
};
