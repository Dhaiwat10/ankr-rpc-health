import { Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { useRpcHealth } from '../hooks/useRpcHealth';
import { Rpc } from '../utils';

interface RpcCardProps {
  rpc: Rpc;
}

export const RpcCard: FC<RpcCardProps> = ({ rpc }) => {
  const { url, label } = rpc;
  const { status, responseTime } = useRpcHealth(url);

  return (
    <VStack borderWidth='thin' padding='4' rounded='md' alignItems='left'>
      <Heading size='md'>{label}</Heading>
      <HStack>
        <Text
          size='md'
          color={
            status === 'ok' ? 'green' : status === 'unknown' ? 'orange' : 'red'
          }
          textTransform='capitalize'
        >
          {status} {status === 'ok' ? '✅' : status === 'unknown' ? '⚠️' : '❌'}{' '}
        </Text>
        <Text color='slategray'>{responseTime} ms ⏱</Text>
      </HStack>

      <Text color='slategray'>{url}</Text>
    </VStack>
  );
};
