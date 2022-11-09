import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const TextField = React.forwardRef<HTMLInputElement, Props>(
  ({ ...props }, ref) => {
    return (
      <input
        type="text"
        className="bg-[#202024] px-6 py-4 border border-[#323238] w-full rounded placeholder:text-gray-200 text-sm text-gray-100"
        {...props}
        ref={ref}
      />
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
