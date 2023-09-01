import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const tabs = [
  {
    id: 0,
    value: "dashboard",
    label: "Dashboard",
    element: <h1> Dashboard </h1>,
  },
  {
    id: 1,
    value: "my-dashboard",
    label: "My Dashboard",
    element: <h1> My Dashboard </h1>,
  },
{
    id: 2,
    value: "reports",
    label: "Reports",
    element: <h1> Reports </h1>,
  },
{
    id: 3,
    value: "timesheets",
    label: "Timesheets",
    element: <h1> Timesheets </h1>
  },
];

function Dashboard() {
  return (
    <>
      <div className="flex-1 space-y-4 p-6 pt-4">
        <Tabs defaultValue="dashboard" className="space-y-4">
          <TabsList>
            {tabs.map((tab) => 
              <TabsTrigger value={tab.value} key={tab.id}>
                {tab.label} 
              </TabsTrigger>
            )}
          </TabsList>
          {tabs.map((tab) => 
            <TabsContent key={tab.id} value={tab.value} className="space-y-4">{tab.element}</TabsContent>
          )}
        </Tabs>
      </div>
    </>
  );
}

export default Dashboard
