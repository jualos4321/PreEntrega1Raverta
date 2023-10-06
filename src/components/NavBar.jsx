import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Box,
  Spacer,
  Button
} from '@chakra-ui/react'
import CarWidget from './CarWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <Flex bg={'blue.400'}>
        <Box p='4'>
        <Link to={"/"}>
          <h3>Tristore</h3>
          </Link>
        </Box>
        <Box p='4'>
          <Menu>
            <MenuButton>
              Categorias
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link to={`/categoria/${"A"}`}>
              Categoria A
              </Link>
              </MenuItem>
              <MenuItem>
                <Link to={`/categoria/${"B"}`}>
              Categoria B
              </Link>
              </MenuItem>
              <MenuItem>
                <Link to={`/categoria/${"C"}`}>
              Categoria C
              </Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <Box p="4">
          <Link to={"/cart/"}>
          <CarWidget />
          </Link>
        </Box>
        <Box pt="10">
        </Box>
      </Flex>
    </div>
  )
}

export default NavBar