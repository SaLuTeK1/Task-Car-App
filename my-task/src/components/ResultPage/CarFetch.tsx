import {FC} from 'react';
import {ICarRes, IGetModelsForMakeId} from "@/interfaces/allResponceInteface";
import {CarCard} from "@/components/ResultPage/CarCard/CarCard";

type Params = Promise<{ makeId: string, year: string }>

interface IParams {
    params: Params
}

const CarFetch: FC<IParams> = async ({params}) => {

    const {makeId, year} = await params

    const res: ICarRes<IGetModelsForMakeId> = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`)
        .then(res => res.json())

    const uniqueCars = res?.Results?.filter((car, index, self) =>
        index === self.findIndex((t) => t.Model_ID === car.Model_ID))

    return (
        <>
            {uniqueCars?.map(car =>
                <CarCard key={car.Model_ID} car_info={car}/>
            )}
            {uniqueCars?.length === 0 && <h2 className={'text-2xl'}>There is nothing found!</h2>}
            {!res?.Results && <h2 className={'text-2xl'}>You enter wrong data!</h2>}
        </>
    );
};

export {CarFetch};