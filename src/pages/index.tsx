import type { NextPage } from 'next'

import { Box, Center, Container, Flex, Heading, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

import { Slide } from '../components/Slider'

const Home: NextPage = () => {
  const destinations = [
    {
      title: 'Europa',
      subtitle: 'O continente mais antigo',
      src: '/continent--europe.png',
      href: '/continents/europe'
    }
  ]

  return (
    <>
      <Flex h='300px' bg='blue.900' alignItems='center' backgroundImage='/background.png'>
        <Container maxW={1280} p={8}>
          <Stack direction={{ base: 'column', md: 'row' }} alignItems='center' justifyContent='space-between'>
            <VStack alignItems='start'>
              <Heading as='h2' color='white'>
                5 Continentes<br />
                infinitas possibilidades
              </Heading>

              <Text fontSize='md' color='white'>
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </VStack>

            <Spacer w='100%' />

            <Box position={'relative'} w={417} height={270}>
              <Box position={'absolute'} bottom={-10}>
                <Image src='/airplane.svg' alt='Avião' width={417} height={270} />
              </Box>
            </Box>
          </Stack>
        </Container>
      </Flex>

      <Container maxW={1024} p={20}>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={10} justifyContent='space-between'>
          <Box>
            <Image src='/icon--nightLife.svg' width={85} height={85} />
            <Text textAlign='center'>vida noturna</Text>
          </Box>

          <Box>
            <Image src='/icon--beach.svg' width={85} height={85} />
            <Text textAlign='center'>praia</Text>
          </Box>

          <Box>
            <Image src='/icon--modern.svg' width={85} height={85} />
            <Text textAlign='center'>moderno</Text>
          </Box>

          <Box>
            <Image src='/icon--classic.svg' width={85} height={85} />
            <Text textAlign='center'>clássico</Text>
          </Box>

          <Box>
            <Image src='/icon--world.svg' width={85} height={85} />
            <Text textAlign='center'>e mais...</Text>
          </Box>
        </Stack>
      </Container>

      <Center mb={10}>
        <Box h='0.5' w={14} bg='gray.500' borderRadius={2}></Box>
      </Center>

      <Box h='100px'>
        <Heading textAlign='center' fontWeight='500' fontSize={32} mb={12}>
          Vamos nessa?<br />
          Então escolha seu continente
        </Heading>

        <Slide>
          {destinations.map(({ title, subtitle, src, href }) => (
            <Link href={href}>
              <a>
              <Flex alignItems='center' justifyContent='center' height={450} position='relative'>
                <Flex direction='column' alignItems='center' justifyContent='center' position='absolute' zIndex={10}>
                  <Heading color='white' fontSize={48}>{title}</Heading>
                  <Text color='gray.100' fontSize={24}>{subtitle}</Text>
                </Flex>
                <Image src={src} layout='fill' />
              </Flex>
              </a>
            </Link>
          ))}
        </Slide>
      </Box>
    </>
  )
}

export default Home
