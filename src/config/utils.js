let baseUrl = '', xpppUrl = '';

if(process.env.NODE_ENV === 'development') {
  baseUrl = '/api';
  xpppUrl = '/xapi';
} else {
  baseUrl = window.location.origin+ '/api';
  xpppUrl = window.location.origin+ '/xapi';
}

export {
  baseUrl,xpppUrl
}
