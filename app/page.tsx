import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

/**
 * Routes authenticated users to the editor and unauthenticated users to sign-in.
 */
export default async function Home() {
  const { userId } = await auth();

  redirect(userId ? "/editor" : "/sign-in");
}
