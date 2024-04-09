import Footer from '@/Components/Footer'
import NavigationBar from '@/Components/NavigationBar'
import ConstrainedLayout from '@/Layouts/ConstrainedLayout'
import React from 'react'
import { Head, router } from '@inertiajs/react';
import ConstrainedContent from '@/Layouts/ConstrainedContent';
import { FaPaperclip } from "react-icons/fa6";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { GiBrain } from "react-icons/gi";
import { GiPillow } from "react-icons/gi";



const Homepage = ({auth, recommended_articles, latest_articles}) => {

    console.log(window.scrollY)
  return (
    <ConstrainedLayout>
        <Head title="Homepage" />

        <div className='fixed top-0 z-10 w-full '>
            <NavigationBar marginX="px-4 lg:px-10" auth={auth} bgColor="bg-[#FF7D00]" activateScroll={true}/>
            {/* <div className="bg-[#216680] py-2 px-4 lg:px-10 xl:px-28">
                <Breadcrumb>
                    <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div> */}
        </div>
        {/* HERO SECTION */}
        <section>
            <ConstrainedContent>
                <div className='grid grid-cols-3 w-full'>
                    <img src="/hero-image.jpg" className='w-full h-full object-cover' />
                    <div className='h-full col-span-2 w-full bg-[#FF9E40]'>
                        <div className='p-24 pb-10 h-full flex flex-col items-start justify-center space-y-12'>
                            <div>
                                <h1 className='text-5xl uppercase font-bold tracking-wider text-slate-100'>Camp blogsite</h1>
                                <p className='text-black text-2xl mb-4 text-center md:text-left tracking-wide'>A blog site of a seasoned camper
                                where you can start your relaxing camping from hidden gems to iconic camp sites</p>

                                <button onClick={() => router.get(route('article.index'))} className='bg-[#0065FE] hover:bg-[#0026FE] text-white px-8 py-2 font-semibold transition-all duration-200'>Read more</button>
                            </div>
                            <div className='w-full h-full pb-10'>
                                <h1 className='text-slate-100 text-3xl font-semibold mb-2'>FEATURED BLOGS</h1>
                                <div className='w-full h-[340px] grid grid-cols-3 gap-x-5'>
                                    {recommended_articles.map((article) => (
                                        <div className='relative shadow-2xl'>
                                            <div className='absolute bottom-0 flex flex-row items-center w-full p-3 space-x-3'>
                                                <FaPaperclip className='text-xl text-white'/>
                                                <div>
                                                    <h1 className='text-white text-xl'>{article.title}</h1>
                                                    <span onClick={() => router.get(route('article.show'), {id: article.id})} className='px-3 py-1 text-white bg-[#0065FE] hover:bg-[#0026FE] transition-all duration-200 cursor-pointer'>Read blog</span>
                                                </div>
                                            </div>
                                            <img src={article.thumbnail.link} className='h-full w-full object-cover'/>
                                        </div>
                                    ))}


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ConstrainedContent>
        </section>

        <section className='flex flex-col space-y-12 w-full'>
            <ConstrainedContent className="w-full flex flex-col items-center px-4 lg:px-10">
                    <div className='grid grid-cols-2 w-full'>
                        <div className='flex items-center justify-start'>
                            <img src='/map.jpg' className='w-[80%] object-cover md:h-full xl:h-[80%] shadow-xl rounded-2xl'/>
                        </div>
                        <div className='w-full flex flex-col justify-center'>
                            <ul className='space-y-10 w-full'>
                                
                                <h1 className='font-black text-3xl uppercase'>My Mission</h1>
                                <li className='grid grid-cols-10 items-center space-x-1 p-4 shadow-xl'>
                                    <GiBrain className='text-5xl text-[#0065FE]'/>
                                    <div className='space-y-1 col-span-9'>
                                        <h2 className='text-xl text-[#FF7D00]'>KNOWLEDGE</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates facilis ullam nemo at nulla neque cupiditate voluptatem corporis, nostrum eum debitis molestiae illo inventore sunt iure, minus officiis praesentium aliquid quisquam incidunt dicta, quia modi vero ab! Doloremque</p>
                                    </div>
                                </li>
                                <li className='grid grid-cols-10 items-center space-x-1 shadow-xl p-4'>
                                    <AiFillSafetyCertificate className='text-5xl text-[#0065FE]'/>
                                    <div className='space-y-1 col-span-9'>
                                        <h2 className='text-xl text-[#FF7D00]'>SAFETY</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates facilis ullam nemo at nulla neque cupiditate voluptatem corporis, nostrum eum debitis molestiae illo inventore sunt iure, minus officiis praesentium aliquid quisquam incidunt dicta, quia modi vero </p>
                                    </div>
                                </li>
                                <li className='grid grid-cols-10 items-center space-x-1 shadow-xl p-4'>
                                    <GiPillow className='text-5xl text-[#0065FE]'/>
                                    <div className='space-y-1 col-span-9'>
                                        <h2 className='text-xl text-[#FF7D00]'>COMFORTNESS</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates facilis ullam nemo at nulla neque cupiditate voluptatem corporis, nostrum eum debitis molestiae illo inventore sunt iure, minus officiis praesentium aliquid quisquam incidunt dicta, quia modi vero ab! </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

            </ConstrainedContent>
        </section>

        {/* RECOMMENDED ARTICLE SECTION*/}
        <section className='flex flex-col space-y-12 mb-24 bg-[#E5F8F8] py-10'>
            {/* <ConstrainedContent className={`px-4 lg:px-10 xl:px-28`}>
                <span className='font-black text-3xl'>Recommended</span>
                <div className='grid grid-cols-1 md:grid-cols-2 mt-4 gap-y-10 md:gap-x-10 '>
                    <img src={recommended_article?.thumbnail?.link} className='object-cover w-[700px] h-[500px] '/>
                    <div className='flex flex-col justify-between items-start'>
                        <div className='flex flex-col space-y-3'>
                            <h2 className='font-medium text-4xl'>{recommended_article?.title}</h2>
                            
                            <p className='leading-relaxed line-clamp-5 xl:line-clamp-[12] break-all'>
                                {recommended_article?.body}
                            </p>

                        </div>
                        <button onClick={() => router.get(route('article.show'), {id: recommended_article?.id})} className='bg-[#0065FE] hover:bg-[#0026FE] text-white px-8 py-2 font-semibold transition-all duration-200 mt-3 md:mt-0' type='button'>View article</button>
                    </div>
                </div>
            </ConstrainedContent> */}
            <ConstrainedContent className={`px-4 lg:px-10`}>
                <div className='w-full flex flex-col-reverse md:flex-row items-center'>
                    <h1 className='font-black text-3xl uppercase mb-6'>Latest blogs</h1>
   
                </div>
                <div className='grid xl:grid-cols-2 mt-4 gap-8 mb-14'>
                    {latest_articles.map((article) => (
                        <div className='flex flex-col md:flex-row  w-full border-b-2 pb-3 md:pb-3 xl:pb-0 border-slate-300 xl:border-b-0 relative'>
                            <img src={article?.thumbnail?.link} className='object-cover w-[200px] h-[200px] hidden md:block  shadow-xl'/>
                            <div className='flex flex-col  justify-between items-start md:px-6 '>
                                
                                <div>
                                    <div className='w-full flex flex-row justify-between items-end'>
                                        <span className='text-black font-semibold text-2xl w-full'>{article?.title}</span>
                                        <button onClick={() => router.get(route('article.show'), {id: article.id})} type='button' className='bg-[#FF9E40] text-black hover:bg-[#F68F2A] w-[200px]  p-1 font-semibold transition-all duration-200 '>View article</button>
                                    </div>
                                    <p className='break-all line-clamp-3 mt-2'>
                                        {article.body}
                                    </p>

                                    
                                </div>
                                <h4 className='text-slate-400'>{article.created_at}</h4>

                
                            </div>
                        </div>
                    ))}

                </div>
                <div className='w-full flex flex-col items-center'>
                    <button className='bg-[#0065FE] hover:bg-[#0026FE] text-white px-8 py-2 font-semibold transition-all duration-200 mt-3 md:mt-0' type='button' onClick={(e) => {
                            router.get(route('article.index'))
                        }}>Read more</button>
                
                </div>
            </ConstrainedContent>
        </section>



        <Footer marginX="px-4 lg:px-10"/>
    </ConstrainedLayout>
  )
}

export default Homepage