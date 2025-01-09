"use client"

import {FC} from 'react';
import {ICarRes, IGetMakesForVehicle} from "@/interfaces/allResponceInteface";
import {useForm} from "react-hook-form";
import {navigate} from "next/dist/client/components/segment-cache/navigation";
import {useRouter} from "next/navigation";

interface IProps {
    response: ICarRes<IGetMakesForVehicle>
}

interface IForm {
    vehicle_makes: string
    vehicle_year: number
}

const SearchForm: FC<IProps> = ({response}) => {
    const {Results: result} = response;
    const {reset, register, handleSubmit, formState: {isValid}, watch} = useForm<IForm>({
        mode: "onChange",
    });

    const router = useRouter();

    const currentYear = new Date().getFullYear();
    const years = Array.from({length: currentYear - 2015 + 1}, (_, i) => 2015 + i);

    const selectedMake = watch("vehicle_makes");
    const selectedYear = watch("vehicle_year");


    const submitForm = () => {
        router.push(`result/` + selectedMake + `/${selectedYear}`)
        reset();
    }
    return (
        <form onSubmit={handleSubmit(submitForm)}
              className={'flex flex-col gap-8'}>
            <div className={'flex gap-8'}>
                <select
                    className={'h-[4rem] px-4'}
                    {...register('vehicle_makes', {required: true})} >
                    <option value="">Select Make</option>
                    {result.map(mark =>
                        <option key={mark.MakeId} value={mark.MakeId}>
                            {mark.MakeName}
                        </option>)}
                </select>
                <select
                    className={'h-[4rem] px-4'}
                    {...register('vehicle_year', {required: true})}>
                    <option value="">Select Year</option>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>

            </div>
            <div className={'flex flex-col gap-6'}>
                {watch('vehicle_makes') &&
                    <p>Selected vehicle make ID: {watch('vehicle_makes')}</p>
                }
                {watch('vehicle_year') &&
                    <p>Selected vehicle year: {watch('vehicle_year')}</p>
                }
            </div>
            <button type={'submit'} disabled={!isValid}
                    className={'disabled:bg-[#cfdaec] bg-[#9cb9d1] h-[4rem] disabled:text-[#17171794]'}>Next
            </button>
        </form>
    );
};

export {SearchForm};