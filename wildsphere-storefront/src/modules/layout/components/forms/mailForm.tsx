"use client"

import React from "react"
import { useForm, ValidationError } from "@formspree/react"

export default function MailForm() {
  const [state, handleSubmit] = useForm("xrbzdzzp") // Asegúrate de que este ID es correcto.
  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }
  return (
    <form
      method="POST"
      onSubmit={handleSubmit}
      className="flex flex-col text-left w-full"
    >
      <label htmlFor="email" className="mb-2 text-ui-fg-subtle text-sm">
        Recive Updates:
      </label>
      <input
        type="email"
        name="email"
        title="Enter Email"
        placeholder="Email Address"
        className="border-b border-black p-2"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <div className="w-full flex justify-end">
        <button
          type="submit"
          title="Submit Email"
          className="w-fit text-sm p-2"
          disabled={state.submitting}
        >
          Submit
        </button>
      </div>
      <label htmlFor="email" className="mt-4 mb-2 text-ui-fg-subtle text-sm">
      For inquiries, email us at: <a href="mailto:email@wildsg.com" className="underline">email@wildsg.com</a>
      </label>
    </form>
  )
}
