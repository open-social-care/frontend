"use client"

import { useFormStatus } from "react-dom"

export default function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      disabled={pending}
      className="px-6 py-2 leading-5 text-white transition-colors duration-300 transform bg-teal-500 rounded-lg hover:bg-teal-600 focus:outline-none focus:bg-teal-600 disabled:bg-gray-200"
    >
      Login
    </button>
  )
}
