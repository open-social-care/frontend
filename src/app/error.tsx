"use client"; // Error components must be Client Components

import { t } from "@/lang";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.error(error);
    }
  }, [error]);

  return (
    <div>
      <h2>{t("errors.generic_next_error")}</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        {t("errors.generic_next_error_try_again")}
      </button>
    </div>
  );
}
