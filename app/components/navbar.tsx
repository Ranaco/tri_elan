import * as React from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import FilledButton from "./filled-button";

interface NavBarButtonProps {
  path: string;
  to: string;
  title: string;
}

const NavBarButton: React.FC<NavBarButtonProps> = ({ path, to, title }) => {
  const isActive = path === to;
  const theme = useTheme();
  return (
    <Link
      href={to}
      style={{
        textDecoration: "none",
      }}
    >
      <Box
        color={!isActive ? "grey" : theme.palette.primary.light}
        fontSize="1.2em"
        fontWeight={isActive ? "bold" : undefined}
      >
        {title}
      </Box>
    </Link>
  );
};

const NavBar = () => {
  const router = useRouter();
  return (
    <Stack
      direction={"row"}
      pr="50px"
      sx={{
        alignItems: "end",
        justifyContent: "space-between",
        position: "fixed",
        top: "0px",
        width: "100vw",
        height: "70px",
        backdropFilter: "blur(10px)",
      }}
    >
      <Link
        href="/"
        style={{
          textDecoration: "none",
        }}
      >
        <Typography fontSize="1.4em" pl="30px">
          TE
        </Typography>
      </Link>
      <Stack gap="60px" flex={"1"} justifyContent="center" direction={"row"}>
        <NavBarButton path={router.route} to={"/"} title={"Home"} />
        <NavBarButton path={router.route} to={"/play"} title={"Play"} />
        <NavBarButton
          path={router.route}
          to={"/marketplace"}
          title={"Marketplace"}
        />
      </Stack>
      <FilledButton text="Login" onClick={() => {}} />
    </Stack>
  );
};

export default NavBar;
