"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BuyerSchema } from "@/lib/validations/auth";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function BuyerSignup() {
  const form = useForm({
    resolver: zodResolver(BuyerSchema),
    defaultValues: { name: "", organization: "", email: "", password: "", confirmPassword: "" }
  });

  const onSubmit = (values: any) => {
    console.log("Buyer Data Object:", values);
  };


  return (

    <div className="flex items-center justify-center bg-gray-900 min-h-screen">
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Sign up to hire talent</h2>
            <Button variant="outline" className="w-full mb-4">Continue with Google</Button>
            
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit, (err) => console.log(err))} className="space-y-4">
                <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="organization" render={({ field }) => (
                    <FormItem><FormLabel>Organization (Optional)</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                )} />

                <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                {/* ... Add Email, Password, Confirm Password fields similarly ... */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t pt-6">
                    <FormField control={form.control} name="password" render={({ field }) => (
                    <FormItem><FormLabel>Password</FormLabel><FormControl><Input type="password" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="confirmPassword" render={({ field }) => (
                    <FormItem><FormLabel>Confirm Password</FormLabel><FormControl><Input type="password" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                </div>
                <Button type="submit" className="w-full">Create my account</Button>
                </form>
            </Form>
        </div>
    </div>
  );
}