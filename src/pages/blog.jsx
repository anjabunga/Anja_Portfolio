import React from 'react'
import { ScrollRestoration } from 'react-router-dom'
import PageHeading from '../components/sections/pageHeading'
import BlogList from '../components/sections/blog/blogList'
import CallToAction from '../components/sections/callToAction'

const Blog = () => {
    return (
        <>
            <PageHeading
                heading={"Certifications"}
                description={"Here are some of the certifications I have earned to enhance my skills and knowledge in both academic and professional fields."}
            />
            <BlogList />
            <CallToAction />
            <ScrollRestoration />
        </>
    )
}

export default Blog