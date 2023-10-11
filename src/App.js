import React from 'react';
import HeaderSm from './Component/Header/HeaderSm';
import HeroSm from './Component/Hero/HeroSm';

const App = () => {
  return (
    <>
      <div className='flex flex-col items-center bg-hero md:hidden'>
          <HeaderSm/>
          <HeroSm/>
      </div>
     
    </>
  );
};

export default App;