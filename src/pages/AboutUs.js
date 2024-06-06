import React from 'react';
import HeaderSm from '../Component/Header&Hero/Header/HeaderSm';
import MenuSm from '../Component/Header&Hero/Header/MenuSm';
import HeaderMd from '../Component/Header&Hero/Header/HeaderMd';


const AboutUs = () => {
    return (
        <div className='flex flex-col items-center justify-center '>
        <div className='w-full lg:hidden'>
             <HeaderSm/>
         </div>
             <MenuSm/>
             <HeaderMd/>


            <div className='flex flex-col items-center gap-16 w-full mt-36'>
                <h4 className='section-title text-shadow md:text-5xl'>About Us</h4>
                <div className='flex flex-col items-start gap-10 w-full px-5 max-w-5xl relative md:flex-row md:items-start md:justify-between'>
                    <ul className='flex flex-col items-start gap-7 px-7'>               
                                    <li className='flex items-center gap-2 py-[10px] px-2'>
                                        <img src="/images/icon/material-symbols_location-on-rounded.svg" alt="" />
                                        <span className='capitalize text-cream1 font-leiko text-base'>12 jhon Avenue #35 - new York </span>
                                    </li>
                                    <li className='flex items-center gap-2 py-[10px] px-2'>
                                        <img src="/images/icon/ic_round-email.svg" alt="" />
                                        <span className='capitalize text-cream1 font-leiko text-base'>elizacoffee@coffee.com</span>
                                    </li>
                                    <li className='flex items-center gap-2 py-[10px] px-2'>
                                        <img src="/images/icon/ic_outline-phone-android.svg" alt="" />
                                        <span className='capitalize text-cream1 font-leiko text-base'>+1-222-34-eliza</span>
                                    </li> 
                    </ul>
                    <div className='flex items-center gap-3 px-9'>
                        <span className='capitalize text-cream1 text-base font-leiko'>social media: </span>
                        <a href="/"><img src="/images/icon/linkedin-icon.svg" alt="" /></a>
                        <a href="/"><img src="/images/icon/pintrest-icon.svg" alt="" /></a>
                        <a href="/"><img src="/images/icon/instagram-icon.svg" alt="" /></a>
                    </div>
                </div>
                <div className='flex flex-col items-center w-full px-5'>
                    <div className='w-full max-w-5xl bg-card-slider p-5 relative'>
                        <h4 className='section-title text-shadow md:text-5xl absolute -top-5 left-1/2 -translate-x-1/2 -translate-y-1/2'>Our Story</h4>
                        <div className='w-full flex flex-col items-start gap-8'>
                            <div className='w-full flex flex-col items-start gap-5'>
                                <h6 className='text-white text-sm  font-leiko  leading-8 text-start md:text-xl md:leading-8'>Chapter 1: A Spark of Inspiration</h6>
                                <p className='text-white text-xs text-center font-leiko font-normal leading-8 md:text-start md:text-sm md:leading-8'>
                                In the heart of the picturesque town of Willowbrook, Emily sat in her small, cluttered apartment, sipping on a homemade latte. She stared out the window, watching the rain gently fall, and let her mind wander. Ever since she was a little girl, Emily had been captivated by the idea of owning a cafe. She imagined a cozy space where friends could gather, strangers could become friends, and everyone could enjoy a perfect cup of coffee. With her background in culinary arts and a love for community, the idea of opening her own cafe seemed like the perfect next step.
                                </p>
                            </div>
                            <div className='w-full flex flex-col items-start gap-5'>
                                <h6 className='text-white text-sm  font-leiko  leading-8 text-start md:text-xl md:leading-8'>Chapter 2: Finding the Right Space</h6>
                                <p className='text-white text-xs text-center font-leiko font-normal leading-8 md:text-start md:text-sm md:leading-8'>
                                    Emily spent weeks scouring Willowbrook for the perfect location. She wanted a spot with character, somewhere that could become a landmark in the community. One day, while walking through the historic district, she stumbled upon an old, abandoned bookstore. The building had large windows, high ceilings, and an undeniable charm despite its disrepair. Emily could see the potential in its worn wooden floors and dusty shelves. With a bit of negotiation and a lot of determination, she signed the lease.
                                </p>
                            </div>
                            <div className='w-full flex flex-col items-start gap-5'>
                                <h6 className='text-white text-sm  font-leiko  leading-8 text-start md:text-xl md:leading-8'>Chapter 3: Bringing the Dream to Life</h6>
                                <p className='text-white text-xs text-center font-leiko font-normal leading-8 md:text-start md:text-sm md:leading-8'>
                                    Transforming the old bookstore into a vibrant cafe was no small task. Emily enlisted the help of her friends and family. They spent long days and nights cleaning, painting, and refurbishing. Emily chose a warm, rustic decor with a mix of vintage furniture and modern touches. She installed a bookshelf wall to pay homage to the building’s past, filling it with books that patrons could borrow or read while enjoying their coffee.
                                    Emily's friend, Sarah, a talented artist, painted a beautiful mural on one wall, depicting scenes of Willowbrook and the cafe's future patrons. The name of the cafe, "The Cozy Corner," was inspired by the intimate nooks and crannies where customers could curl up with a book or have a heartfelt conversation.
                                </p>
                            </div>
                            <div className='w-full flex flex-col items-start gap-5'>
                                <h6 className='text-white text-sm  font-leiko  leading-8 text-start md:text-xl md:leading-8'>Chapter 4: Crafting the Perfect Menu</h6>
                                <p className='text-white text-xs text-center font-leiko font-normal leading-8 md:text-start md:text-sm md:leading-8'>
                                    Emily was a perfectionist when it came to coffee and food. She traveled to nearby cities to visit roasteries and learn about different coffee beans and brewing techniques. She chose a local supplier who provided high-quality, ethically-sourced beans. For the menu, Emily wanted to offer more than just coffee. She crafted a selection of homemade pastries, sandwiches, and salads, all made with fresh, locally-sourced ingredients.
                                    She hired a small but passionate team: Ben, a skilled barista with a knack for latte art; Lisa, a baker whose pastries could rival those of any Parisian patisserie; and Mark, a friendly and efficient server who could make anyone feel at home.
                                </p>
                            </div>
                            <div className='w-full flex flex-col items-start gap-5'>
                                <h6 className='text-white text-sm  font-leiko  leading-8 text-start md:text-xl md:leading-8'>Chapter 5: Opening Day</h6>
                                <p className='text-white text-xs text-center font-leiko font-normal leading-8 md:text-start md:text-sm md:leading-8'>
                                    The grand opening of The Cozy Corner was a highly anticipated event in Willowbrook. Emily's heart raced with excitement and nerves as she watched the first customers walk through the door. The cafe quickly filled with people eager to experience the new spot. The aroma of freshly brewed coffee and baked goods filled the air, blending with the sounds of laughter and conversation.
                                    Emily moved through the crowd, greeting customers, and ensuring everything ran smoothly. She saw familiar faces from around town and new faces that she hoped would become regulars. The Cozy Corner was buzzing with energy and warmth.
                                </p>
                            </div>
                            <div className='w-full flex flex-col items-start gap-5'>
                                <h6 className='text-white text-sm  font-leiko  leading-8 text-start md:text-xl md:leading-8'>Chapter 6: Becoming a Community Hub</h6>
                                <p className='text-white text-xs text-center font-leiko font-normal leading-8 md:text-start md:text-sm md:leading-8'>
                                    As the weeks passed, The Cozy Corner became more than just a place to grab a coffee. It became a gathering place for the community. Emily hosted weekly events like open mic nights, book clubs, and game nights. She invited local musicians to perform, creating a lively and welcoming atmosphere.
                                    One evening, during an open mic night, Emily looked around and saw the cafe filled with people of all ages, laughing, talking, and enjoying the moment. She felt a deep sense of pride and fulfillment. The Cozy Corner had become exactly what she had envisioned—a place where people could come together, share stories, and create memories.
                                </p>
                            </div>
                            <div className='w-full flex flex-col items-start gap-5'>
                                <h6 className='text-white text-sm  font-leiko  leading-8 text-start md:text-xl md:leading-8'>Chapter 7: Growing Together</h6>
                                <p className='text-white text-xs text-center font-leiko font-normal leading-8 md:text-start md:text-sm md:leading-8'>
                                    Emily's cafe continued to thrive, and she never stopped innovating. She expanded the menu to include seasonal specials and introduced a loyalty program for regular customers. She also started offering catering services for local events and businesses.
                                    The Cozy Corner became a beloved fixture in Willowbrook, a place where people felt at home. Emily often reflected on her journey from that rainy afternoon in her apartment to the bustling, joyful cafe she now owned. It had been a challenging and rewarding adventure, and she looked forward to many more years of serving her community with love and passion.
                                    The Cozy Corner was more than just a cafe; it was a dream realized, a community united, and a testament to the power of hard work, dedication, and the simple joy of a good cup of coffee.
                                </p>
                            </div>
                        </div>  
                    </div>
                </div>

            </div>
             <div class="hidden absolute top-28 right-0 rotate-180 md:block"><img src="/images/icon/bg-cofe.svg" alt=""/></div>
             <div class="hidden absolute -bottom-5 left-0 md:block"><img src="/images/icon/bg-cofe.svg" alt=""/></div>
     
 </div>
    );
};

export default AboutUs;