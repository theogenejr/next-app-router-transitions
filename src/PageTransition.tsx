import React, { ReactNode, useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { usePathname } from "next/navigation";

export type TransitionType = "block" | "multiBlock" | "blinds";

export interface PageTransitionProps {
  children: ReactNode;
  transitionType?: TransitionType;
  backgroundColor?: string;
  duration?: number;
  ease?: string | number[];
  zIndex?: number;
}

const transitions: Record<TransitionType, Variants> = {
  block: {
    initial: { height: "100%" },
    exit: { height: 0 },
  },
  multiBlock: {
    initial: { y: 0 },
    exit: { y: "-100%" },
  },
  blinds: {
    initial: { scaleY: 1 },
    exit: { scaleY: 0 },
  },
};

export default function PageTransition({
  children,
  transitionType = "block",
  backgroundColor = "black",
  duration = 0.75,
  ease = "easeInOut",
  zIndex = 50,
}: PageTransitionProps) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  useEffect(() => {
    if (pathname !== prevPathname) {
      setIsTransitioning(true);
      setPrevPathname(pathname);
    }
  }, [pathname, prevPathname]);

  const handleExitComplete = () => {
    setIsTransitioning(false);
  };

  const commonProps = {
    initial: "initial",
    animate: "exit",
    exit: "initial",
    transition: { duration, ease },
    className: "fixed inset-0 pointer-events-none",
    style: { backgroundColor, zIndex },
  };

  const renderTransitionElement = () => {
    switch (transitionType) {
      case "block":
        return (
          <>
            <motion.div
              key={`block-top-${pathname}`}
              variants={transitions.block}
              {...commonProps}
              className={`${commonProps.className} top-0 left-0 right-0 h-1/2 origin-bottom`}
            />
            <motion.div
              key={`block-bottom-${pathname}`}
              variants={transitions.block}
              {...commonProps}
              className={`${commonProps.className} bottom-0 left-0 right-0 h-1/2 origin-top`}
            />
          </>
        );
      case "multiBlock":
        return (
          <>
            {[0, 1, 2, 3].map((index) => (
              <motion.div
                key={`multiBlock-${index}-${pathname}`}
                variants={transitions.multiBlock}
                {...commonProps}
                transition={{ ...commonProps.transition, delay: index * 0.1 }}
                className={`${commonProps.className} w-1/4 h-full`}
                style={{ ...commonProps.style, left: `${index * 25}%` }}
              />
            ))}
          </>
        );
      case "blinds":
        return (
          <>
            {[0, 1, 2, 3, 4].map((index) => (
              <motion.div
                key={`blinds-${index}-${pathname}`}
                variants={transitions.blinds}
                {...commonProps}
                transition={{ ...commonProps.transition, delay: index * 0.1 }}
                className={`${commonProps.className} w-1/5 h-full origin-top`}
                style={{ ...commonProps.style, left: `${index * 20}%` }}
              />
            ))}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {children}
      <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
        {isTransitioning && renderTransitionElement()}
      </AnimatePresence>
    </>
  );
}
