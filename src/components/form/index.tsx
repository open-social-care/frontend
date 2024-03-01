import { twMerge } from "tailwind-merge";

import Container from "./Container";
import Input from "./Input";
import Button from "./Button";
import FlashMessage from "./FlashMessage";

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
Form.FlashMessage = FlashMessage;
Form.Input = Input;
Form.Button = Button;
