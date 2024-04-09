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


const StandardLayout = ({children}) => {
  return (
    <ConstrainedLayout>
        <Head title="Homepage" />

        <div className='sticky top-0 z-10'>
            <NavigationBar marginX="px-4 lg:px-10 xl:px-28"/>
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
                        <span className='cursor-pointer'>Create article</span>
                    </BreadcrumbPage>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </div>

        <section className='flex flex-col my-10 space-y-3 md:space-y-8 px-4 lg:px-10 xl:px-28'>
          {children}
        </section>
        <Footer marginX="px-4 lg:px-10"/>
    </ConstrainedLayout>
  )
}

export default StandardLayout