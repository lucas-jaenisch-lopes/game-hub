import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

const SearchInput = () => {
  return (
    <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input borderRadius="20px" placeholder="Search games..." variant="filled"></Input>
      </InputGroup>
  )
}

export default SearchInput
