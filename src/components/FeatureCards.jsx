import React from 'react';

const FeatureCards = () => {
  const features = [
    {
      title: "Frontend Development",
      description: "Creating stunning user interfaces with React, JavaScript, and modern CSS frameworks like Tailwind.",
      icon: "💻"
    },
    {
      title: "Backend Solutions",
      description: "Building robust server-side applications and APIs using Node.js, Python, and database technologies.",
      icon: "⚙️"
    },
    {
      title: "Full-Stack Integration",
      description: "Seamlessly connecting frontend and backend to deliver complete, end-to-end web solutions.",
      icon: "🔗"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Expertise</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I specialize in creating modern, responsive web applications that deliver exceptional user experiences and business value.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
