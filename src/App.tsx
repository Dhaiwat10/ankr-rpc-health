import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { RpcCard } from './components/RpcCard';

function App() {
  return (
    <Container paddingY='20'>
      <Heading>⚓️ Ankr RPC health</Heading>
      <SimpleGrid columns={2} gap='4' marginTop='8'>
        <RpcCard rpcUrl='https://rpc.ankr.com/optimism' name='Optimism' />
        <RpcCard rpcUrl='https://rpc.ankr.com/arbitrum' name='Arbitrum' />
        <RpcCard rpcUrl='https://rpc.ankr.com/polygon' name='Polygon' />
        <RpcCard
          rpcUrl='https://rpc.ankr.com/polygon_mumbai'
          name='Polygon Mumbai'
        />
        <RpcCard rpcUrl='https://rpc.ankr.com/eth' name='ETH Mainnet' />
        <RpcCard rpcUrl='https://rpc.ankr.com/eth_goerli' name='ETH Goerli' />
        <RpcCard rpcUrl='https://rpc.ankr.com/eth_ropsten' name='ETH Ropsten' />
      </SimpleGrid>
    </Container>
  );
}

export default App;
