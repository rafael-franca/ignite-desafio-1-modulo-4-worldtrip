import Image from 'next/image'
import Link from 'next/link'

import { Box, Center, Container, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export function Header() {
    const { pathname } = useRouter();

    return (
        <Box backgroundColor='white'as='header'>
            <Container maxW={1280}>
                <Flex p={4} justifyContent='space-between'>
                    <Center>
                        {pathname !== '/' && (
                            <Link href='/'>
                                <a>
                                    <svg width="10" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 17 1 9l8-8" stroke="#47585B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </a>
                            </Link>
                        )}
                    </Center>
                    <Center>
                        <Link href='/'>
                            <a>
                                <Image src="/worldtrip.svg" alt="WorldTrip" width={184} height={46} />
                            </a>
                        </Link>
                    </Center>
                    <Center />
                </Flex>
            </Container>
        </Box>
    )
}