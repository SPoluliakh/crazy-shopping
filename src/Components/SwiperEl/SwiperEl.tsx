import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import { useFetchProductsQuery } from '../../Redux/catalogueOperations/catalogueOperations';
import { SwiperElItem } from './SwiperElItem/SwiperElItem';

export const SwiperEl = () => {
  const { data } = useFetchProductsQuery('');
  return (
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
          slidesPerView: 3,
          spaceBetween: 10,
          slidesPerGroup: 3,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 10,
          slidesPerGroup: 5,
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 10,
          slidesPerGroup: 5,
        },
      }}
    >
      {data?.map(
        ({ id, image, title, description, rating: { count, rate }, price }) => (
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
  );
};

// title,
//   image,
//   id,
//   description,
// count,
// rate,
// price,