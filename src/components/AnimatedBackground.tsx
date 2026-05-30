import React, { useMemo } from 'react';
import Particles, { ParticlesProvider } from '@tsparticles/react';
import { loadLinksPreset } from '@tsparticles/preset-links';
import { Engine, IOptions, RecursivePartial } from '@tsparticles/engine';

const initEngine = async (engine: Engine) => {
  await loadLinksPreset(engine);
};

const AnimatedBackground: React.FC = () => {
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

  return (
    <ParticlesProvider init={initEngine}>
      <Particles id="tsparticles" options={options} />
    </ParticlesProvider>
  );
};

export default AnimatedBackground;
