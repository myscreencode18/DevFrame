import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const testimonials = {
    dev: [
      {
        name: "Sarah Johnson",
        role: "Startup Founder",
        text: "An absolute wizard with code! Our website went from concept to launch in record time.",
        img: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      {
        name: "Michael Brown",
        role: "E-commerce Owner",
        text: "Pixel-perfect design, flawless functionality. Couldn’t ask for better!",
        img: "https://randomuser.me/api/portraits/men/46.jpg"
      }
    ],
    video: [
      {
        name: "Lena Torres",
        role: "YouTuber",
        text: "The edits are cinematic! Every cut and transition is perfectly timed to the music.",
        img: "https://randomuser.me/api/portraits/women/65.jpg"
      },
      {
        name: "David Kim",
        role: "Marketing Director",
        text: "Our ads now pop with energy — exactly the creative spark we needed.",
        img: "https://randomuser.me/api/portraits/men/33.jpg"
      }
    ]
  };

  return (
    // <section className="py-20 bg-gradient-to-r from-cyan-900 via-black to-pink-900 text-white">
    //   <div className="max-w-6xl mx-auto px-6">
    //     <h2 className="text-4xl font-bold text-center mb-12">
    //       What My Clients Say
    //     </h2>

    //     <div className="grid md:grid-cols-2 gap-12">
    //       {/* Web Dev Testimonials */}
    //       <div>
    //         <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
    //           Web Development
    //         </h3>
    //         <Swiper
    //           modules={[Pagination, Autoplay]}
    //           pagination={{ clickable: true }}
    //           autoplay={{ delay: 4000 }}
    //           loop={true}
    //           spaceBetween={30}
    //         >
    //           {testimonials.dev.map((t, i) => (
    //             <SwiperSlide key={i}>
    //               <div className="bg-cyan-950/30 p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-400 transition-all">
    //                 <div className="flex items-center mb-4">
    //                   <img
    //                     src={t.img}
    //                     alt={t.name}
    //                     className="w-12 h-12 rounded-full border-2 border-cyan-400"
    //                   />
    //                   <div className="ml-4">
    //                     <p className="font-bold">{t.name}</p>
    //                     <p className="text-sm text-gray-400">{t.role}</p>
    //                   </div>
    //                 </div>
    //                 <p className="text-gray-300 italic">“{t.text}”</p>
    //               </div>
    //             </SwiperSlide>
    //           ))}
    //         </Swiper>
    //       </div>

    //       {/* Video Editing Testimonials */}
    //       <div>
    //         <h3 className="text-2xl font-semibold text-pink-400 mb-6">
    //           Video Editing
    //         </h3>
    //         <Swiper
    //           modules={[Pagination, Autoplay]}
    //           pagination={{ clickable: true }}
    //           autoplay={{ delay: 4500 }}
    //           loop={true}
    //           spaceBetween={30}
    //         >
    //           {testimonials.video.map((t, i) => (
    //             <SwiperSlide key={i}>
    //               <div className="bg-pink-950/30 p-6 rounded-xl border border-pink-500/30 hover:border-pink-400 transition-all">
    //                 <div className="flex items-center mb-4">
    //                   <img
    //                     src={t.img}
    //                     alt={t.name}
    //                     className="w-12 h-12 rounded-full border-2 border-pink-400"
    //                   />
    //                   <div className="ml-4">
    //                     <p className="font-bold">{t.name}</p>
    //                     <p className="text-sm text-gray-400">{t.role}</p>
    //                   </div>
    //                 </div>
    //                 <p className="text-gray-300 italic">“{t.text}”</p>
    //               </div>
    //             </SwiperSlide>
    //           ))}
    //         </Swiper>
    //       </div>
    //     </div>
    //   </div>
    // </section>
<section className="py-20 bg-gradient-to-b md:bg-gradient-to-r from-cyan-900 via-black to-pink-900 text-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
      What My Clients Say
    </h2>

    <div className="flex flex-col md:grid md:grid-cols-2 gap-12">
      {/* Web Dev Testimonials */}
      <div className="order-1 md:order-none text-center md:text-left">
        <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-6">
          Web Development
        </h3>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          spaceBetween={20}
        >
          {testimonials.dev.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-cyan-950/30 p-5 sm:p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-400 transition-all">
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-14 h-14 rounded-full border-2 border-cyan-400"
                  />
                  <div className="sm:ml-4 mt-3 sm:mt-0 text-center sm:text-left">
                    <p className="font-bold">{t.name}</p>
                    <p className="text-sm text-gray-400">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">“{t.text}”</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Video Editing Testimonials */}
      <div className="order-2 md:order-none text-center md:text-left md:mt-0 mt-12 md:mt-0">
        <h3 className="text-xl sm:text-2xl font-semibold text-pink-400 mb-6">
          Video Editing
        </h3>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500 }}
          loop={true}
          spaceBetween={20}
        >
          {testimonials.video.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-pink-950/30 p-5 sm:p-6 rounded-xl border border-pink-500/30 hover:border-pink-400 transition-all">
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-14 h-14 rounded-full border-2 border-pink-400"
                  />
                  <div className="sm:ml-4 mt-3 sm:mt-0 text-center sm:text-left">
                    <p className="font-bold">{t.name}</p>
                    <p className="text-sm text-gray-400">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">“{t.text}”</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </div>
</section>

    
  );
}
