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
                {auth.user !== null && auth.user.admin !== 0 ? (
                <div className='text-white'>
                  <span onClick={() => router.get(route('article.create'))} className='hover:text-[#E9C46A] text-[#f0daa3] hover:bg-[#42391b] px-3 py-1 transition duration-100 select-none cursor-pointer'>Make article</span>
                </div>
                ) : ""}
            </div>
        </div>

        <section className='flex flex-col my-10 space-y-12 md:space-y-12 px-4 lg:px-10 xl:px-28 min-h-screen'>
            {articles.map((article) => (
              <div className="flex flex-row md:space-x-6 h-full" key={article.id}>
                  <img src={`${article.thumbnail?.link}`} className="object-cover w-[450px] h-[225px] hidden md:block rounded-xl shadow-xl"/>
                  <div className='flex flex-col justify-between w-full md:py-3'>
                    <div>
                      
                      <div className='flex flex-row items-center justify-between'>
                        <span className='font-semibold break-all line-clamp-1 w-[60%]'>
                          {article.title}
                        </span>
                        <div className='flex flex-row space-x-1 items-start'>
                          <button onClick={() => router.get(route('article.show'), {id: article.id})} className='bg-[#E9C46A] rounded-xl px-3 py-1 hover:scale-105 transition duration-200' type="button">View article</button>
                          {/* Add edit and delete button below this */}
                          
                        </div>
                      </div>
                      <p className='mt-6 break-all line-clamp-2 overflow-hidden'>
                        {article.body}
                      </p>
          
                      
                    </div>
                    <span className=' text-muted text-xs'>{format(article.created_at, "MMMM dd, yyyy")}</span>
                  </div>
              </div>
            ))}

        </section>

        <Footer marginX="px-4 lg:px-10 xl:px-28"/>
    </ConstrainedLayout>
  )
}

export default ViewAllArticles