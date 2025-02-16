"use client"

import { FC, useEffect, } from "react";
import Button from "@/components/button";
import { useInView } from "motion/react";
import { div } from "motion/react-client";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";

const navItems = [
  {
    href: '#about',
    label: 'About'
  },
  {
    href: '#projects',
    label: 'Projects'
  },
  {
    href: '#faqs',
    label: 'Faqs'
  },
  {
    href: '#',
    label: 'Experience'
  },
  {
    href: '#contact',
    label: 'Contact'
  }
]


const Footer: FC = () => {
  const {scope,entranceAnimation}=useTextRevealAnimation();
  const inView =useInView(scope)


  useEffect(()=>{
    if(inView){
      entranceAnimation();
    }
  },[inView,entranceAnimation])

  const handleClickMobileMavItem=(e:React.MouseEvent<HTMLAnchorElement>)=>{
    e.preventDefault()
    
    const url =new URL(e.currentTarget.href)
    const hash =url.hash;
    const target = document.querySelector(hash)
    if(!target)return;
  
    target.scrollIntoView({behavior :'smooth'})
    //element.scrollIntoView({behavior :'smooth})
    // console.log(e.currentTarget.href ," ", hash)
  }


  return <footer className="bg-stone-900 text-slate-100"id="contact">
    <div className="container py-20">
      <div className="section ">
        {/* first line with dotted and line */}
        <div className="flex items-center gap-3">
          <div className="size-3 rounded-full bg-green-400 animate-pulse"></div>
          <span className="uppercase">Currently  seeking  for  full-time  Software  Developer  Role</span>
        </div>

        <div className="grid md:grid-cols-3 md:items-center">
          {/* line and button */}
          <div className="md: col-span-2">
            <h2 className="text-4xl md:text-7xl lg:text-8xl mt-8  font-extralight"
            ref={scope}>Enough Talk. Let&apos;s make something great together.</h2>
            <div className="lg:flex lg:gap-4">
            <Button variant="secondary"
              className="mt-8 md:mt-10 lg:mt-12"
              onClick={() => window.open('mailto:vikasarya1889@gmail.com', '_blank', 'noopener,noreferrer')}
              iconAfter={
                <div className="size-6 overflow-hidden">
                  <div className="h-6 w-12 flex transition-transform duration-500 group-hover/button:-translate-x-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
                  </div>
                </div>
              }>
              vikasarya1889@gmail.com
            </Button>
            <Button variant="secondary"
              className="mt-8 md:mt-10 lg:mt-12"
              onClick={() => window.open('https://github.com/vikasutf8', '_blank', 'noopener,noreferrer')}
              iconAfter={
                <div className="size-6 overflow-hidden">
                  <div className="h-6 w-12 flex transition-transform duration-500 group-hover/button:-translate-x-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
                  </div>
                </div>
              }>
              github.com/vikasutf8
            </Button>
            <Button variant="secondary"
              className="mt-8 md:mt-10 lg:mt-12"
              onClick={() => window.open('https://linkedin.com/in/vikasarya1889/', '_blank', 'noopener,noreferrer')}
              iconAfter={
                <div className="size-6 overflow-hidden">
                  <div className="h-6 w-12 flex transition-transform duration-500 group-hover/button:-translate-x-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
                  </div>
                </div>
              }>
              linkedin.com/in/vikasarya1889/
            </Button>
            </div>
          </div>
          {/* last copyRight */}
          <div>
            <nav className="flex flex-col md:items-end gap-8 mt-16 md:mt-0">
              {navItems.map(({ href, label }) => (
                <a href={href} key={label}
                onClick={handleClickMobileMavItem}>
                  <Button variant="text" className="text-lg">
                    {label}
                  </Button>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <p className=" py-16 md:py-20 lg:py-24 text-white/30 text-sm ">Copyright &copy; Vikas ARYA &bull; All rights reserved</p>
    </div>
  </footer>
};

export default Footer;
