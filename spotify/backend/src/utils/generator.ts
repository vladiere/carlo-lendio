export const generateRandomString = (length: number) => {
  let text: string = '';
  let possible: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let index = 0; index < length; index++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}
