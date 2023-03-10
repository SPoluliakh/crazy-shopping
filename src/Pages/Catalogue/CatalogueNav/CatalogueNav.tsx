import { useTranslation } from 'react-i18next';
import { CustomLink } from '../../../Components/CustomLink/CustomLink';
import { catalogueNav } from '../../../Helpers/catalogueNav';
import * as SC from './CatalogueNav.styled';

export const CatalogueNav = () => {
  const { t } = useTranslation();

  return (
    <>
      <SC.CutalogueNav>
        <SC.List>
          {catalogueNav.map(({ href, name, id }) => (
            <SC.ListItem key={id}>
              <CustomLink to={href}>
                {t(`catalogueNav.${name.toLowerCase()}`)}
              </CustomLink>
            </SC.ListItem>
          ))}
        </SC.List>
      </SC.CutalogueNav>
    </>
  );
};
