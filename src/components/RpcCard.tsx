import { Heading, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { useRpcHealth } from '../hooks/useRpcHealth';
import { Rpc } from '../utils';

interface RpcCardProps {
  rpc: Rpc;
}

export const RpcCard: FC<RpcCardProps> = ({ rpc }) => {
  const { url, label } = rpc;
  const { status } = useRpcHealth(url);

  return (
    <VStack borderWidth='thin' padding='4' rounded='md' alignItems='left'>
      <Heading size='md'>{label}</Heading>
      <Text
        size='md'
        color={
          status === 'ok' ? 'green' : status === 'unknown' ? 'orange' : 'red'
        }
        textTransform='capitalize'
      >
        {status} {status === 'ok' ? '✅' : status === 'unknown' ? '⚠️' : '❌'}
      </Text>
      <Text color='slategray'>{url}</Text>
    </VStack>
  );
};
