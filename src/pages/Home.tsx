import { Helmet } from "react-helmet-async";
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Calendar, Award } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';  
import 'swiper/css/navigation';  
import 'swiper/css/pagination';


const Home = () => {
  const swiperRef = useRef(null);

 const handleSlideChange = () => {
    if (swiperRef.current) {
      const iframes = document.querySelectorAll('.youtube-video');
      iframes.forEach((iframe) => {
        const src = iframe.src;
        iframe.src = src; // Reset the src to stop playback
      });
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80"
            alt="Luxury Event Setup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Creating Unforgettable Events in Mbarara
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Premium event planning, luxury decorations, and state-of-the-art mega tents for your special occasions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/contact" className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center">
              Get Your Free Quote <ArrowRight className="ml-2" />
            </Link>
            <Link to="/gallery" className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              View Our Work
            </Link>
          </motion.div>
        </div>
      </section>
      
<section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Star className="h-8 w-8 text-purple-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Events Completed</p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-purple-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-900 mb-2">10K+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="text-center">
              <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-900 mb-2">5+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <Award className="h-8 w-8 text-purple-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From intimate gatherings to grand celebrations, we provide everything you need for a perfect event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80"
                alt="Mega Tents"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mega Tents</h3>
                <p className="text-gray-600 mb-4">
                  State-of-the-art tents for events of any size, providing comfort and elegance
                </p>
                <Link
                  to="/services"
                  className="text-purple-600 font-semibold hover:text-purple-700 flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80"
                alt="Luxury Decorations"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Luxury Decorations</h3>
                <p className="text-gray-600 mb-4">
                  Transform any space into a stunning venue with our premium décor services
                </p>
                <Link
                  to="/services"
                  className="text-purple-600 font-semibold hover:text-purple-700 flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80"
                alt="Event Planning"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Event Planning</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive event planning services to ensure your celebration is perfect
                </p>
                <Link
                  to="/services"
                  className="text-purple-600 font-semibold hover:text-purple-700 flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
       {/* YouTube Video Slider Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our YouTube Videos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our event planning videos, featuring behind-the-scenes footage and client testimonials.
            </p>
          </div>

          {/* Swiper Carousel for YouTube Videos */}
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={handleSlideChange} // Pause previous video on slide change
          >
            <SwiperSlide>
              <iframe
                className="youtube-video"
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/13Fd-vOIm5k"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
            
            <SwiperSlide>
              <iframe
                className="youtube-video"
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/G2k05Slr7ys"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Home;
