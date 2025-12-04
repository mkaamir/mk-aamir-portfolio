import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Anderson",
      country: "United States",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      rating: 5,
      feedback: "Their attention to detail and passion for web development sets them apart. Every project has exceeded my expectations. Highly professional and responsive!"
    },
    {
      name: "Sarah Williams",
      country: "United Kingdom",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      rating: 5,
      feedback: "Working with MK Aamir was a fantastic experience. They delivered a stunning website that perfectly captured our brand vision. Communication was excellent throughout."
    },
    {
      name: "Michael Chen",
      country: "Canada",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      rating: 5,
      feedback: "Outstanding work! The website is fast, responsive, and exactly what we needed. Their technical expertise and creative approach made all the difference."
    },
    {
      name: "Emma Rodriguez",
      country: "Spain",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      rating: 5,
      feedback: "Absolutely brilliant! They transformed our outdated website into a modern masterpiece. The user experience improved dramatically, and our customers love it."
    },
    {
      name: "David Kim",
      country: "South Korea",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      rating: 5,
      feedback: "Professional, creative, and reliable. MK Aamir delivered beyond our expectations. The attention to detail and commitment to quality is remarkable."
    },
    {
      name: "Lisa Thompson",
      country: "Australia",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
      rating: 5,
      feedback: "I couldn't be happier with the results! The website is beautiful, fast, and has significantly improved our online presence. Highly recommend their services."
    },
    {
      name: "Ahmed Hassan",
      country: "United Arab Emirates",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
      rating: 5,
      feedback: "Exceptional quality and service! They understood our requirements perfectly and delivered a solution that exceeded all expectations. True professional!"
    },
    {
      name: "Sophie Martin",
      country: "France",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      rating: 5,
      feedback: "Working with MK Aamir has been amazing! They're not just a developer, but a true partner who cares about your success. The results speak for themselves."
    },
    {
      name: "James Wilson",
      country: "New Zealand",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop",
      rating: 5,
      feedback: "Fantastic experience from start to finish! The website looks incredible and performs flawlessly. Their expertise in modern web technologies is impressive."
    },
    {
      name: "Maria Garcia",
      country: "Mexico",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
      rating: 5,
      feedback: "Best decision we made! Our new website has increased conversions and customer engagement significantly. Professional, skilled, and a pleasure to work with."
    }
  ];

  return (
    <section id='testimonials' className="py-20 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Client Testimonials
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Don't just take my word for it - hear what my clients have to say about their experience
        </p>

        <div className="relative testimonials-swiper">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            centeredSlides={true}
            initialSlide={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              el: '.swiper-pagination-custom',
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                centeredSlides: true,
              },
            }}
            className="pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <div
                    className={`bg-slate-900 rounded-lg p-6 border-2 transition-all duration-300 h-full ${
                      isActive
                        ? 'border-yellow-400 border-opacity-100 shadow-lg shadow-yellow-400/20'
                        : 'border-yellow-400 border-opacity-30'
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full border-2 border-yellow-400 overflow-hidden flex-shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-bold text-lg">
                          {testimonial.name}
                        </h3>
                        <p className="text-yellow-400 text-sm">
                          {testimonial.country}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={20} 
                          className="text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>

                    <p className="text-gray-400 leading-relaxed">
                      "{testimonial.feedback}"
                    </p>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-2">
            <button
              className="swiper-button-prev-custom w-12 h-12 rounded-full bg-yellow-400 text-slate-950 hover:bg-yellow-500 flex items-center justify-center transition cursor-pointer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              className="swiper-button-next-custom w-12 h-12 rounded-full bg-yellow-400 text-slate-950 hover:bg-yellow-500 flex items-center justify-center transition cursor-pointer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          {/* Custom Pagination */}
          <div className="swiper-pagination-custom flex justify-center gap-2 mt-6"></div>
        </div>
      </div>

      <style jsx>{`
        .testimonials-swiper .swiper-pagination-custom .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #4b5563;
          opacity: 1;
          border-radius: 50%;
          transition: all 0.3s;
        }

        .testimonials-swiper .swiper-pagination-custom .swiper-pagination-bullet-active {
          width: 32px;
          background: #facc15;
          border-radius: 6px;
        }

        .testimonials-swiper .swiper-slide {
          height: auto;
        }
      `}</style>
    </section>
  );
}