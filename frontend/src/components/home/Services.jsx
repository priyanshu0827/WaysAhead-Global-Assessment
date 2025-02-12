import React, { useState, useEffect } from 'react';
import { ShoppingCart, Map, Store, TrendingUp, Video, Notebook as Robot, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: ShoppingCart,
    title: 'AI Shop Assist',
    description: 'Intelligent shopping assistance powered by AI for enhanced customer experience.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Real-time recommendations', 'Virtual shopping assistance', 'Customer behavior analytics']
  },
  {
    icon: Map,
    title: 'Geo-Spatial Analytics',
    description: 'Location-based insights for strategic decision making and market analysis.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Market penetration analysis', 'Territory optimization', 'Site selection analytics']
  },
  {
    icon: Store,
    title: 'In-Store Analytics',
    description: 'Real-time retail analytics for optimizing store performance and customer satisfaction.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Foot traffic analysis', 'Heat mapping', 'Queue management']
  },
  {
    icon: TrendingUp,
    title: 'SCM Analytics',
    description: 'Supply chain optimization through advanced analytics and AI.',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Demand forecasting', 'Inventory optimization', 'Route optimization']
  },
  {
    icon: Video,
    title: 'Video Analytics',
    description: 'Intelligent video analysis for security and business insights.',
    image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Object detection', 'Behavior analysis', 'Security monitoring']
  },
  {
    icon: Robot,
    title: 'Robotics',
    description: 'Advanced robotics solutions for automation and efficiency.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Warehouse automation', 'Quality control', 'Assembly line robotics']
  }
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
      }, 5000); // Change slide every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive AI solutions tailored to your business needs
          </p>
        </div>

        <div className="relative">
          {/* Main Content */}
          <div className="relative h-[600px] overflow-hidden rounded-2xl bg-white shadow-lg">
            <div
              className="absolute inset-0 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex h-full" style={{ width: `${services.length * 100}%` }}>
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="relative"
                    style={{ width: `${100 / services.length}%` }}
                  >
                    <div className="absolute inset-0">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover opacity-10"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-300/20" />
                    </div>
                    <div className="relative h-full flex flex-col justify-center px-8 md:px-16 py-12">
                      <div className="flex items-center mb-6">
                        <service.icon className="h-12 w-12 text-blue-600 mr-4" />
                        <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                      </div>
                      <p className="text-xl text-gray-600 mb-8 max-w-2xl">{service.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center bg-blue-50 rounded-lg p-4"
                          >
                            <ArrowRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <a
                        href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="btn-primary self-start"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-200"
            >
              <ChevronLeft className="h-6 w-6 text-gray-900" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-200"
            >
              <ChevronRight className="h-6 w-6 text-gray-900" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;