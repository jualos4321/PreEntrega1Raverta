import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Box,
  Spacer
} from '@chakra-ui/react'
import CarWidget from './CarWidget'

const NavBar = () => {
  return (
    <div>
      <Flex>
        <Box p='4'>
          <h3>Tristore</h3>
        </Box>
        <Box p='4'>
          <Menu>
            <MenuButton>
              Categories
            </MenuButton>
            <MenuList>
              <MenuItem>Category A</MenuItem>
              <MenuItem>Category B</MenuItem>
              <MenuItem>Category c</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <Box p="4">
          <CarWidget />
        </Box>
      </Flex>

    </div>
  )
}

export default NavBar