import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSlider() {
  const slides = [
    {
      title: "Manage All Your Utility Bills in One Place",
      text: "Track, pay, and download all your electricity, gas, water, and internet bills easily from one simple dashboard.",
      button: "Get Started Now",
      image: "/image/slider1.jpg",
    },
    {
      title: "Pay Your Bills Instantly & Securely",
      text: "Use your favorite payment method — card, bKash, or PayPal — to pay bills with one click. Fast and safe.",
      button: "Pay Your Bill",
      image: "/image/slider2.jpg",
    },
    {
      title: "Track Your Monthly Expenses Like a Pro",
      text: "Visualize your spending patterns with smart charts and filter your bill history anytime. Download detailed reports instantly.",
      button: "View Bill History",
      image: "/image/slider3.jpg",
    },
    {
      title: "Get Timely Reminders for Upcoming Bills",
      text: "Never miss a due date again! Receive notifications and alerts before your bills are due.",
      button: "Enable Reminders",
      image: "/image/slider4.jpg",
    },
    {
      title: "Go Green with Digital Bills",
      text: "Manage and store all your bills digitally. It's eco-friendly, efficient, and future-ready.",
      button: "Join the Green Move",
      image: "/image/slider5.jpg",
    },
  ];

  return (
    <div className="w-full h-[85vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        // autoplay={{ delay: 4000, disableOnInteraction: false }}
        effect="fade"
        // loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content */}
              <div className="relative z-10 text-center px-6 max-w-2xl">
                <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-white text-lg mb-6 opacity-90">
                  {slide.text}
                </p>
                <button className=" btn btn-primary hover:bg-primary-dark  font-semibold py-3 px-6 rounded-full transition">
                  {slide.button}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
