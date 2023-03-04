import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HiShoppingCart } from 'react-icons/hi2';
import { FaAlignJustify } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getBasket } from '../../Redux/basket/basketSlice';
import { pages } from '../../Helpers/pages';
import { CustomLink } from '../CustomLink/CustomLink';
import { ChangeLngElem } from '../ChangeLngElem/ChangeLngElem';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import * as SC from './Navigation.styled';

let innerWidth: boolean = window.innerWidth >= 768;

export const Navigation = () => {
  const [isshowMenu, setIsShowMenu] = useState<boolean>(false);
  const location = useLocation();
  const { t } = useTranslation();
  const basket = useSelector(getBasket);

  const toggleMenu = (): void => {
    setIsShowMenu(!isshowMenu);
  };

  return (
    <SC.Container>
      <ChangeLngElem />
      {!innerWidth && (
        <button
          onClick={toggleMenu}
          type="button"
          style={{ background: 'transparent', border: 'none' }}
        >
          <FaAlignJustify size="24" />
        </button>
      )}

      {!innerWidth && (
        <BurgerMenu toggleMenu={toggleMenu} isshowMenu={isshowMenu} />
      )}

      {innerWidth && (
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
      )}
      {innerWidth && <SC.BasketCount>{basket}</SC.BasketCount>}
    </SC.Container>
  );
};
