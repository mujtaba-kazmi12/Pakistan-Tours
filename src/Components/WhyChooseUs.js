

import React from "react";

// Define your features with a color for each card
const features = [
  {
    title: "20+ Year Experience",
    description:
      "Boasting over two decades in the tourism and hospitality industry, Tour My Pakistan has amassed invaluable experience that sets us apart.",
      icon: "/images/thumb.png",
    color: "bg-blue-100" // Example color class
  },
  {
    title: "A Team of Experts",
    description:
      "Our experienced team at Tour My Pakistan is more than just proficient; they are destination experts for every location within the mesmerizing landscape of India. Their knowledge is an invaluable asset for every traveler.",
      icon: "/images/thumb.png",
    color: "bg-green-100" // Example color class
  },

  {
    title: "Verified Hotels",
    description:
      "We offer a meticulously selected and verified list of high-grade hotels. Our partners consistently deliver top-notch service, ensuring an exceptional experience for our guests.",
      icon: "/images/thumb.png",
    color: "bg-red-100" // Example color class
  },
  {
    title: "Value for Money Tours",
    description:
      "With Tour My Pakistan, your vacation is not just about sightseeing; it's about creating memories that last a lifetime. Our holiday packages are hassle-free and designed with a focus on value for money. Trust us to weave unforgettable experiences into your journey, ensuring every moment you spend with us is well worth it.",
      icon: "/images/thumb.png",
    color: "bg-yellow-100" // Example color class
  },
  // ... add other features with their respective colors
];

const FeatureCard = ({ title, description, icon, color }) => (
    <div className={`flex flex-col items-center p-6 ${color} text-center rounded-lg shadow-md`}>
      {/* Use the icon prop as the source for the img tag */}
      <img src={icon} alt="icon" className="mb-3 w-12 h-12" />
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );

const WhyChooseUs = () => {
  return (
    <section className="py-12 mt-[7%]">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;

