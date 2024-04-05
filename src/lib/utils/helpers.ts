import { MuscleGroup } from "@/types";

/*
Function returns an array of string(s) of the selected values from
the FormData CheckBoxGroup.
The name prop value of the CheckboxGroup must equal the name param
of this function.
*/
export const getSelectedCheckboxesFromFormData = (
  formData: FormData,
  name: string
): MuscleGroup[] => {
  const selectedCheckboxes: MuscleGroup[] = []; // Todo: Make this a generic type

  for (const [key, value] of formData.entries()) {
    if (key.startsWith(`${name}-`) && value) {
      const muscle = key.split("-")[1] as MuscleGroup;
      selectedCheckboxes.push(muscle);
    }
  }

  return selectedCheckboxes;
};

/** Capitalizes the first letter of a string. */
export const capitalize = (string: string): string =>
  string.charAt(0).toUpperCase() + string.slice(1);

/** Sleeps for a given amount of time in milliseconds. */
export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/** Converts object keys from snake case to camel case. */
export const snakeCaseToCamelCase = (object: Record<string, any>) => {
  const newObject: Record<string, any> = {};

  Object.keys(object).forEach((key) => {
    if (key.includes("_")) {
      const camelCaseKey = key.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
      newObject[camelCaseKey] = object[key];
    } else {
      newObject[key] = object[key];
    }
  });

  return newObject;
};
