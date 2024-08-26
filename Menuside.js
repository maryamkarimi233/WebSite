
import React from 'react';
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Menu,
  MenuButton,Text,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,Button,
  MenuDivider,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';
import {ChevronDownIcon} from '@chakra-ui/icons';
const Menuside = () => {
  return (
    <>
    <Button as={Button}    colorScheme='blue'>
    صفحات منتخب
     </Button>


</>
  )
}

export default Menuside