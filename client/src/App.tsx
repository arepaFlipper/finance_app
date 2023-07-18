import { useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { themeSettings } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from '@/scenes/Navbar';

const App = () => {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar />
            <Routes>
              <Route path="/" element={<div>dashboard page</div>} />
              <Route path="/predictions" element={<div>preditctions page</div>} />
            </Routes>
          </Box >
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App
