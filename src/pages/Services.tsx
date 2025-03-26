import React from "react";
import { Link } from "react-router-dom"; // ✅ Add this import
import { motion } from "framer-motion";
import { Tent, PartyPopper, CalendarClock, Users, Music, UtensilsCrossed } from "lucide-react";


const Services = () => {
  const services = [
    {
      icon: <Tent className="h-12 w-12 text-purple-600" />,
      title: "Mega Tents",
      description: "State-of-the-art tents suitable for events of any size. Our premium tents provide the perfect shelter while adding elegance to your occasion.",
      features: [
        "Various sizes available",
        "Weather-resistant materials",
        "Professional installation",
        "Elegant designs"
      ]
    },
    {
      icon: <PartyPopper className="h-12 w-12 text-purple-600" />,
      title: "Luxury Decorations",
      description: "Transform any venue into a stunning celebration space with our premium decoration services.",
      features: [
        "Custom themes",
        "Premium materials",
        "Lighting design",
        "Floral arrangements"
      ]
    },
    {
      icon: <CalendarClock className="h-12 w-12 text-purple-600" />,
      title: "Event Planning",
      description: "Comprehensive event planning services to ensure every detail of your special day is perfect.",
      features: [
        "Venue selection",
        "Timeline management",
        "Vendor coordination",
        "Budget planning"
      ]
    },
    {
      icon: <Users className="h-12 w-12 text-purple-600" />,
      title: "Staff & Security",
      description: "Professional event staff and security personnel to ensure smooth operation of your event.",
      features: [
        "Trained personnel",
        "Professional uniforms",
        "Security coordination",
        "Guest management"
      ]
    },
    {
      icon: <Music className="h-12 w-12 text-purple-600" />,
      title: "Entertainment",
      description: "Complete entertainment solutions to keep your guests engaged throughout the event.",
      features: [
        "Live bands",
        "DJs & MCs",
        "Sound systems",
        "Lighting effects"
      ]
    },
    {
      icon: <UtensilsCrossed className="h-12 w-12 text-purple-600" />,
      title: "Catering Services",
      description: "Exquisite catering options to delight your guests with delicious cuisine.",
      features: [
        "Custom menus",
        "Professional service",
        "Quality ingredients",
        "Dietary options"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&q=80"
            alt="Event Services"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Comprehensive event solutions tailored to make your special occasion truly memorable.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="inline-block p-3 bg-purple-50 rounded-full mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <span className="h-2 w-2 bg-purple-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-purple-50 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Create Your Perfect Event?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help make your special occasion truly unforgettable.
          </p>
         <Link
  to="/contact"
  className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
>
  Get Your Free Quote
</Link>

        </motion.div>
      </div>
    </div>
  );
};

export default Services;
