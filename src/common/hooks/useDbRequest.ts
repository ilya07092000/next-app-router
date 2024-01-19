import { useCallback, useState } from 'react';

/**
 * this hook needs to make db changes in server actions.
 * it returns "makeRequest" async fn which you can call to make request,
 * loading and error states are handled by this hook as well.
 */
const useDbRequest = ({
  requestFn,
  onError,
}: {
  requestFn: (params?: any) => any;
  onError?: (params?: any) => any;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const makeRequest = useCallback(
    async (...params: any[]) => {
      try {
        setIsLoading(true);
        const result = await requestFn(...params);
        return result;
      } catch (e) {
        onError?.(e);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [requestFn, onError],
  );

  return { makeRequest, isLoading };
};

export default useDbRequest;
