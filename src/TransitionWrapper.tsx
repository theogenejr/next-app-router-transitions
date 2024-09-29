"use client";

import React, { ReactNode } from "react";
import PageTransition, { PageTransitionProps } from "./PageTransition";

type TransitionWrapperProps = Omit<PageTransitionProps, "children"> & {
  children: ReactNode;
};

export default function TransitionWrapper({
  children,
  ...props
}: TransitionWrapperProps) {
  return <PageTransition {...props}>{children}</PageTransition>;
}
