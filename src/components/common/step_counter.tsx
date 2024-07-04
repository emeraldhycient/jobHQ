"use client";
import React, { useState, ReactNode } from 'react';
import { MdPlaylistAddCheckCircle, MdRadioButtonUnchecked } from "react-icons/md";
import { Transition } from '@headlessui/react';
import { nextStepChildProps } from '@/constants/interface';

interface StepProps {
    children: React.ReactElement<nextStepChildProps>[];
    stepClass?: string;
    activeStepClass?: string;
    completedStepClass?: string;
    lineClass?: string;
}

const Step_Counter: React.FC<StepProps> = ({
    children,
    stepClass = '',
    activeStepClass = '',
    completedStepClass = '',
    lineClass = ''
}) => {
    const [currentStep, setCurrentStep] = useState(0);

    const isStepCompleted = (step: number) => step < currentStep;
    const isCurrentStep = (step: number) => step === currentStep;

    const totalSteps = React.Children.count(children);


    const nextStep = () => {
        if (currentStep < children.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    // Enhancing each child with nextStep function and additional properties
    const enhancedChildren = React.Children.map(children, (child, index) => {
        if (React.isValidElement<nextStepChildProps>(child)) {
            return React.cloneElement(child, {
                nextStep: nextStep,
                index: index,
                isCurrentStep: isCurrentStep(index),
                isCompleted: isStepCompleted(index),
            });
        }
        return null;  // Safely ignore invalid elements
    });


    return (
        <div className="flex flex-col items-center w-full">
            <div className="flex items-center justify-center w-full">
                {children.map((_, index) => (
                    <React.Fragment key={index}>
                        <Transition
                            show={true}
                            as="div"
                            className={`flex items-center justify-center ${stepClass}`}
                            enter="transition-opacity duration-500"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity duration-500"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div
                                className={`w-10 h-10 flex items-center justify-center rounded-full text-white cursor-pointer transition-colors duration-300 ease-in-out ${isCurrentStep(index) ? `bg-blue-400 ${activeStepClass}` :
                                        isStepCompleted(index) ? `bg-blue-500 ${completedStepClass}` : 'bg-gray-300'
                                    }`}
                                onClick={() => setCurrentStep(index)}
                            >
                                {isStepCompleted(index) ? (
                                    <MdPlaylistAddCheckCircle className="w-8 h-8" />
                                ) : (
                                    isCurrentStep(index) ? <MdRadioButtonUnchecked className="w-8 h-8" /> : index + 1
                                )}
                            </div>
                        </Transition>
                        {index < children.length - 1 && (
                            <div
                                className={`flex-auto h-0.5 transition-all duration-500 ease-in-out ${lineClass}`}
                                style={{
                                    backgroundColor: isStepCompleted(index) ? '#3b82f6' : '#e5e7eb',
                                    width: '100%',
                                }}
                            ></div>
                        )}
                    </React.Fragment>
                ))}
            </div>
            <div className="mt-10 w-full">
                {enhancedChildren[currentStep]}
            </div>
            {currentStep < totalSteps - 1 && (
                <button className="mt-5 px-4 py-2 rounded bg-blue-500 text-white" onClick={() => setCurrentStep(currentStep + 1)}>
                    Next
                </button>
            )}
        </div>
    );
};

export default Step_Counter;
