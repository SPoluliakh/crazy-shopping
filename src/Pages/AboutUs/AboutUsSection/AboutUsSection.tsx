import { useTranslation } from 'react-i18next';

export const AboutUsSection = () => {
  const { t } = useTranslation();
  return (
    <section>
      <h1>{t('pages.About us.title')}</h1>
      <p>{t('pages.About us.text')}</p>
    </section>
  );
};
