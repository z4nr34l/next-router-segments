export const getRouteSegments = (pathname: string) => {
  const segments = pathname.split('/').filter((segment) => segment || segment === ''); // Keep empty segments, including the root segment
  
  return segments.map((segment, index) => {
    const slug = segment || 'home'; // Use '/' as the slug for the root segment
    const url = `/${segments.slice(0, index + 1).join('/')}`; // Construct the URL for each segment
    const name = segment
      ? segment
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
        .join(' ')
      : 'Home'; // Use 'Home' as the name for the root segment
    
    return {slug, url, name};
  });
};
