"use client"

import { stagger } from 'motion'
import { transform, useAnimate } from 'motion/react'
import React, { useEffect } from 'react'
import SplitType from 'split-type'

function useTextRevealAnimation() {

    const [scope ,animate] =useAnimate()

    useEffect(()=>{
        new  SplitType(scope.current,{
          types: "lines,words",
          tagName:"span"
        })
    },[scope,animate])

    const entranceAnimation =()=>{
        return animate(scope.current.querySelectorAll('.word'),{
            transform:'translateY(0)'
        },{
            duration: 0.5,
            delay:stagger(.2)
        })
    }
  return {
    scope,entranceAnimation,
  }
}

export default useTextRevealAnimation