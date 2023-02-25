import { useTranslation } from 'react-i18next';
import * as SC from './AboutUsSection.styled';

export const AboutUsSection = () => {
  const { t } = useTranslation();
  return (
    <SC.Section>
      <SC.Title>{t('pages.About us.title')}</SC.Title>
      <SC.Text>{t('pages.About us.text')}</SC.Text>
    </SC.Section>
  );
};
