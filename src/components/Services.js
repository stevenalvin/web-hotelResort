import React, { useState } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import data from "../data";
const Services = () => {
  const [services, setServices] = useState([
    {
      icon: <FaCocktail />,
      title: "free cocktails",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, repellat.",
    },
    {
      icon: <FaHiking />,
      title: "endless hiking",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, repellat.",
    },
    {
      icon: <FaShuttleVan />,
      title: "free shuttle",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, repellat.",
    },
    {
      icon: <FaBeer />,
      title: "free beer",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, repellat.",
    },
  ]);
  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {services.map((service, index) => {
          return (
            <article key={index} className="service">
              <span>{service.icon}</span>
              <h6>{service.title}</h6>
              <p>{service.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
