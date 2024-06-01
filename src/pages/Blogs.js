import React from 'react';
import HeaderSm from '../Component/Header&Hero/Header/HeaderSm';
import MenuSm from '../Component/Header&Hero/Header/MenuSm';
import HeaderMd from '../Component/Header&Hero/Header/HeaderMd';
import List from '../Component/RecommendedSection/List';
import Footer from '../Component/Footer/Footer';
import BlogItem from '../Component/OurBlog/BlogItem';

const Blogs = () => {
    return (
        <div className='flex flex-col items-center justify-center '>
        <div className='w-full lg:hidden'>
             <HeaderSm/>
         </div>
             <MenuSm/>
             <HeaderMd/>


             <div className='flex flex-col items-center gap-16 w-full mt-36 px-5 '>
                 <h4 className='section-title text-shadow md:text-5xl'>Blogs</h4>                 
                     <List>
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                     </List>

             </div>
             <div class="hidden absolute top-28 right-0 rotate-180 md:block"><img src="./images/icon/bg-cofe.svg" alt=""/></div>
             <div class="hidden absolute -bottom-5 left-0 md:block"><img src="./images/icon/bg-cofe.svg" alt=""/></div>
     <Footer/>
 </div>
    );
};

export default Blogs;