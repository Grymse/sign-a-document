export const userRoute = (userID?: string) => {
  if(userID === undefined || userID === null) return homepageRoute();
  return `/user/${userID}`;
}

export const documentRoute = (documentID: string) => {
  return `/${documentID}`;
}

export const homepageRoute = () => {
  return '/';
}

export const loginRoute = () => {
  return '/login';
}