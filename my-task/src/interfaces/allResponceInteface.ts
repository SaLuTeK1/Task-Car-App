export interface ICarRes<T>{
    Count:number
    Message:string
    SearchCriteria:string
    Results:T[]
}

export interface IGetMakesForVehicle{
    MakeId:number
    MakeName:string
    VehicleTypeId:number
    VehicleTypeName:string
}

export interface IGetModelsForMakeId{
   Make_ID: number,
   Make_Name: string,
   Model_ID: number,
   Model_Name: string
}