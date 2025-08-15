import { useRouter } from 'next/navigation';

export function useRouterUtils() {
  const router = useRouter();

  const navigate = (path: string) => router.push(path);
  const replace = (path: string) => router.replace(path);
  const back = () => router.back();

  return { navigate, replace, back };
}
