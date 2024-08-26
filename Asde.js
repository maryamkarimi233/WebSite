import { Box } from "@chakra-ui/react";

function Sidebar() {
  return (
    <Box
      as="aside"
      width={{  md: "50px" }}
      height="30vh"
      bg="gray.800"
      color="white"
      p={4}
    >
      {/* Add your sidebar content here */}
    </Box>
  );
}

export default Sidebar;
