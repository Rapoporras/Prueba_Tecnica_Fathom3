import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import "./SingIn.css";
// import Logo from "../../../assets/logo.svg"
import { createUser, doLogin, updateUser } from "../../Api/Api";
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
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Navbar } from "../../Component/Navbar/Navbar";
import { ArrowBackIcon } from "@chakra-ui/icons";
function ProfilePage() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [userData, setuserData] = useState(JSON.parse(user));

  const [email, setEmail] = useState(userData.email);
  const [name, setName] = useState(userData.name);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const updateData = () => {
    // setLoading(true);
    // hola1@prisma.com
    updateUser(userData.id, name, email, password)
      .then((response) => {
        console.log(response);
        // login(response.data.email);
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
      <Navbar></Navbar>
      <Center pt={"25px"} style={{ textAlign: "center", marginBottom: "15px" }}>
        {/* <img
            width="150px"
            src={Logo}
            alt="Logo"
          /> */}
        <Card maxW={"500px"}>
          <CardBody
            display={"flex"}
            justifyContent={"flex-start"}
            flexDirection={"column"}
          >
            <Button
              w={"100px"}
              onClick={() => {
                navigate("/");
              }}
            >
              <ArrowBackIcon mr="15px"></ArrowBackIcon> Back
            </Button>
            <Box>
              <Heading as="h3" size="lg">
                Current Data
              </Heading>
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Email</Th>
                      <Th>Name</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>{userData.email}</Td>
                      <Td>{userData.name}</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
              <Heading as="h3" size="lg" my={5}>
                New Data
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

              <Button
                w={"200px"}
                bgColor={"#fdc500"}
                onClick={() => {
                  updateData();
                }}
              >
                Update Data
              </Button>
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
export default ProfilePage;
