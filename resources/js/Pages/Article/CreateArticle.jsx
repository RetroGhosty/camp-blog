import React, { useState } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shadcn/ui/breadcrumb"
import {Button} from "@/shadcn/ui/button"
import Footer from '@/Components/Footer'
import NavigationBar from '@/Components/NavigationBar'
import ConstrainedLayout from '@/Layouts/ConstrainedLayout'
import { Head, router, useForm } from '@inertiajs/react'
import ThumbnailDragFile from '@/Components/ThumbnailDragFile'
import PhotoDragFile from '@/Components/PhotoDragFile'
import { Progress } from "@/shadcn/ui/progress"


const CreateArticle = ({auth}) => {

    const {data, setData, post, processing, errors} = useForm({
        recommended: 0,
        title: "",
        body: "",
        thumbnail: null,
        photos: null
      })
    

    function handleSubmit(e) {
        e.preventDefault()
        post(route('article.store'))
    }



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
                        <span className='cursor-pointer'>Create article</span>
                    </BreadcrumbPage>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col my-10 space-y-3 md:space-y-4 px-4 lg:px-10 xl:px-28 items-start w-full'>

            <div className='flex flex-col items-start w-full'>
                <div className='flex flex-row items-center space-x-2'>
                    <label htmlFor="recommended" className='font-bold tracking-wide text-lg'>Show in recommendation?</label>
                    {errors.recommended ? <span className='text-red-500'>{errors.recommended}</span> : null}
                </div>
                <select name="recommended" className='w-[20%] rounded-xl shadow-md' id="recommended" onChange={(e) => setData('recommended', e.target.value)} defaultValue={false}>
                    <option value={0}>No</option>
                    <option value={1}>Yes</option>
                </select>
            </div>

            <div className='flex flex-col items-start w-full'>
                <div className='flex flex-row items-center space-x-2'>
                    <label htmlFor="title" className='font-bold tracking-wide text-lg'>Title</label>
                    {errors.title ? <span className='text-red-500'>{errors.title}</span> : null}
                </div>
                <input id='title' value={data.title} onChange={(e) => setData('title', e.target.value)} name='title' className='rounded-xl w-full md:w-[40%] shadow-md'/>
            </div>

            <div className='flex flex-col items-start w-full'>
                <div className='flex flex-row items-center space-x-2'>
                    <label htmlFor="body" className='font-bold tracking-wide text-lg'>Content</label>
                    {errors.body ? <span className='text-red-500'>{errors.body}</span> : null}
                </div>
                <textarea id='body' value={data.body} onChange={(e) => setData('body', e.target.value)} name='body' className='rounded-xl w-full shadow-md' rows={15}/>
            </div>

            <ThumbnailDragFile setData={setData} errors={errors}/>
            <PhotoDragFile setData={setData} errors={errors}/>

            <Button disabled={processing} type='submit' className='bg-[#E9C46A] hover:bg-[#bd9e51] px-10 py-2 rounded-xl'>Submit</Button>
        </form>


        <Footer marginX="px-4 lg:px-10 xl:px-28"/>
    </ConstrainedLayout>
  )
}

export default CreateArticle