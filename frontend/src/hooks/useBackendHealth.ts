import { useEffect, useState } from 'react';

interface HealthResponse {
  message: string;
}

export function useBackendHealth() {
  const [message, setMessage] = useState<string>('Loading...');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/health')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data: HealthResponse) => {
        setMessage(data.message);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to connect to backend');
        setLoading(false);
      });
  }, []);

  return { message, loading, error };
}
