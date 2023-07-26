import { ReactElement } from "react";
import { useImmer } from "use-immer";

export function useMultiStepForm(steps: ReactElement[]) {
  const [currStep, setCurrStep] = useImmer(1);

  function next() {
    setCurrStep(i => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }
  function back() {
    setCurrStep(i => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  function goto(index: number) {
    setCurrStep(index);
  }

  return {
    currStep,
    step: steps[currStep],
    steps,
    goto,
    next,
    back,
  };
}
