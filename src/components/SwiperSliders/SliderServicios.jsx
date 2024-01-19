// SWIPER
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './EstiloSliderServicios.css'


// import required modules
import { Keyboard, Navigation } from "swiper/modules";

const SliderServicios = () => {
  return (
    <div class="container mx-auto" id="SliderServicios">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        modules={[Keyboard, Navigation]}
        className="SliderServicios"
      >
        <SwiperSlide><img src="https://i.pinimg.com/originals/8d/61/95/8d6195c42d58c9e664b0e5d407f49dc9.png" alt="Nombre integrante - Cargo" width="312px" height="360" />
        </SwiperSlide>
        <SwiperSlide><img src="https://i.pinimg.com/originals/8d/61/95/8d6195c42d58c9e664b0e5d407f49dc9.png" alt="Nombre integrante - Cargo" width="312px" height="360" />
        </SwiperSlide>
        <SwiperSlide><img src="https://i.pinimg.com/originals/8d/61/95/8d6195c42d58c9e664b0e5d407f49dc9.png" alt="Nombre integrante - Cargo" width="312px" height="360" />
        </SwiperSlide>
        <SwiperSlide><img src="https://i.pinimg.com/originals/8d/61/95/8d6195c42d58c9e664b0e5d407f49dc9.png" alt="Nombre integrante - Cargo" width="312px" height="360" />
        </SwiperSlide>
        <SwiperSlide><img src="https://i.pinimg.com/originals/8d/61/95/8d6195c42d58c9e664b0e5d407f49dc9.png" alt="Nombre integrante - Cargo" width="312px" height="360" />
        </SwiperSlide>
        <SwiperSlide><img src="https://i.pinimg.com/originals/8d/61/95/8d6195c42d58c9e664b0e5d407f49dc9.png" alt="Nombre integrante - Cargo" width="312px" height="360" />
        </SwiperSlide>


      </Swiper>
    </div>

  )
}

export default SliderServicios