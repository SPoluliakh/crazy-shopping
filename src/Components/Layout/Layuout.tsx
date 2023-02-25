import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AppBar } from '../AppBar/AppBar';
import { SwiperEl } from '../SwiperEl/SwiperEl';

export const Layout = () => {
  return (
    <>
      <div className="container">
        <AppBar />
        <SwiperEl />
      </div>
      <main className="container">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer autoClose={3000} />
    </>
  );
};
