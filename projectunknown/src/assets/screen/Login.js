import React from "react";
import { Input, Button, Container, Box, Flex, Center } from "@chakra-ui/react";
import { useAuth } from "../auth/auth-context";

const Login = () => {
    const { login } = useAuth();
    return (
        <Flex mt="20%" direction="column" alignItems="center">
            <Input placeholder="Username" w={["90%", "80%", "30%"]} mb="3" />
            <Input placeholder="Password" w={["90%", "80%", "30%"]} mb="5" />
            <Button colorScheme="teal" size="md" w={["90%", "80%", "30%"]} onClick={login}>Login</Button>
        </Flex>
    );
};

export default Login;
