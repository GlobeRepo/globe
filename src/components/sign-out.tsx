import { signOut } from "@/auth";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" }); // Redirect to the launch page after signing out
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
  );
}
