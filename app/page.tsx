import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { authOption } from "./utils/auth";

export default async function Home() {
  const session = await getServerSession(authOption);

  return (
    <div>
      <Button>Hello From Chadcn</Button>
      <h1>{session?.user?.name}</h1>
    </div>
  );
}
