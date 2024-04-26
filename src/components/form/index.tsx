import { twMerge } from "tailwind-merge";

import Button from "./Button";
import Container from "./Container";
import FlashMessage from "./FlashMessage";
import Input from "./Input";
import Select from "./Select";

export default function Form({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"form">) {
  return (
    <form
      className={twMerge("flex flex-col", className)}
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
Form.Select = Select;
