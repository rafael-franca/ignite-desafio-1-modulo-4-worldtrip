import type { AppProps } from 'next/app'
import { Box, ChakraProvider } from '@chakra-ui/react'
import { Header } from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Box backgroundColor='gray.50'>
        <Header />
        
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
