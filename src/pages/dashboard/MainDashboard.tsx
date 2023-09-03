import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { TooltipProps } from 'recharts';
// for recharts v2.1 and above
import {
    ValueType,
    NameType,
} from 'recharts/types/component/DefaultTooltipContent';

const data = [
  {
    name: "14/8",
    created: 60,
    resolved: 40,
    dev: 3
  },
  {
    name: "15/8",
    created: 72,
    resolved: 32,
    dev: 0
  },
  {
    name: "16/8",
    created: 65,
    resolved: 43,
    dev: 3
  },
  {
    name: "17/8",
    created: 62,
    resolved: 35,
    dev: 2
  },
  {
    name: "18/8",
    created: 55,
    resolved: 53,
    dev: 1
  },
  {
    name: "19/8",
    created: 2,
    resolved: 0,
    dev: 0
  },
  {
    name: "20/8",
    created: 0,
    resolved: 1,
    dev: 0
  },
  {
    name: "21/8",
    created: 60,
    resolved: 43,
    dev: 2
  },
  {
    name: "22/8",
    created: 73,
    resolved: 61,
    dev: 3
  },
];

const CustomTooltip = ({
    active,
    payload,
    label,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label}`}</p>
        <p className="label">{`Created: ${payload[0].value}`}</p>
        <p className="label">{`Resolved: ${payload[1].value}`}</p>
        <p className="label">{`Dev Resolved: ${payload[2].value}`}</p>
      </div>
    );
  }

  return null;
};

function MainDashboard() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-md font-medium">
              Support Tickets 
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">230</div>
            <p className="text-sm text-red-600">
              Target: Under 100 
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-md font-medium">
              Development Tickets 
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">92</div>
            <p className="text-sm text-green-600">
              Target: Under 100 
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-md font-medium">
              Tickets Closed (Week)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">16</div>
            <p className="text-sm">
              Leader: John Doe 
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-md font-medium">
              Ticket Delta (Week)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600">+12</div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Tickets: Created vs Resolved</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={data}>
              <XAxis
                dataKey="name"
                stroke="#888888"
                fontSize={12}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip content={<CustomTooltip />}/>
              <Line dataKey="created" stroke="#b91c1c" strokeWidth={3}/>
              <Line dataKey="resolved" stroke="#065f46" strokeWidth={3}/>
              <Line dataKey="dev" stroke="#075985" strokeWidth={3}/>
              <CartesianGrid strokeDasharray="3 3" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </>
  );
}

export default MainDashboard
