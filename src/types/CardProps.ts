import { type } from "os";
import { Sub } from "./Sub";

export interface CardProps {
    photo?: string;
    text?: string;
    texttr?: string;
    setfull?: boolean;
    subs?: Array<Sub>;
}