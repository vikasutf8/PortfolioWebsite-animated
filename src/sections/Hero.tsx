"use client"
import { FC, useEffect, useRef } from "react";
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */

import heroImage6 from "@/assets/images/heroImage6.jpeg"



import Image from "next/image";
import Button from "@/components/button";
import SplitType from "split-type";
import { useAnimate, motion, useScroll, useTransform } from "motion/react";
import { stagger } from "motion";

// https://drive.google.com/file/d/1enOkLogOXDgRDOKLxXvzh17AoQ_g-ZA9/view?usp=sharing
const Hero: FC = () => {

  const [titleScope, titleAnimate] = useAnimate();
  const scrollingDiv =useRef<HTMLDivElement>(null);

  const {scrollYProgress} =useScroll({
    target: scrollingDiv,
    offset:['start end','end end']
  })

  const portraitWidth =useTransform(scrollYProgress,[0,1],['100%','240%'])

  useEffect(() => {
    new SplitType(titleScope.current,
      {
        types: 'lines,words',
        tagName: "span"
      });

    titleAnimate(titleScope.current.querySelectorAll(".word"),
      {
        transform: 'translateY(0)'
      },
      {
        duration: .5,
        delay: stagger(.2)
      },
    )
  }, [])
  console.log(titleScope.current)
  return <section>
    <div className="grid md:grid-cols-12 md:h-screen items-stretch sticky top-0 ">
      <div className="md:col-span-7 flex flex-col justify-center ">
        {/* content */}
        <div className="container !max-w-full">
          <motion.h1
            ref={titleScope}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-5xl md:text-6xl lg:text-7xl mt-40 md:mt-0">Turing ideas into real life products in my calling</motion.h1>
          <div className="flex flex-col md:flex-row md:items-center mt-10 items-start gap-6 ">
            <motion.div
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 1.75,
              }}
            >
              <Button variant="secondary"
              onClick={() => window.open(' https://drive.google.com/file/d/1enOkLogOXDgRDOKLxXvzh17AoQ_g-ZA9/view?usp=sharing', '_blank', 'noopener,noreferrer')}
                iconAfter={
                  <div className="overflow-hidden size-5">
                    <div className="h-5 w-10 flex group-hover/button:-translate-x-1/2 transition-transform duration-500">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                      </svg>
                      {/* duplicate for animate */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                      </svg>

                    </div>
                  </div>
                }>
                <span>View My Work</span>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 2,
              }}>
              <Button variant="text"
               onClick={() => window.open('https://linkedin.com/in/vikasarya1889/', '_blank', 'noopener,noreferrer')}
              >Let&apos;s Talk</Button>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="md:col-span-5 relative">
        {/* Image */}
        <motion.div className="mt-20 md:mt-0 md:size-full md:absolute md:right-0 max-md:!w-full" 
        style={{
          width:portraitWidth,
        }}>
          <Image src={heroImage6} alt="my profile photo" className="size-full object-cover" />
        </motion.div>
      </div>
    </div>
    {/* non-sticky div */}
    <div className="md:h-[200vh] " ref={scrollingDiv}
    >

    </div>
  </section>

};

export default Hero;
