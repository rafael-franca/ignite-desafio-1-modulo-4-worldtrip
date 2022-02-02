import { Box, Container, Flex, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import { CityCard } from "../../components/CityCard";

const Continent: NextPage = () => {
    const cities = [
        {
            name: 'Londres',
            country: 'Reino Unido',
            image: '/city--london.png',
            flag: '/flag--uk.png'
        },
        {
            name: 'Paris',
            country: 'França',
            image: '/city--paris.png',
            flag: '/flag--fr.png'
        },
        {
            name: 'Roma',
            country: 'Itália',
            image: '/city--rome.png',
            flag: '/flag--it.png'
        },
        {
            name: 'Praga',
            country: 'República Tcheca',
            image: '/city--prague.png',
            flag: '/flag--cr.png'
        },
        {
            name: 'Amsterdã',
            country: 'Holanda',
            image: '/city--amsterdam.png',
            flag: '/flag--nl.png'
        }
    ]

    const data = [
        {
            text: 'países',
            number: '50'
        },
        {
            text: 'línguas',
            number: '60'
        },
        {
            text: 'cidades',
            number: '+100'
        }
    ]

    return (
        <>
            <Flex position='relative' alignItems='center' justifyContent='center'>
                <Image src='/destination--europe.png' width={1440} height={500} />

                <Container maxW={1280} position='absolute' bottom={8}>
                    <Heading as='h1' p={8} color='white'>
                        Europa
                    </Heading>
                </Container>
            </Flex>

            <Container maxW={1280}>
                <Stack p={8} direction={{ base: 'column', md: 'row' }} spacing={12} alignItems='center'>
                    <Text>A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste</Text>

                    <Stack direction='row' spacing={12}>
                        {data.map(({ number, text }) => (
                            <Box key={text}>
                                <Text color='yellow.500' fontSize={48} fontWeight={600} lineHeight={1} textAlign='center'>{number}</Text>

                                <Text fontWeight={600} textAlign='center'>{text}</Text>
                            </Box>
                        ))}
                    </Stack>
                </Stack>

                <Box p={8}>
                    <Heading as='h2' fontSize={36} mb={8}>
                        Cidades +100
                    </Heading>

                    <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }} gap={8}>
                        {cities.map(city => (
                            <CityCard key={city.name} {...city} />
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Continent