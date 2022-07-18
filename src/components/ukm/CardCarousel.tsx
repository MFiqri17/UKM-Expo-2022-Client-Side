import * as React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';

interface ICardCarouselProps<T, P> {
  data: Array<T>;
  maxSlidesPerView: number;
  Card: React.ComponentType<T & { helperFunction?: P }>;
  helperFunction?: P;
}

export default function CardCarousel<
  T = Record<string, unknown>,
  P = () => void
>({ data, Card, maxSlidesPerView, helperFunction }: ICardCarouselProps<T, P>) {
  const [slidesPerView, setSlidesPerView] =
    React.useState<number>(maxSlidesPerView);

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1024 && window.innerWidth > 768) {
        setSlidesPerView(3 > data.length ? data.length : 3);
      } else if (window.innerWidth <= 768 && window.innerWidth > 500) {
        setSlidesPerView(2 > data.length ? data.length : 2);
      } else if (window.innerWidth <= 500) {
        setSlidesPerView(1 > data.length ? data.length : 1);
      } else {
        setSlidesPerView(4 > data.length ? data.length : 4);
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [data.length]);

  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation]}
        slidesPerView={slidesPerView}
        navigation
        watchOverflow={true}
        spaceBetween={25}
      >
        {helperFunction
          ? data.map((props, i) => (
              <SwiperSlide key={i}>
                <Card {...props} helperFunction={helperFunction} />
              </SwiperSlide>
            ))
          : data.map((props, i) => (
              <SwiperSlide key={i}>
                <Card {...props} />
              </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
}
