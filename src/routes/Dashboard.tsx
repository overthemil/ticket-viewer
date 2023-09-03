import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const tabs = [
  {
    id: 0,
    value: "dashboard",
    label: "Dashboard",
    element: <h1> Dashboard </h1>,
    mobile: true,
  },
  {
    id: 1,
    value: "my-dashboard",
    label: "My Dashboard",
    element: <h1> My Dashboard </h1>,
    mobile: true,
  },
{
    id: 2,
    value: "reports",
    label: "Reports",
    element: <h1> Reports </h1>,
    mobile: false,
  },
{
    id: 3,
    value: "timesheets",
    label: "Timesheets",
    element: <h1> Timesheets </h1>,
    mobile: false,
  },
];

function Dashboard() {
  return (
    <>
      <div className="flex-1 space-y-4 p-8 pt-4">
        <Tabs defaultValue="dashboard">
          <TabsList className="hidden md:flex m-auto max-w-fit">
            {tabs.map((tab) => 
              <TabsTrigger value={tab.value} key={tab.id}>
                {tab.label} 
              </TabsTrigger>
            )}
          </TabsList>
          <TabsList className="md:hidden">
            {tabs.map((tab) =>  
              tab.mobile ? (
                <TabsTrigger value={tab.value} key={tab.id}>
                  {tab.label} 
                </TabsTrigger>
              ) : (
                null
              ) 
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
