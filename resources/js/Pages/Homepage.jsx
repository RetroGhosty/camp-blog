import Footer from '@/Components/Footer'
import NavigationBar from '@/Components/NavigationBar'
import ConstrainedLayout from '@/Layouts/ConstrainedLayout'
import React from 'react'
import { Head, router } from '@inertiajs/react';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/shadcn/ui/breadcrumb"

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
                        <button onClick={() => router.get(route('article.show'), {id: recommended_article?.id})} className='bg-[#e9c46a] rounded-xl px-6 py-3 font-semibold hover:scale-105 transition duration-100 mt-3 md:mt-0' type='button'>View article</button>
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
                            <img src={article?.thumbnail?.link} className='object-cover w-[450px] h-[225px] hidden md:block rounded-xl shadow-xl'/>
                            <div className='flex flex-col  justify-between items-start'>
                                <div>
                                    <span className='text-black font-semibold text-2xl w-full'>{article?.title}</span>
                                    <p className='break-all line-clamp-3 mt-2'>
                                        {article.body}
                                    </p>
                                </div>
                            
                                <button onClick={() => router.get(route('article.show'), {id: article.id})} type='button' className='bg-[#e9c46a] rounded-xl px-6 py-2 font-semibold hover:scale-105 transition duration-100 mt-3 md:mt-0'>View article</button>


                            </div>
                        </div>
                    ))}
                    {/* First row */}

                </div>
                <div className='w-full flex flex-col items-end'>
                    <button className='bg-[#3B99BB] text-white rounded-xl p-2 md:px-5 md:py-3 font-semibold hover:scale-105 transition duration-100 mt-3 md:mt-0' type='button' onClick={(e) => {
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