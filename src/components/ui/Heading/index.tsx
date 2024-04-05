import { twMerge } from "tailwind-merge";

const variants = {
  1: "text-2xl",
  2: "text-xl",
  3: "text-1xl",
};

type HeadingProps = {
  order?: 1 | 2 | 3;
} & React.ComponentPropsWithoutRef<"h1">;

export default function Heading({ order, children, className, ...rest }: HeadingProps) {
  return (
    <h1
      className={twMerge("font-extrabold text-teal-900", variants[order || 1], className)}
      {...rest}
    >
      {children}
    </h1>
  );
}
