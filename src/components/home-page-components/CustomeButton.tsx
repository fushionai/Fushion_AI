import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const BaseButton: React.FC<BaseButtonProps> = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 min-w-20 h-10 gap-2 [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none data-[hover=true]:opacity-hover py-2 px-4 font-roboto font-bold text-[24px] text-center rounded-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

interface ColoredButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const BlueButton: React.FC<ColoredButtonProps> = ({ children, ...props }) => {
  return (
    <BaseButton className="bg-primaryBlue text-primaryWhite" {...props}>
      {children}
    </BaseButton>
  );
};

export const WhiteButton: React.FC<ColoredButtonProps> = ({ children, ...props }) => {
  return (
    <BaseButton
      className="border border-darkBlue bg-primaryWhite text-darkBlue"
      {...props}
    >
      {children}
    </BaseButton>
  );
};