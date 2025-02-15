import { FC } from "react";
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import heroImage from "@/assets/images/hero-image.jpg";
import Image from "next/image";
import Button from "@/components/button";


const Hero: FC = () => {
  return <section>
   <div className="grid md:grid-cols-12 md:h-screen items-stretch">
     <div className="md:col-span-7 flex flex-col justify-center ">
      {/* content */}
     <div className="container !max-w-full">
      <h1 className="text-5xl md:text-6xl lg:text-7xl mt-40 md:mt-0">Turing ideas into real life products in my calling</h1>
      <div className="flex flex-col md:flex-row md:items-center mt-10 items-start gap-6 ">
        <Button variant="secondary"
          iconAfter={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
            </svg>
          }>
          <span>View My Work</span>
        </Button>
        <Button variant="text">Let's Talk</Button>
      </div>
    </div>
     </div>
  <div className="md:col-span-5">
      {/* Image */}
      <div className="mt-20 md:mt-0 md:h-full">
      <Image src={heroImage} alt="my profile photo" className="size-full object-cover"/>
    </div>
  </div>
   </div>
  </section>

};

export default Hero;
