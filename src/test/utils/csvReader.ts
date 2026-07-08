import path from "path";
import fs from 'fs'
import { parse } from "csv-parse/sync";
export interface RegisterData{
    firstName:string,
    lastName:string,
    email:string,
    password:string,
    retypePassword:string
}
export function readRegisterData():RegisterData[]{
    const filepath =path.resolve(__dirname,'../test-data/registerData.csv')
    const filecontent=fs.readFileSync(filepath,'utf-8');
    return parse(filecontent,{
        columns:true,
        skip_empty_lines:true,
        trim:true
    }) as RegisterData[];
}