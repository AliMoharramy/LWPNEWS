"use server";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

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
  const user = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const expires = new Date(Date.now() + 1000 * 36000);
  const session = await encrypt({ user, expires });
  cookies().set("session", session, { expires, httpOnly: true });
}
export async function logout() {
  cookies().set("session", "", { expires: new Date(0) });
}
export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}
