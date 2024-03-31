import Footer from '@/Components/Footer'
import NavigationBar from '@/Components/NavigationBar'
import ConstrainedLayout from '@/Layouts/ConstrainedLayout'
import { Head, router } from '@inertiajs/react'
import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shadcn/ui/breadcrumb"
import { format } from 'date-fns'


const ViewAllArticles = ({articles, auth}) => {

  
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
                    <BreadcrumbPage>
                        <BreadcrumbLink href="/articles">Articles</BreadcrumbLink>
                    </BreadcrumbPage>

                    </BreadcrumbList>
                </Breadcrumb>
                {/* Only show this if the user is both logged in and admin */}
                {auth.user !== null ? (
                <div className='text-white'>
                  <span onClick={() => router.get(route('article.create'))} className='hover:text-[#E9C46A] text-[#f0daa3] hover:bg-[#42391b] px-3 py-1 transition duration-100 select-none cursor-pointer'>Make article</span>
                </div>
                ) : ""}
            </div>
        </div>

        <section className='flex flex-col my-10 space-y-3 md:space-y-8 px-4 lg:px-10 xl:px-28'>
            {articles.map((article) => (
              <div className="flex flex-row space-x-6 h-full" key={article.id}>
                  <img src={`${article.thumbnail}`} className="object-fill w-[200px] h-[100px] rounded-xl"/>
                  <div className='flex flex-col justify-between w-full'>
                    <div className='flex flex-col space-y-2 '>
                      
                      <div className='flex flex-row items-center justify-between space-x-5'>
                        <span className='font-semibold'>
                          {article.title}
                        </span>
                        <div className='flex flex-row space-x-1 items-start'>
                          <button onClick={() => router.get(route('article.show'), {id: article.id})} className='bg-[#E9C46A] rounded-xl px-3 py-1 hover:scale-105 transition duration-200' type="button">View article</button>
                          {/* Add edit and delete button below this */}
                          
                        </div>
                      </div>
                      <p>
                        sadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadssadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadssadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsadsads
                      </p>
          
                      
                    </div>
                    <span className='text-muted text-xs'>{format(article.created_at, "MMMM dd, yyyy")}</span>
                  </div>
              </div>
            ))}

        </section>

        <Footer marginX="px-4 lg:px-10 xl:px-28"/>
    </ConstrainedLayout>
  )
}

export default ViewAllArticles