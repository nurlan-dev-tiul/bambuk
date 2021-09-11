import { ReactNode } from "react";
import { colors, sizes } from './index';

export interface ButtonProps{
    children: ReactNode;
    color: keyof typeof colors;
    size: keyof typeof sizes;
    onClick?: () => void;
    className?: string,
}