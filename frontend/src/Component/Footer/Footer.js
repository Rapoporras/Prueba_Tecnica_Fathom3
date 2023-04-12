import { Box } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box
      style={{
        height: "50px",
        position: "absolute",
        bottom: "0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#e4e1db",
        width: "100%",
      }}
    >
      © Prueba Fathom 3 {new Date().getFullYear()}
    </Box>
  );
};
