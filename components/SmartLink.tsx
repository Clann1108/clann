import Link from 'next/link';

export default function SmartLink({ href, ...props }: React.ComponentProps<typeof Link>) {
  let finalHref = href;
  if (typeof href === 'string' && href.startsWith('/') && href !== '/') {
    finalHref = `${href}.html`;
  }
  return <Link href={finalHref} {...props} />;
}
