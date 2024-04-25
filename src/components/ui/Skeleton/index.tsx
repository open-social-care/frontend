import { Suspense } from "react";
import { twMerge } from "tailwind-merge";

type SkeletonProps = React.ComponentPropsWithoutRef<"div"> & {
  length?: number;
};

export default function Skeleton({ length, className, children, ...rest }: SkeletonProps) {
  return (
    <Suspense
      fallback={
        <>
          {Array.from({ length: length || 1 }).map((_, index) => (
            <div
              key={index}
              className={twMerge(
                "mx-auto mt-1 flex h-96 w-full animate-pulse overflow-hidden rounded-lg border bg-white shadow-md",
                className,
              )}
              {...rest}
            />
          ))}
        </>
      }
    >
      {children}
    </Suspense>
  );
}
