"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SellerSchema } from "@/lib/validations/auth";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRouter } from "next/navigation";

export default function SellerSignup() {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(SellerSchema),
    defaultValues: {
      name: "",
      organization: "",
      location: "",
      category: "tech",
      experience: "intermediate",
      password: "",
      confirmPassword: "",
    }
  });

  const onSubmit = (values: any) => {
    // This is the object that will eventually send to the API
    console.log("SUCCESS! Seller Object Generated:", values);
    alert("Form submitted successfully! Check console for the object.");
    router.push("/login");
  };

  return (
    <div className="flex items-center justify-center bg-neutral-900 min-h-screen">
        
        <div className="max-w-2xl mx-auto p-8 bg-white border rounded-xl shadow-sm">
        <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold">Complete your Seller Profile</h2>
            <p className="text-muted-foreground">Tell us about your business</p>
        </div>

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit, (err) => console.log(err))} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="John Doe" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="organization" render={({ field }) => (
                <FormItem><FormLabel>Business Name</FormLabel><FormControl><Input placeholder="Acme Inc" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <FormField control={form.control} name="location" render={({ field }) => (
                    <FormItem><FormLabel>Location</FormLabel><FormControl><Input placeholder="e.g. New York, USA" {...field} /></FormControl><FormMessage /></FormItem>
                )} />

                <FormField
                    control={form.control}
                    name="certification"
                    render={({ field: { value, onChange, ...fieldProps } }) => (
                        <FormItem>
                        <FormLabel>Factory Certification (PDF/Doc)</FormLabel>
                        <FormControl>
                            <Input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={(event) => {
                                const file = event.target.files?.[0];
                                onChange(file); // Send the file object to React Hook Form
                            }}
                            {...fieldProps}
                            />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField control={form.control} name="factorycategory" render={({ field }) => (
                <FormItem>
                    <FormLabel>Factory Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl><SelectTrigger><SelectValue placeholder="Select Factory Category" /></SelectTrigger></FormControl>
                    <SelectContent>
                        <SelectItem value="apparel">Apparel</SelectItem>
                        <SelectItem value="sportswear">Sportswear/Activewear</SelectItem>
                        <SelectItem value="home-textiles">Home Textiles</SelectItem>
                        <SelectItem value="knitted-goods">Knitted Goods</SelectItem>
                    </SelectContent>
                    </Select>
                    <FormMessage />
                </FormItem>
                )} />

                <FormField control={form.control} name="fabrictype" render={({ field }) => (
                <FormItem>
                    <FormLabel>Fabric Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl><SelectTrigger><SelectValue placeholder="Select Fabric Type" /></SelectTrigger></FormControl>
                    <SelectContent>
                        <SelectItem value="cotton">Cotton/Natural Fiber Mills</SelectItem>
                        <SelectItem value="polyester">Polyester/Synthetic Mills</SelectItem>
                        <SelectItem value="wool">Wool</SelectItem>
                        <SelectItem value="silk">Silk</SelectItem>
                    </SelectContent>
                    </Select>
                    <FormMessage />
                </FormItem>
                )} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t pt-6">
                <FormField control={form.control} name="password" render={({ field }) => (
                <FormItem><FormLabel>Password</FormLabel><FormControl><Input type="password" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="confirmPassword" render={({ field }) => (
                <FormItem><FormLabel>Confirm Password</FormLabel><FormControl><Input type="password" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
            </div>

            <Button type="submit" className="w-full h-12 text-lg">Create Seller Account</Button>
            </form>
        </Form>
        </div>
    </div>
  );
}