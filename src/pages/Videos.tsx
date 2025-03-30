import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const Videos = () => {
  const videos = [
    { src: "/videos/luxury.mp4", title: "Luxury Wedding Highlights", description: "A stunning celebration of love and elegance" },
    { src: "/videos/cooperate.mp4", title: "Corporate Event Setup", description: "Behind the scenes of our premium event setup" },
    { src: "/videos/client-testimonial.mp4", title: "Client Testimonials", description: "Hear what our clients say about us" },
    { src: "/videos/event-planning.mp4", title: "Event Planning Process", description: "How we create unforgettable experiences" },
    { src: "/videos/mega-tent-install.mp4", title: "Mega Tent Installation", description: "Watch our team in action" },
    { src: "/videos/decoration-showcase.mp4", title: "Decoration Showcase", description: "Our finest decoration work" },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80"
            alt="Video Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Event Videos</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Watch our events come to life through carefully crafted video highlights.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative w-full h-56 sm:h-64 lg:h-72">
                <video
                  src={video.src}
                  controls
                  className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                ></video>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section - Unchanged */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-20 bg-purple-50 rounded-2xl p-12 text-center"
      >
        <div className="inline-block p-4 bg-purple-100 rounded-full mb-6">
          <Play className="h-8 w-8 text-purple-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Want to See More?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Subscribe to our YouTube channel for more event highlights and behind-the-scenes content.
        </p>
        <a
          href="https://youtube.com/@tinaheventsug?si=rqTx3E4qmT8V4kiK"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
        >
          Visit Our YouTube Channel
        </a>
      </motion.div>
    </div>
  );
};

export default Videos;
