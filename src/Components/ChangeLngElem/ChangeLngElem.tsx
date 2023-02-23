import { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

export const ChangeLngElem = () => {
  const { i18n } = useTranslation();

  const onchangeLngClick = (evt: MouseEvent<HTMLButtonElement>) => {
    const { innerText } = evt.currentTarget;
    i18n.changeLanguage(innerText);
  };

  return (
    <div>
      <button type="button" onClick={onchangeLngClick}>
        en
      </button>
      <button type="button" onClick={onchangeLngClick}>
        ua
      </button>
    </div>
  );
};
