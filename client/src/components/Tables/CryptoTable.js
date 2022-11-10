import {
    Avatar,
    Badge,
    Button,
    Flex,
    Td,
    Text,
    Tr,
    useColorModeValue,
  } from "@chakra-ui/react";
  import React from "react";
  
  export default function CryptoTable(props) {
    const {
      name,
      price,
      image,
      symbol,
      volume,
      marketcap,
      lastItem,
    } = props;
    // const textColor = useColorModeValue("gray.700", "white");
    // const bgStatus = useColorModeValue("gray.400", "#1a202c");
    // const colorStatus = useColorModeValue("white", "gray.400");
  
    return (
      <Tr>
        <Td
          minWidth={{ sm: "250px" }}
          ps='0px'
          border={lastItem ? "none" : null}
          borderBottomColor='#56577A'>
          <Flex align='center' py='.8rem' minWidth='100%' flexWrap='nowrap'>
            <Avatar
              src={image}
              w='50px'
              borderRadius='12px'
              me='18px'
              border='none'
            />
            <Flex direction='column'>
              <Text
                fontSize='sm'
                color='#fff'
                fontWeight='normal'
                minWidth='100%'>
                {name}
              </Text>
              <Text fontSize='sm' color='gray.400' fontWeight='normal'>
                {symbol}
              </Text>
            </Flex>
          </Flex>
        </Td>
  
        <Td
          border={lastItem ? "none" : null}
          borderBottomColor='#56577A'
          minW='150px'>
          <Flex direction='column'>
            <Text fontSize='sm' color='#fff' fontWeight='normal'>
              {price}
            </Text>
            <Text fontSize='sm' color='gray.400' fontWeight='normal'>
              {volume}
            </Text>
          </Flex>
        </Td>
        <Td border={lastItem ? "none" : null} borderBottomColor='#56577A'>
        </Td>
        <Td border={lastItem ? "none" : null} borderBottomColor='#56577A'>
          <Text fontSize='sm' color='#fff' fontWeight='normal'>
            {marketcap}
          </Text>
        </Td>
        <Td border={lastItem ? "none" : null} borderBottomColor='#56577A'>
          <Button p='0px' bg='transparent' variant='no-hover'>
            <Text
              fontSize='sm'
              color='gray.400'
              fontWeight='bold'
              cursor='pointer'>
              Edit
            </Text>
          </Button>
        </Td>
      </Tr>
    );
  }
  
  