import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const Basket = () => {
  const location = useLocation();
  return (
    <>
      <Link to={location.state?.from ?? '/'}>Go back </Link>
    </>
  );
};
