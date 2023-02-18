import { useTranslation } from 'react-i18next';
import { CustomLink } from '../../../Components/CustomLink/CustomLink';
import { catalogueNav } from '../../../Helpers/catalogueNav';

export const CatalogueNav = () => {
  const { t } = useTranslation();

  return (
    <>
      <nav>
        <ul>
          {catalogueNav.map(({ href, name, id }) => (
            <li key={id}>
              <CustomLink to={href}>
                {t('{{name}}', {
                  name: `${name}`,
                })}
              </CustomLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
