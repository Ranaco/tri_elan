import * as React from "react";
import { Box, Stack } from "@mui/material";
import NavBar from "../navbar";
import Head from "next/head";

interface MainProps {
  children: JSX.Element;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <Box>
      <Head>
        <title>TriElan</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Ranaco" />
        <meta
          name="description"
          content="Governance for Renewable Energy Revolution"
        />
      </Head>
      <Stack direction={"column"}>
        <NavBar />
        <Box>
          <div className="container" />
          <Box mt="70px">{children}</Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Main;
