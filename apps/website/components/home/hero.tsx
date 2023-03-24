import React from 'react'
import { tvs, LinkIcon, Snippet, Logo } from '@components'

import AnimatedWave from './animated-wave'
import GradientBG from './gradient-bg'
import { systemConstants } from '@common/constants'

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      className={tvs.box({
        class: 'relative mt-32 lg:mt-36 xl:mt-40 gap-6 overflow-visible'
      })}
    >
      <AnimatedWave className='absolute -z-10 -translate-y-32 md:-translate-y-44 w-[100%] h-[100%] md:w-[500px] md:h-[500px]' />
      <GradientBG className='absolute -z-10 -translate-y-[40%] animate-[appear_1s_ease]' />
      <div className={tvs.box({ class: 'relative w-full z-10' })}>
        <Logo size={120} />
        <h1 className='font-extrabold mt-4 text-center text-4xl md:text-5xl text-black dark:text-white'>
          {systemConstants.site.title}
        </h1>
        <p className='mt-2 text-center font-medium text-lg'>
          {systemConstants.site.description}.
        </p>
      </div>
      <div className={tvs.box({ row: true, class: 'gap-2 z-10' })}>
        <a className={tvs.button()} href='/docs/introduction'>
          Documentation
        </a>
        <a
          className={tvs.button({
            flat: true,
            color: 'neutral'
          })}
          href={systemConstants.repo}
          rel='noopener noreferrer'
          target='_blank'
          title='github homepage'
        >
          <span className={tvs.box({ row: true })}>
            Github
            <LinkIcon className='ml-1' />
          </span>
        </a>
      </div>
      <Snippet className='z-10' />
    </section>
  )
}

export default Hero
