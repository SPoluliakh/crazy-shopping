import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const NotFoundPage = lazy(() =>
  import('../../Pages/NotFoundPage/NotFoundPage').then(module => ({
    ...module,
    default: module.NotFoundPage,
  }))
);

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="home" />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
