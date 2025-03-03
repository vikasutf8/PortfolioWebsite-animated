
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React, { HTMLAttributes, use, useEffect } from 'react'
import { twMerge } from 'tailwind-merge';
import SplitType from 'split-type';
import { usePresence,motion } from 'motion/react';
import useTextRevealAnimation from '@/hooks/useTextRevealAnimation';


const Testimonial = (props:{
    quote:string;
    name:string;
    role:string ;
    company :string;
    // imagePositionY:number;
    // image :string | StaticImport ;
    className?: string 
}& HTMLAttributes<HTMLDivElement>) => {
    const [isPresent,safeToRemove] =usePresence()
    const {quote,name,role,company,
        // image,imagePositionY, 
        className, ...rest} =props
    const {scope:quoteScope, entranceAnimation:quoteEntranceAnimate,exitAnimation :quoteExitAnimation,}= useTextRevealAnimation()
    // const [quoteScope,quoteAnimate] =useAnimate();
    // const [citeScope,citeAnimate] =useAnimate();
    const {scope:citeScope, entranceAnimation:citeEntranceAnimate ,
        exitAnimation :citeExitAnimation
    }= useTextRevealAnimation()
   
    useEffect(()=>{
        if(isPresent){
            quoteEntranceAnimate().then(()=>{
                citeEntranceAnimate();
            });
        }else{

            Promise.all([
                quoteExitAnimation(),
                citeExitAnimation()
            ]).then(()=>{
               safeToRemove(); 
            })
        }
    },[isPresent,quoteEntranceAnimate,citeEntranceAnimate,,quoteExitAnimation,safeToRemove])


    return (
        <>
            <div key={name} className={twMerge("grid  md:gap-8 lg:gap-16 md:items-center ", className)}
            {...rest}>
                {/* <div className="aspect-square md:aspect-[9/16] md:col-span-2 relative">
                <motion.div
                className='absolute h-full bg-stone-900'
                initial={{
                    width:'100%'
                }}
                animate={{width:0}}
                exit={{width:'100%'}}
                transition={{duration :0.5}}
                >

                </motion.div>
                    <Image src={image} alt={role} className="size-full object-cover"
                        style={{
                            objectPosition: `50% ${imagePositionY * 100}%`
                        }} />
                </div> */}
                <blockquote className="">
                    {/*  */}
                    <div className="text-3xl 
            md:text-[42px] leading-[44px] lg:text-6xl
            mt-8 md:mt-0" ref={quoteScope}>
                        <span>&ldquo;</span>
                        <span>
                            {quote}
                        </span>
                        <span>&rdquo;</span>
                    </div>
                    <cite className="mt-4  not-italic md:text-lg block lg:text-xl" ref={citeScope}>
                        <div>
                            <div>  {name}</div>
                            <br></br>
                            <div>{role} @  
                                <div className='font-bold'>{ company}</div>
                                </div>
                        </div>
                    </cite>
                </blockquote>
            </div></>
    )
}

export default Testimonial