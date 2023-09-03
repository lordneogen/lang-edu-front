import { type } from "os";
import { Sub } from "./Sub";

export interface OpenCardProps {
    name:string;
    video?: string;
    text?: string;
    texttr?: string;
    onExit: () => void;
    time?: number;
    setTime?: (a: number) => void;
    subs?: Sub[];
}