import React from 'react'
import PageHeading from '../components/sections/pageHeading'
import { ScrollRestoration } from 'react-router-dom'
import ContactForm from '../components/sections/contactForm'

const Contact = () => {
    return (
        <>
            <PageHeading
                heading={"Hello, I am Anja"}
                description={"Fill out the form direct to my e-mail account below to get in touch with me."}
            />
            <ContactForm />
            <ScrollRestoration />
        </>
    )
}

export default Contact