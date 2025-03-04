import { LoginForm } from "@/components/login-form";
import LibraryPng from "../assets/images/library.png";

export default function Login() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-1 items-center justify-center">
        <LoginForm />
      </div>

      <div className="relative hidden bg-muted lg:block">
        <img
          src={LibraryPng}
          alt="Image"
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
}
