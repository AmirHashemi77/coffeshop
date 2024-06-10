import React from 'react';
import HeaderSm from '../Component/Header&Hero/Header/HeaderSm';
import MenuSm from '../Component/Header&Hero/Header/MenuSm';
import HeaderMd from '../Component/Header&Hero/Header/HeaderMd';
import Footer from '../Component/Footer/Footer';
import SideBarContainer from '../Component/SideBar/SideBarContainer';
import SliderCard from '../Component/RecommendedSection/SliderCard';
import { NavLink, useParams } from 'react-router-dom';
import List from '../Component/RecommendedSection/List';
import { servicesArr } from '../utils/servicesArr';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../services/getProduct';
import Spinner from '../Component/Spinner/Spinner';
import Error from '../Component/Error';






const Products = () => {
    const params=useParams()
  

  const {isLoading , isError,error, data:products } = useQuery({
    queryKey: ['products',params?.productcategory],
    queryFn:()=>getProducts(params?.productcategory)
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
                                                
                                                {isError ? <Error message={error.message} /> :                               
                                                    <List type='products'>
                                                    {
                                                        products?.map((item)=>(
                                                            <SliderCard key={item.id} id={item.id} imgurl={item.photo} title={item.productName} subTitle={item.subTitle} price={`${item.price}$`}/>
                                                        ))
                                                    }
                                                    </List>
                                                }
                                                
                                            

                                        </div>

                                    </div>
                                    <div className="hidden absolute top-28 right-0 rotate-180 md:block"><img src="/images/icon/bg-cofe.svg" alt=""/></div>
                                    <div className="hidden absolute -bottom-5 left-0 md:block"><img src="/images/icon/bg-cofe.svg" alt=""/></div>
                            <Footer/>
                        </div> 
            }

        </>
       
    );
};

export default Products;