"use client";

// import { ReactNode } from "react";
import {Button as ButtonAntd, ButtonProps} from "antd";

// interface ButtonProps {
//   children: ReactNode;
//   className?: string;
//   appName: string;
// }

export const Button = (props: ButtonProps) => {
  return (
    <ButtonAntd {...props}/>
  );
};
