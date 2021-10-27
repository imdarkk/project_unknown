import React from "react";
import { useAuth } from "../auth/auth-context";
import { Flex } from "@chakra-ui/react";
import Navigation from "../components/Navigation";

const Main = () => {
    return (
        <Flex direction="column" alignItems="center">
           <Navigation /> 
        </Flex>
    );
};

export default Main;
