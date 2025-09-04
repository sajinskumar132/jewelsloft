import React from "react";
import "./Services.css";
import { Truck, Tag, ShieldCheck, Headphones } from "lucide-react"; // icons

function Services() {
  const services = [
    {
      icon: <Truck size={36} />,
      title: "Free & Fast Shipping",
      desc: "Get your orders delivered quickly at no extra cost."
    },
    {
      icon: <Tag size={36} />,
      title: "Exclusive Discounts",
      desc: "Enjoy seasonal offers and guaranteed savings."
    },
    {
      icon: <ShieldCheck size={36} />,
      title: "Buyer Protection",
      desc: "Shop with confidence with secure payment options."
    },
    {
      icon: <Headphones size={36} />,
      title: "24/7 Customer Support",
      desc: "We’re here anytime to assist and hear your feedback."
    }
  ];

  return (
    <div className="services_container">
      {services.map((service, index) => (
        <div key={index} className="service_card">
          <div className="icon">{service.icon}</div>
          <h3>{service.title}</h3>
          <p>{service.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default Services;
