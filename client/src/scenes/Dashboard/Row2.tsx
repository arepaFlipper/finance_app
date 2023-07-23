import { useGetProductsQuery, useGetkpisQuery } from '@/state/api';
import DashboardBox from './DashboardBox';
import BoxHeader from '@/components/BoxHeader';
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Line, Legend, LineChart, BarChart, Bar } from 'recharts';
import { useTheme } from '@mui/material';
import { useMemo } from 'react';

type Props = {}

const Row2 = ({ }: Props) => {
  const { data: productData } = useGetProductsQuery();
  const { data: operationalData } = useGetkpisQuery();
  const { palette } = useTheme();

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
      <DashboardBox gridArea="e"></DashboardBox>
      <DashboardBox gridArea="f"></DashboardBox>
    </>
  )
}

export default Row2
