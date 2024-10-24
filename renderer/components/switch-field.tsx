import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel } from "./form-shadcn";
import { Switch } from "./switch";
import { ComponentProps } from "react";

export function SwitchField({
  name,
  label,
  ...rest
}: ComponentProps<typeof Switch> & { label: string }) {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={
            "flex flex-col items-center justify-center " + rest.className
          }
        >
          <FormLabel className="text-base">{label}</FormLabel>
          <FormControl>
            <Switch
              checked={field.value}
              onCheckedChange={field.onChange}
              {...rest}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
