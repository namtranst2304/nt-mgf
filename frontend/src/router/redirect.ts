import { useRouter } from 'next/navigation';

export function redirect(path: string) {
  const router = useRouter();
  router.replace(path);
}
