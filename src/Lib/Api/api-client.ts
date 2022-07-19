import Parse from 'parse';

export function apiConfig() {
  const appId = 'V6wPTJz2AHjytWYG';
  const javascriptKey = 'TEpbYs8WnLF36GbM';
  const publicServerURL = 'https://parse.wordpress-studio.io/parse';
  Parse.initialize(appId, javascriptKey);
  Parse.serverURL = publicServerURL;
}
