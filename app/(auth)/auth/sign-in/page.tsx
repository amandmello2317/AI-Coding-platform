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
                priority
            />
        </>
    )
}

export default Page
