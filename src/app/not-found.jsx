import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='bg-red-500  flex flex-col items-center justify-center gap-5 text-white font-bold text-2xl rounded-lg mx-auto mt-5 mb-5 p-50'>
             <p>page not Found</p>
            <Link href="/"><Button>Go Home</Button></Link>
            
        </div>
    );
};

export default NotFoundPage;