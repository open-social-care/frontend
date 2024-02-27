import React, { FormEvent } from "react";

export default function page() {
  async function onSubmit(formData: FormData) {
    "use server";

    console.log(formData.getAll("emailAddress"));

    // const response = await fetch('/api/submit', {
    //   method: 'POST',
    //   body: formData,
    // })

    // // Handle response if necessary
    // const data = await response.json()
    // // ...
  }

  return (
    <div>
      <form action={onSubmit}>
        <div className="grid grid-cols-1 gap-6 mt-4">
          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="emailAddress"
            >
              Email Address
            </label>
            <input
              id="emailAddress"
              name="emailAddress"
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
