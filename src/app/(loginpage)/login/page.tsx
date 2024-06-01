"use client";
//import { useRouter } from "next/navigation";
import { FormEvent } from "react";
export default function LoginPage() {
  //const router = useRouter();
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(event.target);
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    //console.log(formData);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="password" />
        <button type="submit">CLick on me to send</button>
      </form>
    </div>
  );
}
