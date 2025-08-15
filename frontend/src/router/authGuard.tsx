import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface AuthGuardProps {
  isAuthenticated: boolean;
  redirectPath?: string;
  children: React.ReactNode;
}

export default function AuthGuard({ isAuthenticated, redirectPath = '/login', children }: AuthGuardProps) {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace(redirectPath);
    }
  }, [isAuthenticated, redirectPath, router]);

  if (!isAuthenticated) return null;
  return <>{children}</>;
}
