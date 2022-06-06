import { Heading, SimpleGrid, VStack } from '@chakra-ui/react';
import { RpcCard } from './components/RpcCard';
import { rpcs } from './utils';

function App() {
  return (
    <VStack paddingY='20'>
      <Heading marginBottom='20'>⚓️ Ankr RPC health</Heading>
      <SimpleGrid columns={2} gap='6'>
        {rpcs.map((rpc) => {
          return <RpcCard key={rpc.url} rpc={rpc} />;
        })}
      </SimpleGrid>
    </VStack>
  );
}

export default App;
