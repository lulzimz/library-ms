import { RegisterForm } from "@/components/register-form";
import LibraryPng from "../assets/images/library.png";

export default function Register() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="relative hidden bg-muted lg:block">
        <img
          src={LibraryPng}
          alt="Image"
          className="h-full w-full object-contain"
        />
      </div>

      <div className="flex flex-1 items-center justify-center">
        <RegisterForm />
      </div>
    </div>
  );
}
