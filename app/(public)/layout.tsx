import Navbar from "@/components/Navbar";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar /> 
      <main>{children}</main>
      {/* You could also put your public Footer here */}
    </>
  );
}