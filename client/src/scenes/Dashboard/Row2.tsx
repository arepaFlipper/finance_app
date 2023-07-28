import { useGetProductsQuery, useGetkpisQuery } from '@/state/api';
import DashboardBox from './DashboardBox';
import BoxHeader from '@/components/BoxHeader';
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Line, Legend, LineChart, BarChart, Bar, PieChart, Cell, Pie } from 'recharts';
import { Box, Typography, useTheme } from '@mui/material';
import { useMemo } from 'react';
import FlexBetween from '@/components/FlexBetween';

const pieData = [
  { name: "Group A", value: 600 },
  { name: "Group B", value: 400 },
]

const Row2 = () => {
  const { data: productData } = useGetProductsQuery();
  const { data: operationalData } = useGetkpisQuery();
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[300]];

  const operationalExpenses = useMemo(() => {
    const dat0 = operationalData && operationalData[0].monthlyData.map(({ month, operationalExpenses, nonOperationalExpenses }) => {
      const name = month.substring(0, 3);
      return { name, "Operational Expenses": operationalExpenses, "Non Operational Expenses": nonOperationalExpenses };
    })
    return dat0;
  }, [operationalData]);
  return (
    <>
      <DashboardBox gridArea="d">
        <BoxHeader title="Operational vs Non-Operational Expenses" subtitle="top line represents revenue, bottom line represents expenses" sideText="+4%" />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={operationalExpenses} margin={{ top: 15, right: 25, left: -10, bottom: 60 }}>
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis dataKey="name" style={{ fontSize: "10px" }} />
            <YAxis orientation="left" yAxisId="left" axisLine={false} style={{ fontSize: "10px" }} />
            <YAxis yAxisId="right" orientation="right" axisLine={false} style={{ fontSize: "10px" }} />
            <Tooltip />
            <Line yAxisId="left" type="monotone" dataKey="Non Operational Expenses" stroke={palette.tertiary[500]} />
            <Line yAxisId="right" type="monotone" dataKey="Operational Expenses" stroke={palette.primary.main} />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea="e">
        <BoxHeader title="Campaign and Targets" sideText="+4%" />
        <FlexBetween mt="0.25rem" gap="1.5rem" pr="1rem">
          <PieChart width={110} height={100} margin={{ top: 0, right: -10, left: 10, bottom: 0 }}>
            <Pie stroke="gray" data={pieData} innerRadius={18} outerRadius={38} paddingAngle={2} dataKey="value">
              {pieData.map((entry: unknown, index: number) => {
                return (
                  <Cell key={`cell-${index}`} fill={pieColors[index]} />
                )
              })}
            </Pie>
          </PieChart>
          <Box ml="-0.7rem" flexBasis="40%" textAlign="center">
            <Typography variant="h5"> Target Sales </Typography>
            <Typography m="0.3rem 0" variant="h3" color={palette.primary[300]}> 83 </Typography>
          </Box>
          <Box flexBasis="40%">
            <Typography variant="h5"> Losses in Revenue </Typography>
            <Typography variant="h6"> Losses are down 25% </Typography>
            <Typography mt="0.4rem" variant="h5"> Profit Margins </Typography>
            <Typography variant="h6"> Margins are up by 30% from last month. </Typography>
          </Box>
        </FlexBetween>
      </DashboardBox>
      <DashboardBox gridArea="f"></DashboardBox>
    </>
  )
}

export default Row2
