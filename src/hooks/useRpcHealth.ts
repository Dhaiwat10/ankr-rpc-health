import { useEffect, useState } from 'react';

interface RpcHealth {
  status: 'ok' | 'error' | 'unknown';
  error?: string | null;
  responseTime?: number;
}

export const useRpcHealth = (rpcUrl: string) => {
  const [health, setHealth] = useState<RpcHealth>({
    status: 'unknown',
    error: null,
  });

  useEffect(() => {
    const fetchHealth = async () => {
      try {
        const startTime = window.performance.now();
        const response = await fetch(rpcUrl, {
          // @ts-expect-error
          body: [{ method: 'eth_blockNumber', id: 127, jsonrpc: '2.0' }],
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
        });
        const endTime = window.performance.now();
        const responseTime = Math.round(endTime - startTime);
        setHealth({
          status: 'ok',
          error: null,
          responseTime,
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
