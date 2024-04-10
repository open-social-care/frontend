export default function Skeletons() {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="mx-auto mt-2 flex w-full animate-pulse overflow-hidden rounded-lg border bg-white shadow-md"
        >
          <div className="p-4 md:p-4">
            <h1 className="h-3 w-48 rounded-lg bg-gray-200 "></h1>

            <p className="mt-2 h-3 w-32 rounded-lg bg-gray-200 "></p>

            <div className="mt-6 h-5 w-10 rounded-lg bg-gray-200 "></div>
          </div>
        </div>
      ))}
    </>
  );
}
