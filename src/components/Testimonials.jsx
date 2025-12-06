import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Avatar Component - Shows image or first letter with color
const Avatar = ({ name, image }) => {
  // Function to generate consistent color based on name
  const getColorFromName = (name) => {
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-indigo-500",
      "bg-red-500",
      "bg-orange-500",
      "bg-teal-500",
      "bg-cyan-500",
      "bg-rose-500",
    ];

    // Simple hash function to get consistent color for each name
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % colors.length;
    return colors[index];
  };

  const firstLetter = name.charAt(0).toUpperCase();
  const colorClass = getColorFromName(name);

  // If image exists and is not empty, show image
  if (image && image.trim() !== "") {
    return (
      <div className="w-16 h-16 rounded-full border-2 border-yellow-400 overflow-hidden flex-shrink-0">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
    );
  }

  // Otherwise show colored circle with first letter
  return (
    <div
      className={`w-16 h-16 rounded-full border-2 border-yellow-400 flex-shrink-0 flex items-center justify-center ${colorClass}`}
    >
      <span className="text-white text-2xl font-bold">{firstLetter}</span>
    </div>
  );
};

export default function Testimonials() {
  const testimonials = [
    {
      name: "drdavegerhart",
      country: "United States",
      image:null,
      rating: 5,
      feedback:
        "It was a pleasure working with mkamir. He designed a beautiful website in the time required. I was able to make revisions and the turnaround time was really quick. I would recommend him for similar project and I will use him again. Thank you",
    },
    {
      name: "tameekaleon",
      country: "United States",
      image:null,
      rating: 5,
      feedback:
        "Working with MK Aamir was a fantastic experience. They delivered a stunning website that perfectly captured our brand vision. Communication was excellent throughout.",
    },

    {
      name: "Jaklacz",
      country: "Czech Republic",
      image: null,
      rating: 5,
      feedback:
        "Professional, creative, and reliable. MK Aamir delivered beyond our expectations. The attention to detail and commitment to quality is remarkable.",
    },

    {
      name: "chrissy73184",
      country: "United Kingdom",
      image: null,
      rating: 5,
      feedback:
        "Outstanding work! The website is fast, responsive, and exactly what we needed. Their technical expertise and creative approach made all the difference.",
    },
    {
      name: "szamor2010",
      country: "United States",
      image: null,
      rating: 5,
      feedback:
        "It was a pleasure working with Mk Aamir. The service was prompt, and the delivery exceeded my expectations. He was extremely patient, courteous, and took the time to answer all of my questions thoroughly. I look forward to working with him again in the future.",
    },

    {
      name: "reginemutonji",
      country: "Australia",
      image: null,
      rating: 5,
      feedback:
        "Very helpful, all went well. replied quickly , happy to make changes. A pleasant experience.",
    },

    {
      name: "goodwoodz",
      country: "United States",
      image: null,
      rating: 5,
      feedback:
        "Aamir did a great job, willing to help with edits and changes. Very fast and punctual. I have future project that I will use him exclusively for, as he showed great character and kindness throughout the process. Best of luck bud! You made another happy Customer!",
    },
    
    {
      name: "dmayaguy",
      country: "Ireland",
      image: null,
      rating: 5,
      feedback:
        "Great work for the cost and extremely good communication. I would work with him again!",
    },
    {
      name: "blairmi2",
      country: "France",
      image: null,
      rating: 5,
      feedback:
        "Working with MK Aamir has been amazing! They're not just a developer, but a true partner who cares about your success. The results speak for themselves.",
    },
    
    {
      name: "badgerpropertie",
      country: "United States",
      image: null,
      rating: 5,
      feedback:
        "Great communication. willing to go out of the way to make things correct!",
    },

    {
      name: "tameekaleon",
      country: "United States",
      image: null,
      rating: 5,
      feedback:
        "The delivery time was great and I received exactly what I was hoping for. I will definitely order again.",
    },

    {
      name: "treibkraft",
      country: "Germany",
      image: null,
      rating: 5,
      feedback: "did exactly what I requested on a project. Will use again.",
    },

    {
      name: "timothydavis549",
      country: "United States",
      image: null,
      rating: 5,
      feedback: "Seller was very patient and easy going.",
    },

    {
      name: "averie_fvg",
      country: "United States",
      image: null,
      rating: 5,
      feedback:
        "very nice, quick with communication and revisions, very quality work!",
    },

    {
      name: "byminotti1",
      country: "United States",
      image: null,
      rating: 5,
      feedback:
        "I'm happy with my custom website order. The seller was incredibly cooperative and efficient, delivering a fantastic result promptly. I will work again with the seller in the future.",
    },

    {
      name: "mzreese24",
      country: "United States",
      image: null,
      rating: 5,
      feedback:
        "Seller provided the webpage quickly and added what I wanted. Would order again.",
    },

    {
      name: "juliepotter",
      country: "Ireland",
      image: null,
      rating: 5,
      feedback:
        "I am satisfied with the outcome of the order. The seller displayed professionalism, responded promptly, and demonstrated patience throughout the process.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Client Testimonials
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Don't just take my word for it - hear what my clients have to say
          about their experience
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
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              el: ".swiper-pagination-custom",
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
                        ? "border-yellow-400 border-opacity-100 shadow-lg shadow-yellow-400/20"
                        : "border-yellow-400 border-opacity-30"
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      {/* Use Avatar Component */}
                      <Avatar
                        name={testimonial.name}
                        image={testimonial.image}
                      />

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
            <button className="swiper-button-prev-custom w-12 h-12 rounded-full bg-yellow-400 text-slate-950 hover:bg-yellow-500 flex items-center justify-center transition cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button className="swiper-button-next-custom w-12 h-12 rounded-full bg-yellow-400 text-slate-950 hover:bg-yellow-500 flex items-center justify-center transition cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          {/* Custom Pagination */}
          <div className="swiper-pagination-custom flex justify-center gap-2 mt-6"></div>
        </div>
      </div>

      <style jsx>{`
        .testimonials-swiper
          .swiper-pagination-custom
          .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #4b5563;
          opacity: 1;
          border-radius: 50%;
          transition: all 0.3s;
        }

        .testimonials-swiper
          .swiper-pagination-custom
          .swiper-pagination-bullet-active {
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
