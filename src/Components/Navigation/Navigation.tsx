import { useTranslation } from 'react-i18next';
import { HiShoppingCart } from 'react-icons/hi2';
import { useLocation } from 'react-router-dom';
import { pages } from '../../Helpers/pages';
import { CustomLink } from '../CustomLink/CustomLink';

export const Navigation = () => {
  const location = useLocation();

  const { t } = useTranslation();
  return (
    <>
      <nav>
        <ul>
          {pages.map(({ href, name, id }) => (
            <li key={id}>
              <CustomLink to={href}>
                {t(`navigation.${name.toLowerCase()}`)}
              </CustomLink>
            </li>
          ))}
          <li>
            <CustomLink to="basket" state={{ from: location }}>
              <HiShoppingCart size={32} />
            </CustomLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
