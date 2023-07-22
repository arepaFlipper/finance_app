import { useMemo } from 'react';
import { useGetkpisQuery } from '@/state/api';
import { useTheme } from '@mui/material';
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import DashboardBox from './DashboardBox';
type Props = {}

const Row1 = ({ }: Props) => {
  const { palette } = useTheme();
  const { data } = useGetkpisQuery();
  const revenueExpenses = useMemo(() => {
    const dat0 = data && data[0].monthlyData.map(({ month, revenue, expenses }) => {
      const name = month.substring(0, 3);
      return { name, revenue, expenses };
    })
    return dat0;
  }, [data]);
  return (
    <>
      <DashboardBox gridArea="a">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart width={500} height={400} data={revenueExpenses} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="revenue" stroke={palette.primary.main} fillOpacity={1} fill="url(#colorRevenue)" />
            <Area type="monotone" dataKey="expenses" stroke={palette.red[500]} fillOpacity={1} fill="url(#colorExpenses)" />
          </AreaChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea="b"></DashboardBox>
      <DashboardBox gridArea="c"></DashboardBox>
    </>
  )
}

export default Row1
