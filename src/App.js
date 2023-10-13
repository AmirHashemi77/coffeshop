import React from 'react';
import HeaderSm from './Component/Header&Hero/Header/HeaderSm';
import HeroSm from './Component/Header&Hero/Hero/HeroSm';
import HeaderMd from './Component/Header&Hero/Header/HeaderMd';
import MdBackground from './Component/Header&Hero/MdBackground';




const App = () => {
  return (
    <>
      <div className='flex flex-col items-center bg-hero md:hidden'>
          <HeaderSm/>
          <HeroSm/>
      </div>
      <div className='hidden relative md:block w-full h-screen'>
        <HeaderMd/>
        <MdBackground/>
      </div>
     
    </>
  );
};

export default App;