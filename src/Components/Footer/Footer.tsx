import { HiPhone } from 'react-icons/hi2';
import {
  FaTelegram,
  FaTwitterSquare,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import VISA from '../../Photos/visa.png';
import * as SC from './Footer.styled';

export const Footer = () => {
  return (
    <div className="container">
      <SC.Footer>
        <SC.SotialWrap>
          <SC.SocialIcon href="https://t.me/Poluliakh" target="_blank">
            <FaTelegram size={18} />
          </SC.SocialIcon>
          <SC.SocialIcon href="" target="_blank">
            <FaTwitterSquare size={18} />
          </SC.SocialIcon>
          <SC.SocialIcon href="" target="_blank">
            <FaFacebook size={18} />
          </SC.SocialIcon>
          <SC.SocialIcon href="" target="_blank">
            <FaInstagram size={18} />
          </SC.SocialIcon>
          <SC.SocialIcon
            href="https://www.linkedin.com/in/sergii-poluliakh/"
            target="_blank"
          >
            <FaLinkedinIn size={18} />
          </SC.SocialIcon>
        </SC.SotialWrap>
        <SC.HeartWrap>
          <p>
            2023 © Crazy shopping <SC.Heart>💛</SC.Heart>
            <SC.HeartTwo>💙</SC.HeartTwo>
          </p>
          <SC.VisaImg src={VISA} alt="visa & masterCard" />
        </SC.HeartWrap>
        <div>
          <SC.AdressWrap>
            Kyiv city <br />
            <HiPhone size={16} />
            <SC.Phone target="_blank" href="tel:+380991111111">
              +38 099 XXX XX XX
            </SC.Phone>
            <SC.Mail target="_blank" href="mailto:info@example.com">
              info@example.com
            </SC.Mail>
          </SC.AdressWrap>
        </div>
      </SC.Footer>
    </div>
  );
};
