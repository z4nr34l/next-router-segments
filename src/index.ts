export const getRouteSegments = (pathname: string) => {
  const segments = pathname.split('/').filter((segment) => segment || segment === '');
  
  return segments.map((segment, index) => {
    const slug = segment || 'home';
    const urlSegments = segments.slice(0, index + 1);
    const url = urlSegments.length > 1 ? `${urlSegments.join('/')}` : '/';
    const name = segment
      ? segment
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      : 'Home';
    
    return {slug, url, name};
  });
};
