import { DataGrid, GridCellParams } from '@mui/x-data-grid';
import DashboardBox from './DashboardBox';
import { useGetTransactionsQuery, useGetProductsQuery, useGetkpisQuery } from '@/state/api';
import BoxHeader from '@/components/BoxHeader';
import { Box, Typography, useTheme, } from '@mui/material';
import FlexBetween from '@/components/FlexBetween';
import { PieChart, Pie, Cell } from 'recharts';
import { useMemo } from 'react';

const Row3 = () => {
  const { data: kpiData } = useGetkpisQuery();
  const { palette } = useTheme();
  const { data: productData } = useGetProductsQuery();
  const { data: transactionsData } = useGetTransactionsQuery();

  const productColumns = [
    { field: "_id", headerName: "id", flex: 1, },
    { field: "expense", headerName: "Expense", flex: 0.5, renderCell: (params: GridCellParams) => `$${params.value}` },
    { field: "price", headerName: "Price", flex: 0.5, renderCell: (params: GridCellParams) => `$${params.value}` },
  ]

  const transactionColumns = [
    { field: "_id", headerName: "id", flex: 1, },
    { field: "buyer", headerName: "Buyer", flex: 0.67 },
    { field: "amount", headerName: "Amount", flex: 0.35, renderCell: (params: GridCellParams) => `$${params.value}` },
    { field: "productIds", headerName: "Count", flex: 0.35, renderCell: (params: GridCellParams) => (params.value as string[]).length },
  ]


  const pieData = [
    { name: "Group A", value: 600 },
    { name: "Group B", value: 400 },
  ]

  const pieColors = [palette.primary[800], palette.primary[300]];

  const pieChartData = useMemo(() => {
    if (kpiData) {
      const totalExpenses = kpiData[0].totalExpenses;
      return Object.entries(kpiData[0].expensesByCategory).map(([key, value]) => {
        return [
          { name: key, value: value, },
          { name: `${key} of Total`, value: totalExpenses - value },
        ]
      })
    }
  }, [kpiData]);
  return (
    <>
      <DashboardBox gridArea="g">
        <BoxHeader title="List of Products" sideText={`${productData?.length} products`} />
        <Box mt="0.5rem" p="0 0.5rem" height="75%" sx={{
          "& .MuiDataGrid-root": {
            color: palette.grey[300],
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: `1px solid ${palette.grey[800]}!important`,
          },
          "& .MuiDataGrid-columnHeaders": {
            borderBottom: `1px solid ${palette.grey[800]}!important`,
          },
          "& .MuiDataGrid-columnSeparator": {
            visibility: "hidden"
          },
        }}
        >
          <DataGrid columnHeaderHeight={25} rowHeight={35} hideFooter={true} rows={productData || []} columns={productColumns} />
        </Box>
      </DashboardBox>
      <DashboardBox gridArea="h">
        <BoxHeader title="Recent Orders" sideText={`${transactionsData?.length} latest transactions`} />
        <Box mt="1rem" p="0 0.5rem" height="80%" sx={{
          "& .MuiDataGrid-root": {
            color: palette.grey[300],
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: `1px solid ${palette.grey[800]}!important`,
          },
          "& .MuiDataGrid-columnHeaders": {
            borderBottom: `1px solid ${palette.grey[800]}!important`,
          },
          "& .MuiDataGrid-columnSeparator": {
            visibility: "hidden"
          },
        }}
        >
          <DataGrid columnHeaderHeight={25} rowHeight={35} hideFooter={true} rows={transactionsData || []} columns={transactionColumns} />
        </Box>
      </DashboardBox>
      <DashboardBox gridArea="i">
        <BoxHeader title="Expense Breakdown By Category" sideText="+4%" />
        <FlexBetween mt="0.5rem" gap="0.5rem" p="0 1rem" textAlign="center">
          {pieChartData?.map((data, i) => {
            return (
              <Box key={`${data[0].name}-${i}`}>
                <PieChart width={110} height={100}>
                  <Pie stroke="gray" data={data} innerRadius={18} outerRadius={35} paddingAngle={2} dataKey="value">
                    {data.map((_: unknown, index: number) => {
                      return (
                        <Cell key={`cell-${index}`} fill={pieColors[index]} />
                      )
                    })}
                  </Pie>
                </PieChart>
                <Typography variant="h5">{data[0].name}</Typography>
              </Box>
            )
          })}
        </FlexBetween>
      </DashboardBox>
      <DashboardBox gridArea="j"></DashboardBox>
    </>
  )
}

export default Row3;
