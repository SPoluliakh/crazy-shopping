import { useTranslation } from 'react-i18next';
import * as SC from './DeliveryInfoPage.styled';

export const DeliveryInfoPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <SC.Section>
        <SC.Title>{t('pages.DeliveryInfo.title')}</SC.Title>
        <SC.Text>{t('pages.DeliveryInfo.text')}</SC.Text>
      </SC.Section>
    </>
  );
};
