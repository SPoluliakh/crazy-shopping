import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import { useFetchProductsQuery } from '../../Redux/catalogueOperations/catalogueOperations';
import { SwiperElItem } from './SwiperElItem/SwiperElItem';
import { Loader } from '../Loader/Loader';

export const SwiperEl = () => {
  const { data, isLoading } = useFetchProductsQuery('');
  return (
    <>
      {isLoading && <Loader />}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
            slidesPerGroup: 3,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 10,
            slidesPerGroup: 5,
          },
        }}
      >
        {data?.map(
          ({
            id,
            image,
            title,
            description,
            rating: { count, rate },
            price,
          }) => (
            <SwiperSlide key={id}>
              <SwiperElItem
                id={id}
                image={image}
                title={title}
                description={description}
                count={count}
                rate={rate}
                price={price}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </>
  );
};
