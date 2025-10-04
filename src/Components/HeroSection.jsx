import React from 'react'
import { ArrowDown } from 'lucide-react'

const HeroSection = () => {
  return (
    <section id='hero'
    className='relative min-h-screen flex flex-col items-center justify-center px-4'
    >
        <div
        className='container max-w-6xl mx-auto text-center z-10'
        >
            <div
            className='space-y-6'
            >
                <h1
                className='text-4xl md:text-7xl font-bold tracking-tight '
                >
                    <span
                    className='opacity-0 animate-fade-in '
                    >Hi, I'm</span>
                    <span className='text-purple-400 opacity-0 animate-fade-in-delay-1'> Rohit</span>
                    <span className='opacity-0 text-purple-400 animate-fade-in-delay-2 text-gradient ml-2'> Panchal</span>
                </h1>

                <p
                className='text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3'
                >
                    I'm a frontend developer with a passion for creating beautiful and functional web applications. I'm a quick learner and I'm always looking to improve my skills.
                </p>

                <div className='pt-4 opacity-0 animate-fade-in-delay-4'>
                    <a href="#projects"
                    className='cosmic-button'
                    >
                        View My Work
                    </a>
                </div>

                <div
                className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'
                >
                    <span className='text-sm text-muted-foreground mb-2'>Scroll</span>
                    <ArrowDown className='w-5 h-5 text-primary' />
                </div>

            </div>

        </div>

    </section>
  )
}

export default HeroSection