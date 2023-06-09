# Next router segments

## About package

I've made this package for parsing Next.js `pathname` to structured segments, which you can use in various ways, for
example for creating breadcrumbs for current page.

## Usage

### Next.js (Pages router)

```tsx
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
