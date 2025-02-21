import React from 'react'
import PageHeading from '../components/sections/pageHeading'
import BlogArticle from '../components/sections/blog/blogArticle'
import { ScrollRestoration } from 'react-router-dom'

const SingleBlog = () => {
    return (
        <>
            <PageHeading
                heading={"Create a Landing Page That Performs Great"}
                description={"With over 12 years of dedicated focus on designing products that achieve business goals, I have established myself as a trusted professional in the industry."}
            />
            <BlogArticle />
            <ScrollRestoration/>
        </>
    )
}

export default SingleBlog