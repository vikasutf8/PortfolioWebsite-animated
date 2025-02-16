"use client"

import { delay, transform } from "motion";
import { stagger, useAnimate, useInView } from "motion/react";
import { FC, useEffect } from "react";
import SplitType from "split-type";



const Intro: FC = () => {

  const [scope, animate] = useAnimate();
  const inView = useInView(scope, {
    once: true
  });

  useEffect(() => {
    new SplitType(scope.current.querySelector('h2'), {
      types: 'lines,words',
      tagName: 'span'
    });
  }, [scope])

  useEffect(() => {
    if (inView) {
      animate(scope.current.querySelectorAll('.word'), {
        transform: 'translateY(0%)',
      }, {
        duration: 0.3,
        delay: stagger(0.2)
      }
      )
    }
  }, [inView,animate, scope])

  return (
    <section className="section mt-12 md:mt-16 lg:mt-20 " id="intro" ref={scope}>
      <div className="container">
        <h2 className="text-4xl md:text-6xl lg:text-7xl lg:w-[80%]">
          {/* <span> */}
          A Full-Stack Software Engineer and CSE graduate from IIITDM Jabalpur (2025) with strong fundamentals, expertise in microservices & collaborate synergistically in open-source development
          {/* </span> */}
        </h2>
      </div>
    </section>
  )
};

export default Intro;
