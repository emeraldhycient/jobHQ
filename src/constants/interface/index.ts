export interface nextStepChildProps {
    nextStep: () => void;
    index: number;
    isCurrentStep: boolean;
    isCompleted: boolean;
}
