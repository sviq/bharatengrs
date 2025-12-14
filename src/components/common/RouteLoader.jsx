'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Loader from './Loader';

export default function RouteLoader({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Start loading
    setLoading(true);

    // Simulate page load effect
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 400); // smooth fade-out

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
}
