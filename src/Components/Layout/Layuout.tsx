import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AppBar } from '../AppBar/AppBar';
import { SwiperEl } from '../SwiperEl/SwiperEl';
import { Footer } from '../Footer/Footer';

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
      <Footer />
      <ToastContainer autoClose={3000} />
    </>
  );
};
