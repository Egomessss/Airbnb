// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import data from "../assets/data.json"
// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"

// import required modules
import { FreeMode, Pagination } from "swiper"

export default function SwipeCarousel() {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      {data.imgs.map((img) => {
        return (
          <SwiperSlide>
            <img
              key={img.link}
              alt=""
              src={img.link}
            />
            <p>{img.title}</p>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
