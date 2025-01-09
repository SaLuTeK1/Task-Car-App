
import {Introduction} from "@/components/HomePage/Introduction/Introduction";
import {ICarRes, IGetMakesForVehicle} from "@/interfaces/allResponceInteface";
import {SearchForm} from "@/components/HomePage/Form/SearchForm";

export default async function Home() {
    const cars:ICarRes<IGetMakesForVehicle> = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json').then(res=>res.json())

    return (
        <main className={'pt-20 flex justify-between flex-col xl:flex-row gap-6 '}>
            <Introduction/>
            <SearchForm response={cars}/>
        </main>
    );
}
