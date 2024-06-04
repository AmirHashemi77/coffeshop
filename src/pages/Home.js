import React, { Suspense } from 'react';
import Spinner from '../Component/Spinner/Spinner';
import HeaderSm from '../Component/Header&Hero/Header/HeaderSm';
import HeroSm from '../Component/Header&Hero/Hero/HeroSm';
import MenuSm from '../Component/Header&Hero/Header/MenuSm';
import HeaderMd from '../Component/Header&Hero/Header/HeaderMd';
import HeroMd from '../Component/Header&Hero/Hero/HeroMd';
import MdBackground from '../Component/Header&Hero/MdBackground';
import StoryCardSlider from '../Component/CardSlider/StoryCardSlider';
import Services from '../Component/ServicesSection/Services';
import OfferSection from '../Component/OfferSection/OfferSection';
import ReservForm from '../Component/ReservForm/ReservForm';
import RecommendedSection from '../Component/RecommendedSection/RecommendedSection';
import PopularMenu from '../Component/PopularMenu/PopularMenu';
import OurBlog from '../Component/OurBlog/OurBlog';
import CustomerReview from '../Component/CustomerReview/CustomerReview';
import EmailSection from '../Component/EmailInput/EmailSection';
import Footer from '../Component/Footer/Footer';





const Home = () => {



  return (
    <Suspense fallback={<Spinner/>}>
          
                  {/* header and hero in home page */}
                  <div className='flex flex-col items-center bg-hero lg:hidden'>
                      <HeaderSm/>
                      <HeroSm/>
                  </div>
                       <MenuSm/>
                      <HeaderMd/>
                  <div className='hidden lg:block w-full h-screen min-h-[615px]'>
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
            
         
        </Suspense>
         

  
  );
};

export default Home;