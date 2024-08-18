'use client'

import { useRouter } from 'next/navigation'

//Import Needed Icons
import { ArrowLeft2 } from 'iconsax-react';


const BackBtn = () => {

    const router = useRouter()

    return (
        <main className="bg-black text-white rounded-[50%] size-8 p-2 flex items-center justify-center cursor-pointer hover:text-black hover:bg-warmOrange duration-300" onClick={() => router.back()}>
            <ArrowLeft2 size="24" />
        </main>
    );
}

export default BackBtn;