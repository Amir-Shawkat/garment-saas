"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Factory, UserCircle } from "lucide-react"; // Optional icons
import Link from "next/link";
import { cn } from "@/lib/utils"; // Shadcn utility for merging classes

export default function SignupSelection() {
  const [role, setRole] = useState<"buyer" | "seller">("buyer");
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] w-full max-w-3xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Join as a buyer or merchandiser
      </h1>

      <RadioGroup
        defaultValue="buyer"
        onValueChange={(v) => setRole(v as any)}
        className="flex flex-col md:flex-row gap-6 w-full items-center justify-center"
      >
        {/* Buyer Option */}
        <div className="relative">
          <RadioGroupItem value="buyer" id="buyer" className="sr-only" />
          <Label
            htmlFor="buyer"
            className={cn(
              "flex flex-col items-center justify-between h-full p-6 cursor-pointer rounded-xl border-2 bg-card transition-all hover:bg-accent/50",
              role === "buyer" ? "border-primary ring-1 ring-primary" : "border-muted"
            )}
          >
            <div className="flex justify-between w-full mb-4">
              <UserCircle className="w-8 h-8 text-primary" />
              <div className={cn(
                "w-6 h-6 rounded-full border-2 flex items-center justify-center",
                role === "buyer" ? "border-primary bg-primary" : "border-muted"
              )}>
                {role === "buyer" && <div className="w-2 h-2 rounded-full bg-white" />}
              </div>
            </div>
            <span className="text-xl font-semibold text-center leading-tight">
              I’m a buyer, hiring for a project
            </span>
          </Label>
        </div>

        <div className="flex items-center h-[100px] w-[100px] justify-center bg-gray-900 text-white rounded-full animate-bounce p-4">
          <span className="text-lg font-medium text-center">Select One</span>
        </div>

        {/* Seller Option */}
        <div className="relative">
          <RadioGroupItem value="seller" id="seller" className="sr-only" />
          <Label
            htmlFor="seller"
            className={cn(
              "flex flex-col items-center justify-between h-full p-6 cursor-pointer rounded-xl border-2 bg-card transition-all hover:bg-accent/50",
              role === "seller" ? "border-primary ring-1 ring-primary" : "border-muted"
            )}
          >
            <div className="flex justify-between w-full mb-4">
              <Factory className="w-8 h-8 text-primary" />
              <div className={cn(
                "w-6 h-6 rounded-full border-2 flex items-center justify-center",
                role === "seller" ? "border-primary bg-primary" : "border-muted"
              )}>
                {role === "seller" && <div className="w-2 h-2 rounded-full bg-white" />}
              </div>
            </div>
            <span className="text-xl font-semibold text-center leading-tight">
              I’m a merchandiser, looking for work
            </span>
          </Label>
        </div>
      </RadioGroup>

      <div className="mt-10 flex flex-col items-center gap-4 w-full">
        <Button 
          onClick={() => router.push(`/signup/${role}-signup`)} 
          className="w-full max-w-xs h-12 text-lg font-medium"
        >
          {role === "buyer" ? "Join as a Buyer" : "Apply as a Merchandiser"}
        </Button>

        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:underline font-medium">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}