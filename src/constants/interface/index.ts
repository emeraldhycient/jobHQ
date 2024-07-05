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