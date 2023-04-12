import { Navigate, useNavigate } from "react-router-dom";
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useAuth } from "../../Hooks/useContext";
import { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
export const JokeBox = (props) => {
  const [flip, setFlip] = useState(false);
  const joke = props.joke;

  useEffect(() => {
    setFlip(false);
  }, [joke]);
  return (
    <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
      <Card maxW="sm" h={"700px"}>
        <CardBody>
          <Image
            boxSize="300px"
            objectFit="cover"
            src="https://img.freepik.com/vector-gratis/cortina-teatro-mano_1284-3989.jpg?w=1060&t=st=1681315116~exp=1681315716~hmac=eb79d7a16aa1e466497649920ff64f4f60c07938a228bda98939e0ec79236821"
            alt="cortina-teatro-mano"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Badge
              ml="1"
              fontSize="0.8em"
              maxW={"200px"}
              borderRadius={"1em"}
              textAlign={"center"}
              colorScheme="green"
            >
              {joke.type}
            </Badge>
            <Text>{joke.setup}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button
              variant="solid"
              colorScheme="blue"
              onClick={() => setFlip(!flip)}
            >
              Discover punchline
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <Card maxW="sm" h={"700px"}>
        <CardBody>
          <Image
            boxSize="300px"
            objectFit="cover"
            src="https://img.freepik.com/vector-gratis/grupo-personas-viendo-videos-graciosos-riendo-dibujos-animados_1284-33366.jpg?w=1060&t=st=1681315172~exp=1681315772~hmac=aecc11cdbad505fbb3ca80fca2fc0294fb4e2f54d89849c4f23eb4df8dc51abb"
            alt="laughing"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Text>{joke.punchline}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button
              variant="solid"
              colorScheme="blue"
              onClick={() => setFlip(!flip)}
            >
              Back
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </ReactCardFlip>
  );
};
