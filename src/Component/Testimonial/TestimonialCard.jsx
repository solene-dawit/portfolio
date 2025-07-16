import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import './TestimonialCard.css'
import client1 from '../../assets/assets/client1.jpg';
import client2 from '../../assets/assets/client3.jpg';
import client3 from '../../assets/assets/client1.jpg';
import client4 from '../../assets/assets/client2.jpg';

const TestimonialCard = () => {
  const clients = [
    {
      img: client1,
      name: "Adem",
      review: "She perfectly did our job.",
    },
    {
      img: client2,
      name: "Nancy",
      review: "Highly recommend her services!",
    },
    
    {
      img: client4,
      name: "Sarah",
      review: "Exceeded our expectations!",
    },
    {
      img: client3,
      name: "Alex",
      review: "Very professional and efficient!",
    },
  ];

  return (
    <div className="t-wrapper">
      <Swiper
        spaceBetween={20} 
        slidesPerView={3} 
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial">
              <img src={client.img} alt={client.name} />
              <span>{client.name}</span>
              <span>{client.review}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCard;
