import { ReactNode } from "react";

export type RouteProps = {
  children: ReactNode;
};

export type Contact = {
  _id: string;
  phone: string;
  name: string;
};

export type Contacts = Contact[];
