import { useEffect, useState } from 'react';

interface RpcHealth {
  status: 'ok' | 'error' | 'unknown';
  error?: string | null;
}

export const useRpcHealth = (rpcUrl: string) => {
  const [health, setHealth] = useState<RpcHealth>({
    status: 'unknown',
    error: null,
  });

  useEffect(() => {
    const fetchHealth = async () => {
      try {
        const response = await fetch(rpcUrl, {
          // @ts-expect-error
          body: [{ method: 'eth_blockNumber', id: 127, jsonrpc: '2.0' }],
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
        });
        const data = await response.json();
        setHealth({
          status: 'ok',
          error: null,
        });
      } catch (error) {
        setHealth({
          status: 'error',
          // @ts-ignore
          error,
        });
      }
    };

    fetchHealth();
  }, [rpcUrl]);

  return health;
};
