import { Spotlight } from './ui/Spotlight'

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
        <div>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>{/*  Colors are determined with the-(Fill) property.  */}
            <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple"/>
            <Spotlight className="top-28 left-80 h-[80vh] w-[60vw]" fill="blue"/>
        </div>
        {/* Background div with grid patterns and colors */}
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        </div>
        {/* Title section in the center of the screen */}
        <div className='flex justify-center relative my-20 z-10'>
          {/* The div wrapping the title text */}
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60] flex flex-col items-center'>
            {/* Title text */}
            <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Create Dynamic Experiences with Next.js</h2>

          </div>
        </div>
    </div>
  )
}

export default Hero