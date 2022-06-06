import { Box, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useRpcHealth } from '../hooks/useRpcHealth';

interface RpcCardProps {
  rpcUrl: string;
  name: string;
}

export const RpcCard: FC<RpcCardProps> = ({ rpcUrl, name }) => {
  const { status } = useRpcHealth(rpcUrl);

  return (
    <Box borderWidth='thin' padding='2' rounded='md'>
      <Heading size='md'>{name}</Heading>
      <Text size='md' color={status === 'ok' ? 'green' : 'red'}>
        {status}
      </Text>
      <Text color='slategray'>{rpcUrl}</Text>
    </Box>
  );
};
