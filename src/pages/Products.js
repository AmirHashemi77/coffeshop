import React from 'react';
import HeaderSm from '../Component/Header&Hero/Header/HeaderSm';
import MenuSm from '../Component/Header&Hero/Header/MenuSm';
import HeaderMd from '../Component/Header&Hero/Header/HeaderMd';
import Footer from '../Component/Footer/Footer';
import SideBarContainer from '../Component/SideBar/SideBarContainer';
import SliderCard from '../Component/RecommendedSection/SliderCard';
import { NavLink } from 'react-router-dom';
import List from '../Component/RecommendedSection/List';
import { servicesArr } from '../utils/servicesArr';


// import '/public/images/product/equipmentIMG/Ice_Maker.png'
const products=[
    {
        id:1,
        title:'arabica',
        subTitle:'dark roast',
        img:'/images/product/equipmentIMG/espresso-machine.png'
    },
    {
        id:2,
        title:'house blend',
        subTitle:'dark roast',
        img:'/images/product/a1e02c7516fafdf48a9f1e33639aea78.png'
    },
    {
        id:3,
        title:'Robusta',
        subTitle:'dark roast',
        img:'/images/product/ff10151a8fba4a58a1cc43c532721079.png'
    },
    {
        id:4,
        title:'house blend',
        subTitle:'dark roast',
        img:'/images/product/a1e02c7516fafdf48a9f1e33639aea78.png'
    },
    {
        id:5,
        title:'arabica',
        subTitle:'dark roast',
        img:'/images/product/1b18a0fb617b2a74ca210364083c4782.png'
    },
    {
        id:6,
        title:'Robusta',
        subTitle:'dark roast',
        img:'/images/product/ff10151a8fba4a58a1cc43c532721079.png'
    },
    {
        id:7,
        title:'house blend',
        subTitle:'dark roast',
        img:'/images/product/a1e02c7516fafdf48a9f1e33639aea78.png'
    },
    
]



const Products = () => {
    return (
        <div className='flex flex-col items-center justify-center '>
               <div className='w-full lg:hidden'>
                    <HeaderSm/>
                </div>
                    <MenuSm/>
                    <HeaderMd/>


                    <div className='flex flex-col items-center gap-16 w-full mt-15 md:mt-36'>
                        <h4 className='section-title text-shadow md:text-5xl'>Products</h4>
                        <div className='flex flex-col items-center gap-5 w-full px-5 max-w-7xl relative md:flex-row md:items-start'>
                            <SideBarContainer title='Product Type'>
                                <ul className='flex flex-col w-full items-start gap-3'>


                                    {servicesArr.map((item)=>(
                                        <li key={item.id} className='w-full'>
                                            <NavLink to={`/products/${item.route}`} className={({isActive})=>isActive ? 'active-link-sidebar' : 'link-sidebar'}>
                                                <img src={item.imgurl} className='w-10 h-10 object-contain' alt={item.route}/>
                                                <span className='text-brown1 capitalize'>{item.title}</span>

                                            </NavLink>
                                        </li>

                                    ))}
                               
                                    
                                </ul>
                            </SideBarContainer>
                            <List type='products'>
                                {
                                    products.map((item)=>(
                                        <SliderCard key={item.id} imgurl={item.img} title={item.title} subTitle={item.subTitle} />
                                    ))
                                }
                            </List>

                        </div>

                    </div>
                    <div class="hidden absolute top-28 right-0 rotate-180 md:block"><img src="/images/icon/bg-cofe.svg" alt=""/></div>
                    <div class="hidden absolute -bottom-5 left-0 md:block"><img src="/images/icon/bg-cofe.svg" alt=""/></div>
            <Footer/>
        </div>
    );
};

export default Products;