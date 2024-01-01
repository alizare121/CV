import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';

import charA from '../../../assets/images/patterns/a.svg';
import charL from '../../../assets/images/patterns/l.svg';
import charI from '../../../assets/images/patterns/i.svg';
import charZ from '../../../assets/images/patterns/z.svg';

export const Particle = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
      <Particles
        className="particle"
        init={particlesInit}
        params={{
          particles: {
            number: {
              value: 7,
              density: { enable: true, value_area: 800 },
            },
            shape: {
              type: ['image'],
              image: [
                {
                  src: charA?.src,
                },
                {
                  src: charL?.src,
                },
                {
                  src: charI?.src,
                },
                {
                  src: charZ?.src,
                },
              ],
            },
            opacity: {
              value: 0.17626369048095938,
              random: true,
              anim: { enable: false, speed: 10, opacity_min: 0.9, sync: false },
            },
            size: {
              value: 15,
              random: false,
            },
            line_linked: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: 'none',
              random: false,
              straight: false,
              bounce: true,
              attract: { enable: true, rotateX: 100, rotateY: 400 },
            },
          },
          retina_detect: true,
        }}
      />
  );
};

