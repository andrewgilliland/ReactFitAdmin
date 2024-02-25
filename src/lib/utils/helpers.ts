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

export const capitalize = (string: string): string =>
  string.charAt(0).toUpperCase() + string.slice(1);
