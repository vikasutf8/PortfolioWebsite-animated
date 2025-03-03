"use client"
import { FC, useRef, useState } from "react";

// import image1 from "@/assets/images/testimonial-1.jpg";
// import image2 from "@/assets/images/testimonial-2.jpg";
// import image3 from "@/assets/images/testimonial-3.jpg";
// import { div } from "motion/react-client";
// import Image from "next/image";
import Button from "@/components/button";
import Testimonial from "@/components/Testimonial";
import { useScroll, motion, useTransform, AnimatePresence, 
  // useAnimate
 } from "motion/react";
// import SplitType from "split-type";
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const testimonials = [
  {
    name: "December 2024 – Present",
    company: "Vigyapan Mart Pvt. Ltd.",
    role: "Software Developer Intern",
    quote:
      "Implemented Domain-Driven Design in a microservices-based backend using Spring Boot and Nginx, ensuring scalable data modeling with MySQL.",
    // image: "",
    // imagePositionY: 0.2,
  },
  {
    name: "June 2024 – August 2024",
    company: "OctaNet Services Pvt. Ltd.",
    role: "Full Stack Developer Intern",
    quote:
      "Designed a microservices architecture within an MVC-based system, optimizing API integration and UI responsiveness.",
    // image: image2,
    // imagePositionY: 0.1,
  },
  {
    name: "December 2023 – April 2024",
    company: "Fusion IIITDMJ",
    role: "Software Developer Intern",
    quote:
      "MVT-based refined Django APIs to boost search performance by 40%, optimized PostgreSQL storage, and React.js for a seamless user experience.",
    // image: image3,
    // imagePositionY: 0.55,
  },
];

const Testimonials: FC = () => {

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const titleRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", 'end start']
  })
  const transformTop = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const transformBottom = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  const handleClickNext = () => {
    setTestimonialIndex(curr => {
      if (curr === Testimonials.length - 1) {
        return 0
      }
      return curr + 1
    })
  }

  const handleClickPrev = () => {
    setTestimonialIndex(curr => {
      if (curr === 0) {
        return Testimonials.length - 1
      }
      return curr - 1
    })
  }


  return <section className="section">
    <h2 className="text-4xl md:text-7xl lg:text-8xl flex flex-col overflow-hidden tracking-tighter " ref={titleRef}>
      <motion.span className="whitespace-nowrap"
        style={{
          x: transformTop,
        }}>
        Reflections from my journey in software development.
      </motion.span>
      <motion.span className="whitespace-nowrap self-end text-red-orange-500"
        style={{
          x: transformBottom,
        }}>
        Reflections from my journey in software development.
      </motion.span>
    </h2>

    <div className="container">
      <div className="mt-20 ">
        <AnimatePresence mode="wait" initial={false}>
          {testimonials.map((
            { name, company, role, quote,
              //  image, imagePositionY
               },
            index) => index === testimonialIndex && (
              <Testimonial
                name={name}

                company={company}
                role={role}
                quote={quote}
                // image={image}
                // imagePositionY={imagePositionY}
                key={name}
              />

            ))}
        </AnimatePresence >
      </div>
      {/* arrows  */}
      <div className="flex gap-4 mt-6 lg:mt-10 ">
        <Button
          variant="secondary"
          className="border border-stone-500 size-11 inline-flex items-center justify-center rounded-full"
          onClick={handleClickPrev}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>

        </Button>
        <Button
          variant="secondary"
          className="border border-stone-500 size-11 inline-flex items-center justify-center rounded-full"
          onClick={handleClickNext}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Button>
      </div>
    </div>
  </section>
};

export default Testimonials;
