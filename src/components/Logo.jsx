import React from 'react';

//awesome gsap animation libraries
import { gsap } from 'gsap';
import { Bounce } from 'gsap';

// the main, multicolored BD logo SVG that appears (and briefly animates on initial site load)
export default function Logo({ height = '100vh' }) {
  React.useEffect(() => {
    //let's do some cool logo anim tricks!
    const tl = gsap.timeline();

    tl.from('#rect1', {
      duration: 0.5,
      transformPerspective: 500,
      skewY: '-90deg',
      transformOrigin: 'center top',
      ease: Bounce.easeOut,
    })
      .from('#cls2', { opacity: 0, y: -10, duration: 0.2, rotation: '180' })
      .from('#cls3', { opacity: 0, duration: 0.2 })
      .from('#cls5', { opacity: 0, y: 10, duration: 0.2 })
      .from('#cls6', { duration: 0.2, opacity: 0 })
      .to('#logoDiv', {
        duration: 0.2,
        position: 'absolute',
        x: '20px',
        y: '30px',
        scale: 0.8,
      });
  }, []);

  return (
    <div className="logoDiv">
      <svg
        style={{
          height,
        }}
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 98 178"
        className="logoSvg"
      >
        <defs />
        <rect id="rect1" className="cls-1" width="98" height="178" />
        <path id="cls2" className="cls-2" d="M65,104l18,15V41L65,21V72" />
        <path id="cls3" className="cls-3" d="M65,72c-24-28-34,32,0,32" />
        <path id="cls5" className="cls-5" d="M36.5,151l-18,15V41l18-20v98" />
        <path id="cls6" className="cls-6" d="M36.5,119c24-28,34,32,0,32" />
      </svg>
    </div>
  );
}
