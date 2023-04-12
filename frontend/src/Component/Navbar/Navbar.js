import { Navigate, useNavigate } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";
import { useAuth } from "../../Hooks/useContext";
import { useState } from "react";

export const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [userData, setuserData] = useState(JSON.parse(user));
  return (
    <Box
      style={{
        position: "sticky",
        top: "0px",
        zIndex: 999,
        height: "60px",
        display: "flex",
        paddingLeft: "20px",
        paddingRight: "20px",
        backgroundColor: "#e4e1db",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        {/* <img
      width="50px"
      src={Logo}
      alt="Logo"
    /> */}
        <Box>
          {userData.name} / {userData.email}
        </Box>
      </Box>

      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Button
          onClick={() => {
            navigate("/profile");
          }}
          style={{
            width: "100px",
            padding: "10px",
            borderRadius: "1em",
            marginLeft: "15px",
            backgroundColor: "#fdc500",
            color: "#000",
          }}
          variant="outline"
        >
          Profile
        </Button>
        <Button
          onClick={() => {
            logout();
          }}
          style={{
            width: "100px",
            padding: "10px",
            borderRadius: "1em",
            marginLeft: "15px",
            border: "1px solid #fdc500",
            color: "#fdc500",
          }}
          variant="outline"
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};
