
import {Suspense} from "react";

import LoadingComponent from "@/components/LoadingComponent/LoadingComponent";
import {CarFetch} from "@/components/ResultPage/CarFetch";
import {BackButton} from "@/components/Buttons/BackButton";


type Params = Promise<{ makeId: string, year: string }>

interface IParams {
    params: Params
}

const YearPage = async ({params}: IParams) => {
    const {makeId, year} = await params

    return (
        <main className={'pt-20 '}>
            <div className={'flex justify-between'}>
                <h3 className={'bg-[#cfdaec] px-4 py-1.5'}>Make ID: {makeId} | Year: {year}</h3>
                <BackButton/>
            </div>
            <div
                className={'mt-10 grid grid-cols-[repeat(auto-fill,_minmax(15.45%,_1fr))] gap-[1.563rem] justify-start'}>
                <Suspense fallback={<LoadingComponent/>}>
                    <CarFetch params={params}/>
                </Suspense>
            </div>


        </main>
    );
};

export default YearPage