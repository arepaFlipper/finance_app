import { useTheme } from "@mui/material/styles";
import { useState, useMemo } from "react";
import DashboardBox from "./Dashboard/DashboardBox";
import { useGetkpisQuery } from "@/state/api";
import FlexBetween from "@/components/FlexBetween";
import { Box, Button, Typography } from "@mui/material";
import { ResponsiveContainer, CartesianGrid, XAxis, YAxis, Legend, Line, LineChart, Label, Tooltip } from "recharts";

import { DataPoint, linear } from "regression";

const Predictions = () => {
  const { palette } = useTheme();
  const [isPredictions, setIsPredictions] = useState(false);
  const { data: kpiData } = useGetkpisQuery();

  const formattedData = useMemo(() => {
    if (!kpiData) {
      return [];
    }
    const monthData = kpiData[0].monthlyData;

    const formatted: Array<DataPoint> = monthData.map(({ revenue }, i: number) => {
      return [i, revenue];
    })
    const regressionLine = linear(formatted);
    return monthData.map(({ month, revenue }, i: number) => {
      return {
        name: month,
        "Actual Revenue": revenue,
        "Regression Line": regressionLine.points[i][1],
        "Predicted Revenue": regressionLine.predict(i + 12)[1],
      }
    })
  }, [kpiData]);
  return (
    <DashboardBox width="100%" height="100%" p="1rem" overflow="hidden">
      <FlexBetween m="1rem 2.5rem" gap="1rem">
        <Box>
          <Typography variant="h3">Revenue and Predictions</Typography>
          <Typography variant="h6">Charted revenue and predicted revenue based on a simple linear regression model</Typography>
        </Box>
        <Button onClick={() => setIsPredictions(!isPredictions)} sx={{ color: palette.grey[900], bgcolor: palette.grey[700], boxShadow: "0.1rem 0.1rem 0.1rem 0.1rem rgba(0,0,0,0.4)" }}>
          Show Predicted Revenue for Next Year
        </Button>
      </FlexBetween>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={formattedData} margin={{ top: 20, right: 75, left: 20, bottom: 80 }}>
          <CartesianGrid strokeDasharray="5 5" stroke={palette.grey[800]} />
          <XAxis dataKey="name" style={{ fontSize: "10px" }} />
          <Label value="Month" offset={-5} position="insideBottom" />
          <XAxis />
          <YAxis domain={[12_000, 26_000]} axisLine={{ strokeWidth: '0' }} style={{ fontSize: "10px" }} tickFormatter={(val) => `$${val}`} >
            <Label value="Revenue is USD" angle={-90} offset={-5} position="insideLeft" />
          </YAxis >
          <Tooltip />
          <Legend verticalAlign="top" />
          <Line type="monotone" dataKey="Actual Revenue" stroke={palette.primary.main} strokeWidth={0} dot={{ strokeWidth: 5 }} />
          <Line type="monotone" dataKey="Regression Line" stroke={'#8884d8'} />
          {isPredictions && (
            <Line strokeDasharray="5 5" type="monotone" dataKey="Predicted Revenue" stroke={palette.secondary[500]} />
          )}
        </LineChart>
      </ResponsiveContainer>
    </DashboardBox>
  )
}

export default Predictions
