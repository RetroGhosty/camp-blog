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
import { MdDeleteSweep } from "react-icons/md";


const EditArticle = ({auth, article}) => {
  const {data, setData, post, processing, errors} = useForm({
    id: article.id,
    recommended: article.recommended,
    title: article.title,
    body: article.body,
    thumbnail: null,
    photos: null
  })


  function handleSubmit(e) {
      e.preventDefault()
      post(route('article.update'))
  }


  return (
    <ConstrainedLayout>
        <Head title="Homepage" />
        <div className='sticky top-0 z-10'>
            <NavigationBar  bgColor="bg-[#FF7D00]" marginX="px-4 lg:px-10 xl:px-28" auth={auth}/>
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
                    <BreadcrumbItem>
                        <BreadcrumbLink href={`/article?id=${article.id}`}>{article.title}</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator/>
                    <BreadcrumbPage>
                        <span className='cursor-pointer'>Edit article</span>
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

            <div className='flex flex-col space-y-24 w-full'>
              <div className='grid grid-cols-1 md:grid-cols-3 w-full gap-10'>
                <ThumbnailDragFile setData={setData} errors={errors}/>
                <div className='md:cols-span-2 columns-2 gap-5'>
                  {article.thumbnail !== null ? (
                    <div className='relative w-full h-auto mb-5 select-none'>
                      <img src={article.thumbnail?.link} className='object-contain w-full h-auto'/>
                      <div className='absolute top-0 right-0 p-2 text-red-400 flex items-end justify-end w-full bg-[#00000083]'>
                        <MdDeleteSweep className='text-3xl hover:scale-125 active:scale-75 transition duration-150' onClick={() => router.post(route('article.deleteImage'), {
                            articleId: article.id,
                            imageId: article.thumbnail?.id
                        })}/>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-3 w-full gap-10'>
                <PhotoDragFile setData={setData} errors={errors}/>
                <div className='md:cols-span-2 columns-2 gap-5'>
                  {article.photos.map((photo) => (
                    <div className='relative w-full h-auto mb-5 select-none' key={photo['id']}>
                      <img src={photo['link']} className='object-contain w-full h-auto'/>
                      <div className='absolute top-0 right-0 p-2 text-red-400 flex items-end justify-end w-full bg-[#00000065]'>
                        <MdDeleteSweep className='text-3xl hover:scale-125 active:scale-75 transition duration-150' onClick={() => router.post(route('article.deleteImage'), {
                          articleId: article.id,
                          imageId: photo['id']
                        })}/>
                      </div>
                    </div>
                    
                  ))}
                </div>
              </div>
            </div>

            <Button disabled={processing} type='submit' className='bg-[#E9C46A] hover:bg-[#bd9e51] px-10 py-2 rounded-xl'>Submit</Button>
        </form>


        <Footer marginX="px-4 lg:px-10"/>
    </ConstrainedLayout>
  )
}

export default EditArticle