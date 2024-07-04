import * as React from "react";
import { IconType } from "react-icons";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: IconType;
  rightIcon?: IconType;
  onLeftIconClick?: React.MouseEventHandler;
  onRightIconClick?: React.MouseEventHandler;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, leftIcon: LeftIcon, rightIcon: RightIcon, onLeftIconClick, onRightIconClick, ...props }, ref) => {
    return (
      <div className={cn(
        "flex items-center w-full rounded-xl border border-gray-100 bg-transparent dark:border-gray-200",
        className
      )}>
        {LeftIcon && (
          <div className="ml-3 p-2 cursor-pointer text-gray-500 dark:text-gray-400" onClick={onLeftIconClick}>
            <LeftIcon />
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex-1 bg-transparent py-2 text-sm placeholder:text-gray-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-gray-400",
            LeftIcon ? "pl-2" : "px-3", // Adjust left padding if left icon is present
            RightIcon ? "pr-2" : "px-3", // Adjust right padding if right icon is present
            "h-12 file:border-0 file:bg-transparent file:text-sm file:font-medium"
          )}
          ref={ref}
          {...props}
        />
        {RightIcon && (
          <div className="mr-3 p-2 cursor-pointer text-gray-500 dark:text-gray-400" onClick={onRightIconClick}>
            <RightIcon />
          </div>
        )}
      </div>
    )
  }
);

Input.displayName = "Input";

export { Input }
