import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { clubtable, users } from "./definition";

export async function fetchClubTable() {
  noStore();
  try {
    const data = await sql<clubtable>`
        SELECT clubtable.club, clubtable.src, clubtable.gp, clubtable.w, clubtable.d, clubtable.l, clubtable.a, clubtable.gd, clubtable.pts
        FROM clubtable
        `;
    const allclubs = data.rows.map((users) => ({
      ...users,
    }));
    return allclubs;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the users.");
  }
}
export async function fetchUsers(email: string) {
  noStore();
  try {
    const user = await sql<users>`
        SELECT * FROM lwpusers WHERE email=${email}
        `;
    return user.rows[0];
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}
