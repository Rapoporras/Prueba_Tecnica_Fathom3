import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SingIn.css";
// import Logo from "../../../assets/logo.svg"
import { createUser, doLogin } from "../../Api/Api";
import { useAuth } from "../../Hooks/useContext";
import { Footer } from "../../Component/Footer/Footer";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  TableContainer,
} from "@chakra-ui/react";
function SingIn() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const singinUser = () => {
    // setLoading(true);

    // hola1@prisma.com
    createUser(name, email, password)
      .then((response) => {
        console.log(response);
        login(response.data.email);
        setError("");
        window.location.replace("/");
      })
      .catch((error) => {
        console.log("Error al iniciar sesión");
        setError(
          "Ha ocurrido un error al crear usuario, inténtalo de nuevo" + error
        );
        // setLoading(false);
      });
  };
  return (
    <Box
      p={0}
      m={0}
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        position: "relative",
        width: "100%",
      }}
    >
      <Center
        pt={"25px"}
        style={{ textAlign: "center", height: "100vh", marginBottom: "15px" }}
      >
        {/* <img
          width="150px"
          src={Logo}
          alt="Logo"
        /> */}
        <Card maxW={"500px"}>
          <CardBody>
            <Box>
              <Heading as="h3" size="lg" my={5}>
                SingIn
              </Heading>
              <Input
                variant="outline"
                type="text"
                my={"10px"}
                value={name}
                autoComplete="on"
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
              <Input
                variant="outline"
                type="text"
                my={"10px"}
                value={email}
                autoComplete="on"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail Address"
              />

              <InputGroup size="md" my={"10px"}>
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    bgColor={"#fdc500"}
                    onClick={handleClick}
                  >
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Stack
                direction="row"
                justifyContent={"center"}
                spacing={4}
                align="center"
                my={"15px"}
              >
                <Button
                  w={"200px"}
                  bgColor={"#fdc500"}
                  onClick={() => {
                    singinUser();
                  }}
                >
                  Sing In
                </Button>

                <Button
                  w={"200px"}
                  border={"1px solid #fdc500"}
                  bgColor={"#fff"}
                  color={"#fdc500"}
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Back
                </Button>
              </Stack>

              {error == "" ? (
                <></>
              ) : (
                <Alert status="error">
                  <AlertIcon />
                  {error}
                </Alert>
              )}
            </Box>
          </CardBody>
        </Card>
      </Center>

      <Footer></Footer>
    </Box>
  );
}
export default SingIn;
