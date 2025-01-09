'use client'

import {useRouter} from "next/navigation";

const BackButton = () => {
    const router = useRouter()
    return (
        <button className={'bg-[#cfdaec] px-4 py-1.5'}
                onClick={router.back}>
            Back
        </button>
    );
};

export {BackButton}