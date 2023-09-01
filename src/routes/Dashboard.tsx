import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar";

function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="flex-1 space-y-4 p-6 pt-4">
        <Tabs defaultValue="dashboard" className="space-y-4">
          <TabsList>
            <TabsTrigger value="dashboard">
              Dashboard 
            </TabsTrigger>
            <TabsTrigger value="my-dashboard">
              My Dashboard 
            </TabsTrigger>
            <TabsTrigger value="reports">
              Reports 
            </TabsTrigger>
            <TabsTrigger value="timesheets">
              Timesheets 
            </TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard" className="space-y-4">Dashboard</TabsContent>
          <TabsContent value="my-dashboard" className="space-y-4">My Dashboard</TabsContent>
          <TabsContent value="reports" className="space-y-4">Reports</TabsContent>
          <TabsContent value="timesheets" className="space-y-4">Timesheets</TabsContent>
        </Tabs>
      </div>
    </>
  );
}

export default Dashboard
