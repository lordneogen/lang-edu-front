import { type } from "os";
import { Sub } from "./Sub";

export interface CardProps {
    name:string;
    photo?: string;
    text?: string;
    texttr?: string;
    setfull?: boolean;
    subs?: Sub[];
    time?:number;
}