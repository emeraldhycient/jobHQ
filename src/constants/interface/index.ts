import { ReactNode } from "react";
import { IconType } from "react-icons";

export interface nextStepChildProps {
    nextStep: () => void;
    index: number;
    isCurrentStep: boolean;
    isCompleted: boolean;
}


export interface SelectableOptionProps {
    label: string;
    selected?: boolean;
    onSelect?: () => void;
}


export interface SidebarItem {
    path: string;
    icon: IconType | any;
    label: string;
}