import React from "react"

export default function mailForm() {
  return (
    <form className="flex flex-col text-left w-full">
      <label htmlFor="email" className="mb-2 text-ui-fg-subtle text-sm">Recive Updates:</label>
      <input
        type="email"
        title="Enter Email"
        placeholder="Email Address"
        className="border-b border-black p-2"
        required
      />
      <div className="w-full flex justify-end">
        <button
          type="submit"
          title="Submit Email"
          className="w-fit text-sm p-2"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
