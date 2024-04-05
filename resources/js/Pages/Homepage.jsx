import Footer from '@/Components/Footer'
import NavigationBar from '@/Components/NavigationBar'
import ConstrainedLayout from '@/Layouts/ConstrainedLayout'
import React from 'react'
import { Head, router } from '@inertiajs/react';
import { IoIosArrowDropdownCircle } from "react-icons/io";



const Homepage = ({auth, recommended_article, latest_articles}) => {

    console.log(recommended_article)
  return (
    <ConstrainedLayout>
        <Head title="Homepage" />

        <div className='sticky top-0 z-10'>
            <NavigationBar marginX="px-4 lg:px-10 xl:px-28" auth={auth}/>
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
        <section className='relative w-full min-h-[350px] md:min-h-[450px] mb-24 md:mb-12 lg:mb-24 bg-[#e5f8f8]'>
            <div className='flex flex-row h-full items-center gap-20 px-4 lg:px-10 xl:px-28 py-5 my-5'>
                <div className='w-full flex flex-col items-center md:items-start'>
                    <h1 className='text-black text-4xl md:text-5xl font-bold mb-2'>Camp blogsite</h1>
                    <p className='text-black text-2xl mb-4 text-center md:text-left'>A blog site from a <span className='text-[#0065FE] font-bold'>seasoned camper </span> 
                    where you can start your <span className='text-[#F68F2A] font-bold'>comfy </span>journey from hidden gems to iconic camping landmarks</p>
                    <button onClick={() => router.get(route('article.index'))} className='bg-[#0065FE] hover:bg-[#0026FE] transition duration-300 text-white px-6 py-2'>View blogs</button>
                    
                    <IoIosArrowDropdownCircle className='text-[#FF9E40] text-3xl md:text-4xl absolute -bottom-0 md:bottom-0 animate-bounce'/>
                </div>
                
                <div className='w-full h-full md:flex items-center justify-center hidden'>
                    <img src="/hero-image.jpg" className='w-[80%] h-[400px] object-cover rounded-3xl '/>
                </div>
       
            </div>
            {/* Section end wave */}
            <img src="/social-media-wave.svg"  className='absolute -bottom-28 md:-bottom-[170px] lg:-bottom-[250px] xl:-bottom-[300px] -z-10'/>
        </section>

        {/* RECOMMENDED ARTICLE SECTION*/}
        <section className='flex flex-col space-y-16 my-10'>
            <div className={`px-4 lg:px-10 xl:px-28`}>
                <span className='font-black text-3xl'>Recommended</span>
                <div className='grid grid-cols-1 md:grid-cols-2 mt-4 gap-y-10 md:gap-x-10 '>
                    <img src={recommended_article?.thumbnail?.link} className='object-cover w-[700px] h-[500px] rounded-xl'/>
                    <div className='flex flex-col justify-between items-start'>
                        <div className='flex flex-col space-y-3'>
                            <h2 className='font-medium text-4xl'>{recommended_article?.title}</h2>
                            
                            <p className='leading-relaxed line-clamp-5 xl:line-clamp-[12] break-all'>
                                {recommended_article?.body}
                            </p>

                        </div>
                        <button onClick={() => router.get(route('article.show'), {id: recommended_article?.id})} className='bg-[#FF9E40] hover:bg-[#F68F2A] rounded-none hover:rounded-xl px-6 py-3 font-semibold hover:scale-105 transition-all duration-200 mt-3 md:mt-0' type='button'>View article</button>
                    </div>
                </div>
            </div>
            
            <div className={`px-4 lg:px-10 xl:px-28`}>
                <div className='w-full flex flex-col-reverse md:flex-row items-center'>
                    <span className='font-black text-3xl'>Latest articles</span>
   
                </div>
                <div className='grid grid-cols-1 mt-4 gap-10 '>
                    {latest_articles.map((article) => (
                        <div className='flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 w-full'>
                            <img src={article?.thumbnail?.link} className='object-cover w-[200px] h-[200px] hidden md:block rounded-xl shadow-xl'/>
                            <div className='flex flex-col  justify-between items-start'>
                                <div>
                                    <span className='text-black font-semibold text-2xl w-full'>{article?.title}</span>
                                    <p className='break-all line-clamp-3 mt-2'>
                                        {article.body}
                                    </p>
                                </div>
                            
                                <button onClick={() => router.get(route('article.show'), {id: article.id})} type='button' className='bg-[#FF9E40] hover:bg-[#F68F2A] rounded-none hover:rounded-xl px-6 py-2 font-semibold hover:scale-105 transition-all duration-200 mt-3 md:mt-0'>View article</button>


                            </div>
                        </div>
                    ))}

                </div>
                <div className='w-full flex flex-col items-end'>
                    <button className='bg-[#0065FE] hover:bg-[#0026FE] text-white rounded-none hover:rounded-xl p-2 md:px-5 md:py-3 font-semibold hover:scale-105 transition-all duration-200 mt-3 md:mt-0' type='button' onClick={(e) => {
                            router.get(route('article.index'))
                        }}>View all articles</button>
                
                </div>
            </div>
        </section>



        <Footer marginX="px-4 lg:px-10 xl:px-28"/>
    </ConstrainedLayout>
  )
}

export default Homepage