import { FC } from "react";
import image6 from "@/assets/images/project6.png";
import image7 from "@/assets/images/project7.png";
// import image10 from "@/assets/images/project10.png"
// import image9 from "@/assets/images/project9.png"
import image8 from "@/assets/images/project8.png"
import image10 from "@/assets/images/project10.png"

import Image from "next/image";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const projects = [
  {
    name: "Waste-2-Money",
    image: image6,
  },
  {
    name: "Job Hunting Platform",
    image: image7,
  },
  {
    name: "Real State Housing ",
    image: image8,
  },
  // {
  //   name: "Tech Blogging",
  //   image: image9,
  // },
  {
    name: "Book Store WebPage",
    image: image10,
  },
];

const Projects: FC = () => {
  return <section className="py-24 md:py-32 lg:py-40" id="projects">
    <div className="container">
      <h2 className="text-4xl md:text-7xl lg:text-8xl"> Personal Works</h2>
      {/* project mapping  */}
      <div className="mt-10 md:mt-16 lg:mt-20">
        {projects.map(({ name, image }) => (
          <a href="#" key={name} className="border-t last:border-b border-stone-400 border-dotted py-6 md:py-8 lg:py-10 flex flex-col relative group/project">
            <div className="absolute bottom-0 left-0 w-full h-0 group-hover/project:h-full transition-all duration-700  bg-stone-300"></div>
            <div className="relative">
              {/* image */}
              <div className="aspect-video md:hidden">
                <Image src={image} alt={`${name} image`}
                  className="size-full object-cover" />
              </div>
              {/* name and arrows */}
              <div className="mt-8 md:mt-0 flex justify-between items-center md:grid md:[grid-template-columns:1fr_300px_max-content] md:gap-8 ">
                {/* name */}
                <div className="lg:group-hover/project:pl-8 transition-all duration-700">
                <h3 className="text-2xl md:text-3xl lg:text-4xl">{name}</h3>
                </div>
                {/* image of aminate */}
                <div className="relative">
                <div className="absolute aspect-video w-full top-1/2 -translate-y-1/2 opacity-0 scale-90 group-hover/project:opacity-100 group-hover/project:scale-100 lg:group-hover/project:scale-110 transition-all duration-500 z-10" >
                <Image src={image} alt={`${name} image`}
                  className="size-full object-cover" />
                </div>
                </div>
                {/* arrow */}
                <div className="lg:group-hover/project:pr-8 transition-all duration-700">
                <div className="size-6 overflow-hidden">
                  <div className="w-12 h-6 flex group-hover/project:-translate-x-1/2 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                    {/* duplicate */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </div>
                </div>

              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
};

export default Projects;
