import React, { Suspense, useContext } from "react";
import Spinner from "../Component/Spinner/Spinner";
import HeaderSm from "../Component/Header&Hero/Header/HeaderSm";
import HeroSm from "../Component/Header&Hero/Hero/HeroSm";
import MenuSm from "../Component/Header&Hero/Header/MenuSm";
import HeaderMd from "../Component/Header&Hero/Header/HeaderMd";
import HeroMd from "../Component/Header&Hero/Hero/HeroMd";
import MdBackground from "../Component/Header&Hero/MdBackground";
import StoryCardSlider from "../Component/CardSlider/StoryCardSlider";
import Services from "../Component/ServicesSection/Services";
import OfferSection from "../Component/OfferSection/OfferSection";
import ReservForm from "../Component/ReservForm/ReservForm";
import RecommendedSection from "../Component/RecommendedSection/RecommendedSection";
import PopularMenu from "../Component/PopularMenu/PopularMenu";
import OurBlog from "../Component/OurBlog/OurBlog";
import CustomerReview from "../Component/CustomerReview/CustomerReview";
import EmailSection from "../Component/EmailInput/EmailSection";
import Footer from "../Component/Footer/Footer";
import { authContext } from "../context/AuthContext";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { user, setUser } = useContext(authContext);

  const { data } = useQuery({
    queryKey: ["userData"],

    queryFn: async () => {
      const res = await fetch(
        `https://coffeshopapi.amirhashemi776.ir/users?email=${user.email}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) {
        throw new Error("some thing is wrong");
      }
      const data = await res.json();
      setUser(data);
      console.log('updated cart');
      return data;
    },

    enabled: false,
    gcTime:Infinity
  });

  return (
    <Suspense fallback={<Spinner />}>
      {/* header and hero in home page */}
      <div className="flex flex-col items-center bg-hero lg:hidden">
        <HeaderSm />
        <HeroSm />
      </div>
      <MenuSm />
      <HeaderMd />
      <div className="hidden lg:block w-full h-screen min-h-[615px]">
        <HeroMd />
        <MdBackground />
      </div>
      {/* card slider */}
      <StoryCardSlider />
      {/* services section */}
      <Services />
      {/* offer section */}
      <OfferSection />
      {/* reserv a table */}
      <ReservForm />
      {/* recommended section */}
      <RecommendedSection type="recommended" />
      {/* popular menu */}
      <PopularMenu />
      {/* our blog */}
      <OurBlog title="OurBlog" />
      {/* customer review */}
      <CustomerReview />
      {/* email section */}
      <EmailSection />
      {/* footer */}
      <Footer />
    </Suspense>
  );
};

export default Home;
