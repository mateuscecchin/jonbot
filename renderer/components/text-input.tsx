import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form-shadcn";
import { Input, InputProps } from "./input";

export function TextField({
  description,
  label,
  name,
  className,
  ...rest
}: {
  label: string;
  description?: string;
} & InputProps) {
  const { control } = useFormContext();
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...field} {...rest} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
