import { useEffect, useState } from "react";

const getCssVariable = (
  name: string,
  element: HTMLElement = document.documentElement
): string => {
  return getComputedStyle(element).getPropertyValue(name).trim();
};

export const useThemeVariable = (variableName: string) => {
  const [value, setValue] = useState(() => getCssVariable(variableName));

  useEffect(() => {
    const updateValue = () => {
      setValue(getCssVariable(variableName));
    };

    const observer = new MutationObserver(updateValue);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    updateValue();

    return () => observer.disconnect();
  }, [variableName]);

  return value;
};
