import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Search } from "lucide-react";

export default function BuyerDashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Buyer Dashboard</h1>
          <p className="text-muted-foreground">Manage your designs and proposals.</p>
        </div>
        <Button className="gap-2">
          <PlusCircle className="w-4 h-4" /> Post a New Design
        </Button>
      </header>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader><CardTitle className="text-sm font-medium">Active Jobs</CardTitle></CardHeader>
          <CardContent><p className="text-2xl font-bold">3</p></CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="text-sm font-medium">Pending Proposals</CardTitle></CardHeader>
          <CardContent><p className="text-2xl font-bold">12</p></CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="text-sm font-medium">Spent this month</CardTitle></CardHeader>
          <CardContent><p className="text-2xl font-bold">$1,250</p></CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader><CardTitle>Your Active Postings</CardTitle></CardHeader>
        <CardContent>
          <div className="text-center py-10 border-2 border-dashed rounded-lg">
            <Search className="mx-auto w-10 h-10 text-muted-foreground mb-3" />
            <p>You haven't posted any jobs yet.</p>
          </div>
        </CardContent>
      </Card> */}
    </div>
  );
}