"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { LoginSchema } from "@/lib/validations/auth";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function LoginPage() {
  const router = useRouter();
  
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: { email: "", password: "" }
  });

  const onSubmit = (values: any) => {
    console.log("Login Data Sent to 'Backend':", values);

    // MOCK LOGIC: 
    // In a real app, your API would return: { user: { role: 'buyer' } }
    if (values.email.includes("buyer")) {
      router.push("/buyer-dashboard");
    } else if (values.email.includes("seller")) {
      router.push("/seller-dashboard");
    } else {
      // Simulate an error if email doesn't contain 'buyer' or 'seller'
      form.setError("root", { 
        message: "Invalid credentials. Use 'buyer@test.com' or 'seller@test.com' for this demo." 
      });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white border rounded-xl shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-center">Login to MarketPlace</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit, (e) => console.log("Errors:", e))} className="space-y-4">
          {form.formState.errors.root && (
            <Alert variant="destructive">
              <AlertDescription>{form.formState.errors.root.message}</AlertDescription>
            </Alert>
          )}

          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl><Input placeholder="buyer@test.com" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="password" render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl><Input type="password" placeholder="********" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <Button type="submit" className="w-full h-11">Sign In</Button>
        </form>
      </Form>
    </div>
  );
}