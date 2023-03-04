import { useTranslation } from 'react-i18next';
import { HiShoppingCart } from 'react-icons/hi2';

import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { getBasket } from '../../Redux/basket/basketSlice';
import { pages } from '../../Helpers/pages';
import { CustomLink } from '../CustomLink/CustomLink';
import * as SC from './BurgerMenu.styled';

interface IProps {
  toggleMenu: () => void;
  isshowMenu: boolean;
}

export const BurgerMenu = ({ toggleMenu, isshowMenu }: IProps) => {
  const { t } = useTranslation();
  const basket = useSelector(getBasket);
  const location = useLocation();

  useEffect(() => {
    if (isshowMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isshowMenu]);

  return (
    <>
      <SC.Container
        onClick={toggleMenu}
        className={isshowMenu ? 'enter' : 'out'}
      >
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
        <SC.BasketCount>{basket}</SC.BasketCount>
      </SC.Container>
    </>
  );
};
