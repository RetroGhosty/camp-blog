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

const Homepage = ({auth}) => {


  return (
    <ConstrainedLayout>
        <Head title="Homepage" />

        <div className='sticky top-0 z-10'>
            <NavigationBar marginX="px-4 lg:px-10 xl:px-28" auth={auth}/>
            <div className="bg-[#216680] py-2 px-4 lg:px-10 xl:px-28">
                <Breadcrumb>
                    <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </div>

        <section className='flex flex-col space-y-16 my-10'>
            <div className={`px-4 lg:px-10 xl:px-28`}>
                <span className='font-black text-3xl'>Recommended</span>
                <div className='grid grid-cols-1 md:grid-cols-2 mt-4 gap-y-10 md:gap-x-10 '>
                    <img src="/Yamanashi_Camping_Grounds.jpg" className='img-fluid w-full h-auto rounded-xl'/>
                    <div className='flex flex-col justify-between items-start'>
                        <div className='flex flex-col space-y-3'>
                            <h2 className='font-medium text-4xl'>Yamanasi Camping Grounds</h2>
                            <p className='leading-relaxed line-clamp-5 xl:line-clamp-[12]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad atque blanditiis iure ipsum mollitia ratione, molestias exercitationem necessitatibus, maxime neque rem ipsa ex placeat cum rerum repellat, voluptatem quo pariatur velit officiis minima nostrum ut sed odit! Sed eaque non dolor ipsam? Labore quasi unde aliquam vitae accusamus ex odio aut? Soluta voluptatum tempore atque sint molestiae ipsa suscipit ut, facilis ex? Odit ducimus vitae, temporibus recusandae cumque vero cupiditate fuga expedita esse natus at quos officiis nulla rem quae deserunt dolore nostrum dolores est quasi veritatis tempora. Cumque ipsa ad adipisci esse laudantium veniam quaerat quam ut, quos vel sunt quia placeat assumenda aperiam amet facilis dolore eaque voluptates incidunt et velit, iusto, praesentium eos. Voluptatem nulla nostrum quibusdam sint nisi cupiditate accusantium repellat dolor quidem rerum, corrupti molestias incidunt adipisci cumque laboriosam facere labore, aliquid soluta sapiente pariatur? Pariatur dolorem dolorum amet atque consectetur assumenda fugit, hic ratione.</p>

                        </div>
                        <button className='bg-[#e9c46a] rounded-xl px-6 py-3 font-semibold hover:scale-105 transition duration-100 mt-3 md:mt-0'>View article</button>
                    </div>
                </div>
            </div>
            <div className={`px-4 lg:px-10 xl:px-28`}>
                <div className='w-full flex flex-col-reverse md:flex-row items-center justify-between'>
                    <span className='font-black text-3xl'>Latest articles</span>
                    <button className='bg-[#3B99BB] text-white rounded-xl p-2 md:px-5 md:py-3 font-semibold hover:scale-105 transition duration-100 mt-3 md:mt-0' type='button' onClick={(e) => {
                        router.get(route('article.index'))
                    }}>View all articles</button>
                </div>
                <div className='grid grid-cols-1 mt-4 gap-10 '>
                    {/* First row */}
                    <div className='flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 w-full'>
                        <img src="/Yamanashi_Camping_Grounds.jpg" className='object-cover object-center h-32 w-auto md:w-[300px] md:h-auto rounded-xl'/>
                        <div className='flex flex-col  justify-between items-start'>
                            <div>
                                <span className='text-black font-semibold text-2xl w-full'>Camping ground</span>
                                <p className='line-clamp-3 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis officia cumque debitis dolorem nesciunt laudantium libero minus fugiat harum labore velit sed, reiciendis quia reprehenderit voluptates nihil, quis amet, esse ex. Magnam voluptatibus temporibus necessitatibus, cum tempora, repellendus harum quo ut deserunt numquam impedit quam voluptatum, maxime eius nam obcaecati minus recusandae consectetur! Harum ratione dolorem excepturi illum deleniti perspiciatis non magni, soluta voluptatem, corporis inventore minus at cupiditate dicta quas alias odit architecto voluptas ducimus voluptatum, obcaecati totam nostrum! Corporis voluptas, hic eum voluptate in sequi odio exercitationem ullam deleniti aut voluptatum incidunt odit pariatur vel repellat quidem nesciunt dicta numquam maxime reprehenderit earum fuga? Inventore vitae rerum praesentium fugiat? Exercitationem repudiandae, fuga praesentium amet sequi perspiciatis totam, numquam dolor magnam molestiae placeat sed inventore nulla aliquid nisi eum laboriosam voluptatum necessitatibus quia accusantium, enim a. Ab et distinctio laudantium minima nulla quia asperiores pariatur repudiandae quos id, possimus maxime iste nobis tempore placeat. Voluptate, voluptates aperiam fugiat deleniti unde, harum deserunt eius dignissimos ipsum voluptatibus id cupiditate nostrum sed sint magni! Nemo sapiente quia delectus quidem eligendi aut iure. Debitis totam pariatur nostrum quis eius qui porro deserunt, eveniet, animi dolor repellendus vitae quasi corporis beatae, tempore numquam?</p>
                            </div>
                        
                            <button className='bg-[#e9c46a] rounded-xl px-6 py-2 font-semibold hover:scale-105 transition duration-100 mt-3 md:mt-0'>View article</button>


                        </div>
                    </div>
                    {/* Second row */}

                    <div className='flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 w-full'>
                        <img src="/Yamanashi_Camping_Grounds.jpg" className='object-cover object-center h-32 w-auto md:w-[300px] md:h-auto rounded-xl'/>
                        <div className='flex flex-col  justify-between items-start'>
                            <div>
                                <span className='text-black font-semibold text-2xl w-full'>Camping ground</span>
                                <p className='line-clamp-3 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis officia cumque debitis dolorem nesciunt laudantium libero minus fugiat harum labore velit sed, reiciendis quia reprehenderit voluptates nihil, quis amet, esse ex. Magnam voluptatibus temporibus necessitatibus, cum tempora, repellendus harum quo ut deserunt numquam impedit quam voluptatum, maxime eius nam obcaecati minus recusandae consectetur! Harum ratione dolorem excepturi illum deleniti perspiciatis non magni, soluta voluptatem, corporis inventore minus at cupiditate dicta quas alias odit architecto voluptas ducimus voluptatum, obcaecati totam nostrum! Corporis voluptas, hic eum voluptate in sequi odio exercitationem ullam deleniti aut voluptatum incidunt odit pariatur vel repellat quidem nesciunt dicta numquam maxime reprehenderit earum fuga? Inventore vitae rerum praesentium fugiat? Exercitationem repudiandae, fuga praesentium amet sequi perspiciatis totam, numquam dolor magnam molestiae placeat sed inventore nulla aliquid nisi eum laboriosam voluptatum necessitatibus quia accusantium, enim a. Ab et distinctio laudantium minima nulla quia asperiores pariatur repudiandae quos id, possimus maxime iste nobis tempore placeat. Voluptate, voluptates aperiam fugiat deleniti unde, harum deserunt eius dignissimos ipsum voluptatibus id cupiditate nostrum sed sint magni! Nemo sapiente quia delectus quidem eligendi aut iure. Debitis totam pariatur nostrum quis eius qui porro deserunt, eveniet, animi dolor repellendus vitae quasi corporis beatae, tempore numquam?</p>
                            </div>
                        
                            <button className='bg-[#e9c46a] rounded-xl px-6 py-2 font-semibold hover:scale-105 transition duration-100 mt-3 md:mt-0'>View article</button>


                        </div>
                    </div>
                    {/* Third row */}
                    <div className='flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 w-full'>
                        <img src="/Yamanashi_Camping_Grounds.jpg" className='object-cover object-center h-32 w-auto md:w-[300px] md:h-auto rounded-xl'/>
                        <div className='flex flex-col  justify-between items-start'>
                            <div>
                                <span className='text-black font-semibold text-2xl w-full'>Camping ground</span>
                                <p className='line-clamp-3 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis officia cumque debitis dolorem nesciunt laudantium libero minus fugiat harum labore velit sed, reiciendis quia reprehenderit voluptates nihil, quis amet, esse ex. Magnam voluptatibus temporibus necessitatibus, cum tempora, repellendus harum quo ut deserunt numquam impedit quam voluptatum, maxime eius nam obcaecati minus recusandae consectetur! Harum ratione dolorem excepturi illum deleniti perspiciatis non magni, soluta voluptatem, corporis inventore minus at cupiditate dicta quas alias odit architecto voluptas ducimus voluptatum, obcaecati totam nostrum! Corporis voluptas, hic eum voluptate in sequi odio exercitationem ullam deleniti aut voluptatum incidunt odit pariatur vel repellat quidem nesciunt dicta numquam maxime reprehenderit earum fuga? Inventore vitae rerum praesentium fugiat? Exercitationem repudiandae, fuga praesentium amet sequi perspiciatis totam, numquam dolor magnam molestiae placeat sed inventore nulla aliquid nisi eum laboriosam voluptatum necessitatibus quia accusantium, enim a. Ab et distinctio laudantium minima nulla quia asperiores pariatur repudiandae quos id, possimus maxime iste nobis tempore placeat. Voluptate, voluptates aperiam fugiat deleniti unde, harum deserunt eius dignissimos ipsum voluptatibus id cupiditate nostrum sed sint magni! Nemo sapiente quia delectus quidem eligendi aut iure. Debitis totam pariatur nostrum quis eius qui porro deserunt, eveniet, animi dolor repellendus vitae quasi corporis beatae, tempore numquam?</p>
                            </div>
                        
                            <button className='bg-[#e9c46a] rounded-xl px-6 py-2 font-semibold hover:scale-105 transition duration-100 mt-3 md:mt-0'>View article</button>


                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer marginX="px-4 lg:px-10 xl:px-28"/>
    </ConstrainedLayout>
  )
}

export default Homepage