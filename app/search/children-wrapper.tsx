'use client';


// Ensure children are re-rendered when the search query changes
export default function ChildrenWrapper({ children }: { children: React.ReactNode }) {
  return <></>;
  // const searchParams = useSearchParams();
  // return <Fragment key={searchParams.get('q')}>{children}</Fragment>;
}
