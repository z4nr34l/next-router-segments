export interface RouteSegment {
  slug: string;
  url: string;
  name: string;
}

export const getRouteSegments = (pathname: string): RouteSegment[] => {
  const segmentsSet = new Set<string>();
  pathname.split('/').filter((segment) => {
    if (segment || segment === '') {
      segmentsSet.add(segment);
      return true;
    }
    return false;
  });
  
  return Array.from(segmentsSet).map((segment, index) => {
    const slug = segment || 'home';
    const urlSegments = Array.from(segmentsSet).slice(0, index + 1);
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
