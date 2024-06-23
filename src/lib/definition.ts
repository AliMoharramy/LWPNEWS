import { EmailConfig } from "next-auth/providers/email";

export interface post {
  id?: string;
  name: string;
  src: string;
  title: string;
  text: string;
  userimage?: string;
  username?: string;
  date?: string;
}
export type clubtable = {
  club: string;
  src: string;
  gp: number;
  w: number;
  d: number;
  l: number;
  a: number;
  gd: number;
  pts: number;
};
export type params = {
  posttitle: string;
};
export type users = {
  id: string;
  product_id: string;
  email: string;
  password: string;
  name: string;
  img: string;
};
