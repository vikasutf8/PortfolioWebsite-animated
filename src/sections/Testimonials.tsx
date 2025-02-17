import { FC } from "react";
import image1 from "@/assets/images/testimonial-1.jpg";
import image2 from "@/assets/images/testimonial-2.jpg";
import image3 from "@/assets/images/testimonial-3.jpg";
import { div } from "motion/react-client";
import Image from "next/image";
import Button from "@/components/button";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const testimonials = [
  {
    name: "December 2024 – Present",
    company: "Vigyapan Mart Pvt. Ltd.",
    role: "Software Developer Intern",
    quote:
      "Implemented Domain-Driven Design in a microservices-based backend using Spring Boot and Nginx, ensuring scalable data modeling with MySQL.",
    image: image1,
    imagePositionY: 0.2,
  },
  {
    name: "June 2024 – August 2024",
    company: "OctaNet Services Pvt. Ltd.",
    role: "Full Stack Developer Intern",
    quote:
      "Designed a microservices architecture within an MVC-based system, optimizing API integration and UI responsiveness.",
    image: image2,
    imagePositionY: 0.1,
  },
  {
    name: "December 2023 – April 2024",
    company: "Fusion IIITDMJ",
    role: "Software Developer Intern",
    quote:
      "MVT-based refined Django APIs to boost search performance by 40%, optimized PostgreSQL storage, and React.js for a seamless user experience.",
    image: image3,
    imagePositionY: 0.55,
  },
];

const Testimonials: FC = () => {

  const testimonialIndex = 0;

  return <section className="section">
    <h2 className="text-4xl md:text-7xl lg:text-8xl flex flex-col overflow-hidden">
      <span className="whitespace-nowrap">
        Reflections from my journey in software development.
      </span>
      <span className="whitespace-nowrap self-end text-red-orange-500">
        Reflections from my journey in software development.
      </span>
    </h2>

    <div className="container">
      <div className="mt-20 ">
        {testimonials.map(({ name, company, role, quote, image, imagePositionY }, index) => index === testimonialIndex && (
          <div key={name} className="grid md:grid-cols-5 md:gap-8 lg:gap-16 md:items-center ">
            <div className="aspect-square md:aspect-[9/16] md:col-span-2">
              <Image src={image} alt={role} className="size-full object-cover"
                style={{
                  objectPosition: `50% ${imagePositionY * 100}%`
                }} />
            </div>
            <blockquote className="md:col-span-3">
              {/*  */}
              <div className="text-3xl 
            md:text-[42px] leading-[44px] lg:text-6xl
            mt-8 md:mt-0">
                <span>&ldquo;</span>
                <span>
                  {quote}
                </span>
                <span>&rdquo;</span>
              </div>
              <cite className="mt-4 md:mt-8 not-italic md:text-lg block lg:text-xl">
                <div>
              <div>  {name}</div>
                <div>{role} at {company}</div>
                </div>
              </cite>
            </blockquote>
          </div>

        ))}
      </div>
      {/* arrows  */}
      <div className="flex gap-4 mt-6 lg:mt-10 ">
        <Button
          variant="secondary"
          className="border border-stone-500 size-11 inline-flex items-center justify-center rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>

        </Button>
        <Button
          variant="secondary"
          className="border border-stone-500 size-11 inline-flex items-center justify-center rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Button>
      </div>
    </div>
  </section>
};

export default Testimonials;
