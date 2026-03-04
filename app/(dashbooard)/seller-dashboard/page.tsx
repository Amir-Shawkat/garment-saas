import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SellerDashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Freelancer Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening with your projects.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-primary text-primary-foreground">
          <CardHeader><CardTitle className="text-sm font-medium">Total Earnings</CardTitle></CardHeader>
          <CardContent><p className="text-2xl font-bold">$4,800</p></CardContent>
        </Card>
        {/* Add more stat cards here */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-xl font-semibold">Recommended for you</h3>
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="flex justify-between mb-2">
                  <h4 className="font-bold text-lg text-primary">Full-Stack Next.js Developer Needed</h4>
                  <Badge variant="secondary">$50/hr</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Looking for an expert to help build a marketplace platform using Shadcn and Tailwind...
                </p>
                <div className="flex gap-2">
                  <Badge>Next.js</Badge>
                  <Badge>TypeScript</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">My Profile</h3>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4" />
              <p className="font-bold">John Seller</p>
              <p className="text-sm text-muted-foreground mb-4">Expert Web Developer</p>
              <div className="text-left space-y-2 text-sm">
                <div className="flex justify-between"><span>JSS Score</span><span className="text-green-600 font-bold">98%</span></div>
                <div className="flex justify-between"><span>Response Rate</span><span>100%</span></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}