import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

type CityCardProps = {
    name: string
    country: string
    image: string
    flag: string
}

export function CityCard({ name, country, image, flag }: CityCardProps) {
    return (
        <Box borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image src={image} width={256} height={173} layout='responsive' />

            <Flex p={5} alignItems='center' justifyContent='space-between'>
                <Stack direction='column' spacing={2}>
                    <Heading as='h3' fontSize={20} fontWeight={400}>
                        {name}
                    </Heading>

                    <Text color='gray.500' fontSize={16}>
                        {country}
                    </Text>
                </Stack>

                <Image src={flag} width={30} height={30} />
            </Flex>
        </Box>
    )
}