import { useTranslation } from 'react-i18next';
import { HiShoppingCart } from 'react-icons/hi2';
import { useLocation } from 'react-router-dom';
import { pages } from '../../Helpers/pages';
import { CustomLink } from '../CustomLink/CustomLink';
import { ChangeLngElem } from '../ChangeLngElem/ChangeLngElem';
import * as SC from './Navigation.styled';

export const Navigation = () => {
  const location = useLocation();

  const { t } = useTranslation();
  return (
    <SC.Container>
      <ChangeLngElem />
      <SC.MainNav>
        <SC.List>
          {pages.map(({ href, name, id }) => (
            <SC.ListItem key={id}>
              <CustomLink to={href}>
                {t(`navigation.${name.toLowerCase()}`)}
              </CustomLink>
            </SC.ListItem>
          ))}
          <SC.ListItem>
            <CustomLink to="basket" state={{ from: location }}>
              <HiShoppingCart size={32} />
            </CustomLink>
          </SC.ListItem>
        </SC.List>
      </SC.MainNav>
    </SC.Container>
  );
};
