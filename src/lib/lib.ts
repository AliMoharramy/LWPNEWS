"use server";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { fetchUsers } from "./data";

const secretKey = "secr7e0d44fd473002f1c42167459001140eet";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setIssuedAt()
    .setExpirationTime("10 hours from now")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}
export async function login(formData: FormData) {
  const user = await fetchUsers(String(formData.get("email")));

  if (user && user.password === formData.get("password")) {
    const expires = new Date(Date.now() + 1000 * 36000);
    const session = await encrypt({ user, expires });
    cookies().set("session", session, { expires, httpOnly: true });
    redirect(".");
  }
}
export async function logout() {
  cookies().set("session", "", { expires: new Date(0) });
}
export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}
// `CREATE TABLE lwpusers(
//    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//    product_id INT NOT NULL,
//    email VARCHAR(50) NOT NULL,
//    password VARCHAR(250) NOT NULL,
//    name VARCHAR(40) NOT NULL,
//    img TEXT NOT NULL
//  )`;
// `INSERT INTO lwpusers (user_id, email, password, name, img)
// VALUES ('1', 'LouisHobregts@gmail.com', 'LH1997', 'Louis Hobregts', '01.jpg'); `
