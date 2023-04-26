'use client'

import { useCallback, useId, useRef } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import styles from './styles.module.css'

const options = {
  background: {
    color: {
      value: '#333e4f'
    }
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      push: {
        quantity: 4
      },
      repulse: {
        distance: 100,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: ['#ffffff', '#ee1a8b', '#ffc845']
    },
    collisions: {
      enable: true
    },
    move: {
      enable: true,
      random: false,
      speed: 1.2,
      straight: false
    },
    number: {
      density: {
        enable: true,
        area: 800
      },
      value: 10
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: 'circle'
    },
    size: {
      value: { min: 20, max: 40 }
    }
  },
  detectRetina: true
}

export default function ParticlesComponent() {
  const id = useId()
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine)
  }, [])
  return (
    <>
      <Particles
        id={id}
        init={particlesInit}
        className={styles.particles_container}
        options={options}
      />
    </>
  )
}
