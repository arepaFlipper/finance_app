import { useMemo } from 'react';
import { useGetkpisQuery } from '@/state/api';
import { useTheme } from '@mui/material';
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Line, Legend, LineChart, BarChart, Bar } from 'recharts';
import DashboardBox from './DashboardBox';
import BoxHeader from '@/components/BoxHeader';

const Row1 = () => {
  const { palette } = useTheme();
  const { data } = useGetkpisQuery();

  const revenueExpenses = useMemo(() => {
    const dat0 = data && data[0].monthlyData.map(({ month, revenue, expenses }) => {
      const name = month.substring(0, 3);
      return { name, revenue, expenses };
    })
    return dat0;
  }, [data]);

  const revenueProfit = useMemo(() => {
    const dat0 = data && data[0].monthlyData.map(({ month, revenue, expenses }) => {
      const name = month.substring(0, 3);
      return { name, revenue, profit: (revenue - expenses).toFixed(2) };
    })
    return dat0;
  }, [data]);

  const revenue = useMemo(() => {
    const dat0 = data && data[0].monthlyData.map(({ month, revenue }) => {
      const name = month.substring(0, 3);
      return { name, revenue };
    })
    return dat0;
  }, [data]);

  return (
    <>
      <DashboardBox gridArea="a">
        <BoxHeader title="Revenue" subtitle="top line represents revenue, bottom line represents expenses" sideText="+4%" />
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart width={500} height={400} data={revenueExpenses} margin={{ top: 15, right: 25, left: -10, bottom: 60 }}>
            <CartesianGrid strokeDasharray="1 9" />
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={palette.primary[300]} stopOpacity={0.5} />
                <stop offset="95%" stopColor={palette.primary[300]} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={"#FCA5A5"} stopOpacity={0.9} />
                <stop offset="95%" stopColor={"#FCA5A5"} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" style={{ fontSize: "10px" }} />
            <YAxis axisLine={{ strokeWidth: "0" }} style={{ fontSize: "10px" }} domain={[8_000, 23_000]} />
            <Tooltip />
            <Area type="monotone" dataKey="revenue" dot stroke={palette.primary.main} fillOpacity={1} fill="url(#colorRevenue)" />
            <Area type="monotone" dataKey="expenses" dot stroke={"#ef4444"} fillOpacity={1} fill="url(#colorExpenses)" />
          </AreaChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea="b">
        <BoxHeader title="Revenue" subtitle="top line represents revenue, bottom line represents expenses" sideText="+4%" />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={revenueProfit} margin={{ top: 15, right: 25, left: -10, bottom: 60 }}>
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis dataKey="name" style={{ fontSize: "10px" }} />
            <YAxis yAxisId="left" axisLine={false} style={{ fontSize: "10px" }} />
            <YAxis yAxisId="right" orientation="right" axisLine={false} style={{ fontSize: "10px" }} />
            <Tooltip />
            <Legend height={20} wrapperStyle={{ margin: '0 0 10px 0' }} />
            <Line yAxisId="left" type="monotone" dataKey="profit" stroke={palette.tertiary[500]} />
            <Line yAxisId="right" type="monotone" dataKey="revenue" stroke={palette.primary.main} />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea="c">
        <BoxHeader title="Monthly Revenue" subtitle="graph representing the revenue month by month" sideText="+4%" />
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={revenue} margin={{ top: 17, right: 15, left: -5, bottom: 58 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={palette.primary[300]} stopOpacity={0.8} />
                <stop offset="95%" stopColor={palette.primary[300]} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} style={{ fontSize: '10px' }} />
            <YAxis axisLine={false} tickLine={false} style={{ fontSize: '10px' }} />
            <Tooltip />
            <Bar dataKey="revenue" fill="url(#colorRevenue)" />
          </BarChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  )
}

export default Row1
