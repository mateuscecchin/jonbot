import { ComponentProps } from "react";

export function Title({ className, ...rest }: ComponentProps<"h1">) {
  return (
    <h1 className={"text-2xl font-semibold mb-2 " + className} {...rest} />
  );
}
