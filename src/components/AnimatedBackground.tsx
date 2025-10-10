import React, { useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadLinksPreset } from '@tsparticles/preset-links';
import { IOptions, RecursivePartial } from '@tsparticles/engine';
import { useEffect, useState } from 'react';

const AnimatedBackground: React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadLinksPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: RecursivePartial<IOptions> = useMemo(
    () => ({
      preset: 'links',
      background: {
        color: {
          value: 'transparent',
        },
      },
      particles: {
        color: {
          value: '#a78bfa', // A soft purple, good for both light and dark modes
        },
        links: {
          color: '#a78bfa',
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
        },
        number: {
          density: {
            enable: true,
            value_area: 800,
          },
          value: 50,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return <Particles id="tsparticles" options={options} />;
  }

  return <></>;
};

export default AnimatedBackground;
