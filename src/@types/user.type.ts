export interface CreateUser {
   name: string;
   lastname?: string
   gender: "MALE" | "FEMALE";
   email?: string;
   contact: string;
   password: string;
}