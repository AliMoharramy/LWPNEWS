"use client";

import { authenticate } from "@/lib/action";
import { useFormState } from "react-dom";

export default function LoginPage() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  return (
    <div>
      <form
        action={dispatch}
        className="bg-Gray flex flex-col w-1/2 m-auto h-lvh items-center justify-center [&>input]:p-2 [&>input]:m-1"
      >
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
        <label htmlFor="password" className="mt-4">
          password
        </label>
        <input type="password" name="password" />
        <button
          type="submit"
          className="m-4 bg-Black50 text-White p-2 rounded-xl"
        >
          Submit
        </button>
        {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
      </form>
    </div>
  );
}
