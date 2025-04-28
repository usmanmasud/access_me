import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  //   FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "file";
}

const FormField = ({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: FormFieldProps<T>) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="label">{label}</FormLabel>
            <FormControl>
              <Input
                className="input"
                type={type}
                placeholder={placeholder}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default FormField;
