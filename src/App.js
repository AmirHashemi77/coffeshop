import React, { useEffect, useState } from 'react';
import HeaderSm from './Component/Header&Hero/Header/HeaderSm';
import HeroSm from './Component/Header&Hero/Hero/HeroSm';
import HeaderMd from './Component/Header&Hero/Header/HeaderMd';
import MdBackground from './Component/Header&Hero/MdBackground';
import HeroMd from './Component/Header&Hero/Hero/HeroMd';
import StoryCardSlider from './Component/CardSlider/StoryCardSlider';
import Services from './Component/ServicesSection/Services';
import OfferSection from './Component/OfferSection/OfferSection';
import ReservForm from './Component/ReservForm/ReservForm';
import RecommendedSection from './Component/RecommendedSection /RecommendedSection';
import PopularMenu from './Component/PopularMenu/PopularMenu';
import OurBlog from './Component/OurBlog/OurBlog';
import EmailSection from './Component/EmailInput/EmailSection';
import Footer from './Component/Footer/Footer';
import MenuSm from './Component/Header&Hero/Header/MenuSm';
import CustomerReview from './Component/CustomerReview /CustomerReview';
import Spinner from './Component/Spinner/Spinner';




const App = () => {
  const[loading,setLoading]= useState(true)

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
      
    }, 3000);
  },[])
  

  return (
    <>
          
           
           { loading ?  <Spinner/>  :    

              
              <>

                  {/* header and hero in home page */}
                  <div className='flex flex-col items-center bg-hero lg:hidden'>
                      <HeaderSm/>
                      <HeroSm/>
                  </div>
                      {/* <MenuSm/> */}
                      <HeaderMd/>
                  <div className='hidden lg:block w-full h-screen'>
                    <HeroMd/>
                    <MdBackground/>
                  </div>
                  {/* card slider */}
                  <StoryCardSlider/>
                  {/* services section */}
                  <Services/>
                  {/* offer section */}
                  <OfferSection/>
                  {/* reserv a table */}
                  <ReservForm/>
                  {/* recommended section */}
                  <RecommendedSection/>
                  {/* popular menu */}
                  <PopularMenu/>
                  {/* our blog */}
                  <OurBlog/>
                  {/* customer review */}
                  <CustomerReview/>
                  {/* email section */}
                  <EmailSection/>
                  {/* footer */}
                  <Footer/>
            
              </>

           }
           
               

  
          
    </>

  
  );
};

export default App;