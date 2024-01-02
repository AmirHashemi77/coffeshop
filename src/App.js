import React from 'react';
import HeaderSm from './Component/Header&Hero/Header/HeaderSm';
import HeroSm from './Component/Header&Hero/Hero/HeroSm';
import HeaderMd from './Component/Header&Hero/Header/HeaderMd';
import MdBackground from './Component/Header&Hero/MdBackground';
import HeroMd from './Component/Header&Hero/Hero/HeroMd';
import StoryCard from './Component/CardSlider/StoryCard';
import StoryCardSlider from './Component/CardSlider/StoryCardSlider';





const App = () => {
  return (
    <>

      {/* header and hero in home page */}
      <div className='flex flex-col items-center bg-hero lg:hidden'>
          <HeaderSm/>
          <HeroSm/>
      </div>
      <div className='hidden relative lg:block w-full h-screen'>
        <HeaderMd/>
        <HeroMd/>
        <MdBackground/>
      </div>

      {/* card slider */}
      <StoryCardSlider/>
    </>
  );
};

export default App;