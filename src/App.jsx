import { Box, ThemeProvider } from "@mui/material";
import React from "react";
import Card from "./components/layouts/Card/Card";
import useAxios from "./hooks/useAxios";
import { theme } from "./utils/theme";

function App() {
  const { data, error, isLoading, get, cancel } = useAxios();

  const fetchData = async () => {
    await get("http://localhost:3000/card");
  };

  console.log("data", data);

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          padding: "1.5rem",
          display: "flex",
        }}
      >
        {isLoading
          ? "Loading..."
          : data?.card?.map?.((each) => <Card key={each.id} data={each} />)}
      </Box>
    </ThemeProvider>
  );
}

export default App;
