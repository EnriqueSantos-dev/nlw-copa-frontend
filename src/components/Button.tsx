import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ ...props }: Props) {
  return (
    <button
      className="bg-[#F7DD43] text-[#09090A] font-bold text-sm px-6 py-[21px] hover:brightness-90 uppercase rounded whitespace-nowrap transition-colors"
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;
