import { twMerge } from "tailwind-merge";

export default function NavbarHeader({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={twMerge(
        "flex h-16 items-center justify-between border-b border-gray-200 bg-white",
        className,
      )}
      {...rest}
    >
      <div className="flex items-center px-4 text-lg">
        Social Care
      </div>

      <div className="mr-4 mt-0 flex items-center">
        <button
          type="button"
          className="mx-4 flex items-center focus:outline-none"
          aria-label="toggle profile dropdown"
        >
          <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-gray-400">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              className="h-full w-full object-cover"
              alt="avatar"
            />
          </div>

          <h3 className="mx-2 text-gray-700">
            Usuário
          </h3>
        </button>

        <button className="mx-4 text-gray-500 focus:text-gray-700 focus:outline-none md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
