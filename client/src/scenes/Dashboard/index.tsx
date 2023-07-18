import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { gridTemplateLargeScreens, gridTemplateSmallScreens } from './gridTemplates';

type Props = {}
const Dashboard = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { palette } = useTheme();
  return (
    <Box width="100%" height="100%" display="grid" gap="1.5rem"
      sx={(isAboveMediumScreens) ? {
        gridTemplateColumns: "repeat(3, minmax(370px, 1fr))", gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
        gridTemplateAreas: gridTemplateLargeScreens
      } : {
        gridAutoColumns: "1fr", gridAutoRows: "80px",
        gridTemplateAreas: gridTemplateSmallScreens
      }}
    >
      <Box bgcolor="snow" gridArea="a"></Box>
      <Box bgcolor="snow" gridArea="b"></Box>
      <Box bgcolor="snow" gridArea="c"></Box>
      <Box bgcolor="snow" gridArea="d"></Box>
      <Box bgcolor="snow" gridArea="e"></Box>
      <Box bgcolor="snow" gridArea="f"></Box>
      <Box bgcolor="snow" gridArea="g"></Box>
      <Box bgcolor="snow" gridArea="h"></Box>
      <Box bgcolor="snow" gridArea="i"></Box>
      <Box bgcolor="snow" gridArea="j"></Box>
    </Box>
  )
}

export default Dashboard
