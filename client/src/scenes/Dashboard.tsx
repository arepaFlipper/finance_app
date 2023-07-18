import { Box, Typography, useTheme } from '@mui/material';

type Props = {}

const gridTemplate = `
  "a b c"
  "a b c"
  "a b c"
  "a b f"
  "a e f"
  "d e f"
  "d h i"
  "g h i"
  "g h j"
  "g h j"
`

const Dashboard = (props: Props) => {
  const { palette } = useTheme();
  return (
    <Box width="100%" height="100%" display="grid" gap="1.5rem" sx={{ gridTemplateColumns: "repeat(3, minmax(370px, 1fr))", gridTemplateRows: "repeat(10, minmax(60px, 1fr))", gridTemplateAreas: gridTemplate }}>
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
