import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { registerWithEmailAndPw } from "@/services/firebase/authentication";
import { useState } from "react";
import { toast } from "sonner";

export function RegisterForm({ className, ...props }) {
  const navigate = useNavigate();

  const [userCred, setUserCred] = useState({});

  const handleRegister = () => {
    registerWithEmailAndPw(userCred).then(() => {
      navigate("/login");
      toast("Registered successfully!");
    });
  };

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      {...props}
      onSubmit={(e) => {
        e.preventDefault(); // Prevent page reload
        handleRegister();
      }}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Create one account here</h1>

        <p className="text-muted-foreground text-sm text-balance">
          Enter your info and create an account
        </p>
      </div>

      <div className="grid gap-3">
        <div className="grid gap-3">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Enter your name"
            onChange={(e) =>
              setUserCred((p) => ({ ...p, name: e.target.value }))
            }
          />
        </div>

        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            onChange={(e) =>
              setUserCred((p) => ({ ...p, email: e.target.value }))
            }
          />
        </div>

        <div className="grid gap-3">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            onChange={(e) =>
              setUserCred((p) => ({ ...p, password: e.target.value }))
            }
          />
        </div>
        <Button
          type="submit"
          className="w-full"
          disabled={Object.values(userCred).length !== 3}
        >
          Register
        </Button>
      </div>

      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a
          onClick={() => navigate("/login")}
          className="underline underline-offset-4 cursor-pointer"
        >
          Sign In
        </a>
      </div>
    </form>
  );
}
