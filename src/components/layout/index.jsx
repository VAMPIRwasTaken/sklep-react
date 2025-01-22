/* eslint-disable react/prop-types */
import { Flex, Box} from "@chakra-ui/react";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({children}) => {
    return ( 
    <Flex height={"100vh"} flexDirection={"column"}>
        <Navbar />
        <Box 
            flex={1}
            width={"100%"}
            backgroundColor={"white"}
            color={"black"}
            marginTop={"70px"}
            padding={5}
        >
            {children}
        </Box>
        <Footer />
    </Flex>
    );
};

export default Layout