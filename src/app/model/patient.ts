import { country } from "./country";

export class patient{
    id:number;
    firstName:string;
    lastName:string;
    phone:string;
    bDate:Date;
    country_Id:number;
    country:country;
    path:string;
}