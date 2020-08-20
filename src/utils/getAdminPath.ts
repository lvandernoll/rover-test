export const adminPrefix = '/admin';

export function getAdminPath(url = ''): string {
  return adminPrefix + url;
}
