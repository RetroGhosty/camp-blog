import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shadcn/ui/breadcrumb"
import Footer from '@/Components/Footer'
import NavigationBar from '@/Components/NavigationBar'
import ConstrainedLayout from '@/Layouts/ConstrainedLayout'
import { Head, router } from '@inertiajs/react'


const ViewArticle = ({article, auth}) => {
  return (
    <ConstrainedLayout>
        <Head title="Homepage" />

        <div className='sticky top-0 z-10'>
            <NavigationBar marginX="px-4 lg:px-10 xl:px-28" auth={auth}/>
            <div className="bg-[#216680] py-2 px-4 lg:px-10 xl:px-28 flex flex-row items-center justify-between">
                <Breadcrumb>
                    <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator/>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/articles">Articles</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator/>
                    <BreadcrumbPage>
                        <span className='cursor-pointer'>{article.title}</span>
                    </BreadcrumbPage>
                    </BreadcrumbList>
                </Breadcrumb>
                {/* Only show this if the user is both logged in and admin */}
                <div className='text-white'>
                  <span className='hover:text-[#E9C46A] hover:bg-[#42391b] px-3 py-1 transition duration-100 select-none cursor-pointer'>Edit article</span>
                  <span className='hover:text-[#E9C46A] text-red-300 hover:bg-[#42391b] px-3 py-1 transition duration-100 select-none cursor-pointer'>Delete article</span>
                </div>
            </div>
        </div>

        <section className='flex flex-col my-10 space-y-3 md:space-y-8 px-4 lg:px-10 xl:px-28'>
          <div className='grid grid-cols-2 gap-10 mb-10'>
            <div>
            <h2 className='font-bold text-3xl mb-5'>{article.title}</h2>
            <p>{article.body}</p>
            </div>
          <img src={article.thumbnail} className='object-contain w-full h-auto inline-block' />
          </div>

          <div className='flex flex-col w-full'>
            <h2 className='font-bold text-3xl mb-5'>Photos</h2>
            <div className='columns-2 gap-1 md:columns-3 md:gap-10'>
              <img src={article.thumbnail} className='object-contain w-full h-auto inline-block mb-10' />
              <img src={article.thumbnail} className='object-contain w-full h-auto inline-block mb-10' />
              <img src={article.thumbnail} className='object-contain w-full h-auto inline-block mb-10' />
              <img src={article.thumbnail} className='object-contain w-full h-auto inline-block mb-10' />
              <img src={article.thumbnail} className='object-contain w-full h-auto inline-block mb-10' />
              <img src={article.thumbnail} className='object-contain w-full h-auto inline-block mb-10' />
              <img src={article.thumbnail} className='object-contain w-full h-auto inline-block mb-10' />
              <img src={article.thumbnail} className='object-contain w-full h-auto inline-block mb-10' />

            </div>

          </div>
          

        </section>


        <Footer marginX="px-4 lg:px-10 xl:px-28"/>
    </ConstrainedLayout>
  )
}

export default ViewArticle