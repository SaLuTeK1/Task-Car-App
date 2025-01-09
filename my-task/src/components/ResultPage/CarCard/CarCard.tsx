'use client'

import { FC } from 'react'
import { IGetModelsForMakeId } from '@/interfaces/allResponceInteface'
import { useRouter } from 'next/navigation'

interface IProps {
  car_info: IGetModelsForMakeId
}

const CarCard: FC<IProps> = ({ car_info }) => {
  const {Make_Name, Model_Name, Model_ID } = car_info

  const router = useRouter()

  const showAllInfo = () => {
    router.push(`/details/${Model_ID}`)
  }

  return (
    <div onClick={showAllInfo}
         className={'flex flex-col justify-between px-[1rem] py-[1.5rem] h-[18.75rem] w-full bg-[#094d7420] shadow-custom hover:cursor-pointer transition-transform transform hover:scale-105 hover:translate-y-[-10px] hover:shadow-2xl'}>
      <div>
        <p>Brand: {Make_Name}</p>
        <p>Model: {Model_Name}</p>
      </div>
      <h5 className={'text-[.8rem]'}>
        To see more info, click on card
      </h5>
    </div>
  )
}

export { CarCard }