import { logout } from "@/lib/lib";
export default async function LogOut() {
  return (
    <form
      action={async () => {
        "use server";
        await logout();
      }}
    >
      <button>Logout</button>
    </form>
  );
}
