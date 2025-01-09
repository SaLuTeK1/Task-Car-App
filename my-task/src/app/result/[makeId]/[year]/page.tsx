import {ICarRes, IGetModelsForMakeId} from "@/interfaces/allResponceInteface";
import {Suspense} from "react";
import {CarCard} from "@/components/ResultPage/CarCard/CarCard";
import LoadingComponent from "@/components/LoadingComponent/LoadingComponent";


type Params = Promise<{ makeId: string, year: string }>

interface IParams {
    params: Params
}

const YearPage = async ({params}: IParams) => {


    const {makeId, year} = await params
    const res: ICarRes<IGetModelsForMakeId> = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`)
        .then(res => res.json())


    const uniqueCars = res?.Results.filter((car, index, self) =>
        index === self.findIndex((t) => t.Model_ID === car.Model_ID)
    );

    return (
        <main className={'pt-20 wrapper'}>
            <div className={'flex justify-between'}>
                <h3 className={'bg-[#cfdaec] px-4 py-1.5'}>Make ID: {makeId} | Year: {year}</h3>
                <h3 className={'bg-[#cfdaec] px-4 py-1.5'}>Found : {res?.Count}</h3>
            </div>
            <div className={'mt-10 grid grid-cols-[repeat(auto-fill,_minmax(15.45%,_1fr))] gap-[1.563rem] justify-start'}>
                {uniqueCars?.map(car =>
                    <Suspense key={car.Model_ID} fallback={<LoadingComponent/>}>
                        <CarCard car_info={car}/>
                    </Suspense>
                )}
            </div>


        </main>
    );
};

export default YearPage