import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

export const cn = (...args) => clsx(twMerge(...args));
