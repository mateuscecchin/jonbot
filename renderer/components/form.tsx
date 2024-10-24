import { FieldValues, UseFormReturn } from "react-hook-form";
import { Form as FormShadcn } from "./form-shadcn";
import { ComponentProps, PropsWithChildren } from "react";

export function Form({
  form,
  onSubmit,
  children,
  ...rest
}: {
  form: UseFormReturn<any, any, undefined>;
  onSubmit: (data: any) => any;
} & ComponentProps<"form">) {
  return (
    <FormShadcn {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} {...rest}>
        {children}
      </form>
    </FormShadcn>
  );
}
