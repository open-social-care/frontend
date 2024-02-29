import { twMerge } from "tailwind-merge";

import Container from "./Container";
import Input from "./Input";
import Button from "./Button";

export default function Form({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"form">) {
  return (
    <form
      className={twMerge(
        "flex flex-col",
        className,
      )}
      {...rest}
    >
      {children}
    </form>
  );
}

Form.Container = Container;
Form.Input = Input;
Form.Button = Button;
