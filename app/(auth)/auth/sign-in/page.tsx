import SignInFormClient from '@/modules/auth/components/sigin-in-form'
import Image from 'next/image'
import React from 'react'

const Page = () => {
    return (
        <>
            <Image
                src={"/login.svg"}
                alt="Logo"
                width={300}
                height={300}
                className='m-6 object-cover'
            // priority     
            />
            <SignInFormClient />
        </>
    )
}

export default Page
