import { useTranslation } from 'react-i18next';
import { pages } from '../../Helpers/pages';
import { CustomLink } from '../CustomLink/CustomLink';

export const Navigation = () => {
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
        </ul>
      </nav>
    </>
  );
};
