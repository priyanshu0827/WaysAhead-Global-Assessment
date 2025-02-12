import React from 'react';
import { ArrowRight, Brain, Globe2, Database } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 pt-24">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 backdrop-blur-sm mb-8">
            <span className="text-blue-200 text-sm font-medium">Transforming Business with AI</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            <span className="block">Empowering Enterprises</span>
            <span className="block text-blue-300 mt-2">Through AI Innovation</span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-xl text-gray-300 leading-relaxed">
            Revolutionize your business with cutting-edge AI solutions for smarter decision-making and enhanced operational efficiency.
          </p>
          <div className="mt-10 flex justify-center gap-6">
            <a
              href="/services"
              className="btn-primary"
            >
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="btn-secondary"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: 'Advanced AI Solutions',
              description: 'Cutting-edge artificial intelligence solutions tailored for your business needs.'
            },
            {
              icon: Globe2,
              title: 'Global Presence',
              description: 'Serving clients worldwide with localized expertise and global insights.'
            },
            {
              icon: Database,
              title: 'Data-Driven Insights',
              description: 'Transform your raw data into actionable business intelligence.'
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="relative group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-300/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <feature.icon className="h-12 w-12 text-blue-300 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 fill-current text-gray-50" viewBox="0 0 1440 74" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,32L60,37.3C120,43,240,53,360,58.7C480,64,600,64,720,58.7C840,53,960,43,1080,37.3C1200,32,1320,32,1380,32L1440,32L1440,74L1380,74C1320,74,1200,74,1080,74C960,74,840,74,720,74C600,74,480,74,360,74C240,74,120,74,60,74L0,74Z" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;