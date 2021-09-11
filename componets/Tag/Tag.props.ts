import { ReactNode } from "react";
import { colors, sizes } from './index';

export interface TagProps{
    children: ReactNode;
    color: keyof typeof colors;
    size: keyof typeof sizes;
    className?: string,
}