# Next router segments

## About package

I've made this package for parsing Next.js `pathname` to structured segments, which you can use in various ways, for
example for creating breadcrumbs for current page.

## Usage

### Next.js (App Router)

```tsx
"use client";

import usePathname from "next/navigation";
import { getRouteSegments } from 'next-router-segments';

export default function Page() {
  const {pathname} = usePathname();
  const segments = getRouteSegments(pathname)
  
  return (
    <pre>
      {JSON.stringify(segments, null, 2)}
    </pre>
  )
}
```

Info: pathname is only available in client, so usage for client component and client pages is exacly same.

### Next.js (Pages Router)

```tsx
import useRouter from "next/router";
import { getRouteSegments } from 'next-router-segments';

export default function Page() {
  const {pathname} = useRouter();
  const segments = getRouteSegments(pathname)
  
  return (
    <pre>
      {JSON.stringify(segments, null, 2)}
    </pre>
  )
}
```
