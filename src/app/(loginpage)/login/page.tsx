import { redirect } from "next/navigation";
import { login, getSession, logout } from "@/lib/lib";
export default async function LoginPage() {
  const session = await getSession();
  console.log(session);
  return (
    <div>
      <form
        action={async (formData) => {
          "use server";
          await login(formData);
        }}
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
      </form>
      <form
        action={async (formData) => {
          "use server";
          await logout();
        }}
      >
        <button
          type="submit"
          className="m-4 bg-Black50 text-White p-2 rounded-xl"
        >
          log out
        </button>
      </form>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
