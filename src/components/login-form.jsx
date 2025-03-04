import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import useCurrentUser from "@/store/currentUserStore";

export function LoginForm({ className, ...props }) {
  const navigate = useNavigate();

  const { setUser } = useCurrentUser();

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>

        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>

      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>

        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>

          <Input id="password" type="password" required />
        </div>

        <Button
          type="submit"
          className="w-full"
          onClick={() =>
            setUser({
              userId: 1,
              name: "shadcn",
              email: "m@example.com",
            })
          }
        >
          Login
        </Button>
      </div>

      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a
          onClick={() => navigate("/register")}
          className="underline underline-offset-4 cursor-pointer"
        >
          Sign up
        </a>
      </div>
    </form>
  );
}
