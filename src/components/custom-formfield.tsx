import {
  Control,
  ControllerRenderProps,
  FieldValues,
  FieldPath,
  Path,
} from "react-hook-form";
import { CalendarIcon } from "lucide-react";
import { ReactNode } from "react";
import { format } from "date-fns";

interface Props<T extends FieldValues> {
  name: FieldPath<T>;
  label: string;
  placeholder?: string;
  options?: any[];
  description?: string;
  control: Control<T>;
}

interface ChildrenProps<T extends FieldValues> extends Props<T> {
  children: (field: ControllerRenderProps<T, Path<T>>) => ReactNode;
}

const CustomFormField = () => {
  return <div></div>;
};

const CustomFormSelect = () => {
  return <div></div>;
};

const CustomFormDatePicker = () => {
  return <div></div>;
};

export { CustomFormField, CustomFormSelect, CustomFormDatePicker };
// Named export
