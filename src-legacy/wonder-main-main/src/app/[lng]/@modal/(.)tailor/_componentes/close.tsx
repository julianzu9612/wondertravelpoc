'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export function CloseModal({ children, className }: { children?: React.ReactNode, className?: string }) {
  const router = useRouter();

  return (
    <>
      <Image
        src='/assets/icons/close-white.svg'
        width={28}
        height={28}
        onClick={() => {
          router.back();
        }}
        alt=''
        className={className}
      />
      <div>{children}</div>
    </>
  );
}
