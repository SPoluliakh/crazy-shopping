import { useTranslation } from 'react-i18next';

export const DeliveryInfoPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t('pages.DeliveryInfo.title')}</h1>
      <section>
        <p>{t('pages.DeliveryInfo.text')}</p>
      </section>
    </>
  );
};
