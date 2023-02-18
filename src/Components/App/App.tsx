import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layuout';
import { MensProducts } from '../../Pages/Catalogue/MensProducts/MensProducts';

const NotFoundPage = lazy(() =>
  import('../../Pages/NotFoundPage/NotFoundPage').then(module => ({
    ...module,
    default: module.NotFoundPage,
  }))
);
const AboutUsPage = lazy(() =>
  import('../../Pages/AboutUs/AboutUsPage').then(module => ({
    ...module,
    default: module.AboutUsPage,
  }))
);
const DeliveryInfoPage = lazy(() =>
  import('../../Pages/DeliveryInfoPage/DeliveryInfoPage').then(module => ({
    ...module,
    default: module.DeliveryInfoPage,
  }))
);
const CataloguePage = lazy(() =>
  import('../../Pages/Catalogue/Catalogue').then(module => ({
    ...module,
    default: module.CataloguePage,
  }))
);

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="catalogue" />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="delivery" element={<DeliveryInfoPage />} />
          <Route path="catalogue" element={<CataloguePage />} />
          <Route path="men" element={<MensProducts />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
