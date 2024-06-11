import React from 'react';
import HeaderSm from '../Component/Header&Hero/Header/HeaderSm';
import MenuSm from '../Component/Header&Hero/Header/MenuSm';
import HeaderMd from '../Component/Header&Hero/Header/HeaderMd';
import List from '../Component/RecommendedSection/List';
import Footer from '../Component/Footer/Footer';
import BlogItem from '../Component/OurBlog/BlogItem';
import { getBlogs } from '../services/getBlog';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../Component/Spinner/Spinner';
import Error from '../Component/Error';

const Blogs = () => {
    const {isLoading , isError,error, data:blogs } = useQuery({
        queryKey: ['blogs'],
        queryFn:()=>getBlogs()
      })



    return (
        <>
            {isLoading ? <Spinner/> : 

            <div className='flex flex-col items-center justify-center '>
            <div className='w-full lg:hidden'>
                <HeaderSm/>
            </div>
                <MenuSm/>
                <HeaderMd/>


                <div className='flex flex-col items-center gap-16 w-full mt-15 md:mt-36 px-5 '>
                    <h4 className='section-title text-shadow md:text-5xl'>Blogs</h4>                 
                        {isError ? <Error message={error.message}/> : 

                                <List type='blogs'>
                                    {blogs.map((blog)=>(
                                        <BlogItem key={blog?.id} title={blog?.title} content={blog?.content} id={blog?.id}/>
                                    ))}
                                </List>
                        }

                </div>
                <div className="hidden absolute top-28 right-0 rotate-180 md:block"><img src="/images/icon/bg-cofe.svg" alt=""/></div>
                <div className="hidden absolute -bottom-5 left-0 md:block"><img src="/images/icon/bg-cofe.svg" alt=""/></div>
        <Footer/>
            </div>
            }
        </>
    );
};

export default Blogs;