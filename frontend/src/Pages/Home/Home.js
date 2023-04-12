import React, { useEffect, useReducer, useState } from "react";

import { Box, Button, Center, Image } from "@chakra-ui/react";
import { getJokeRandom } from "../../Api/Api";
import { Navbar } from "../../Component/Navbar/Navbar";
import { Footer } from "../../Component/Footer/Footer";
import { JokeBox } from "../../Component/JokeBox/JokeBox";

// import Logo from "../../../assets/logo.svg"
function Home() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    getJoke();
  }, []);

  const getJoke = () => {
    getJokeRandom().then((response) => {
      setJoke(response.data);
    });
  };

  return (
    <Box
      p={0}
      m={0}
      style={{
        minHeight: "100vh",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        position: "relative",
        width: "100%",
      }}
    >
      <Navbar></Navbar>

      <Center flexDirection={"column"}>
        <JokeBox joke={joke}></JokeBox>

        <Button
          mt={"25px"}
          onClick={() => {
            getJoke();
          }}
        >
          {" "}
          Get Anothe Joke
        </Button>
      </Center>
      <Footer></Footer>
    </Box>
  );
}

export default Home;
