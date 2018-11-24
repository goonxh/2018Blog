let baseUrl = '';

if(process.env.NODE_ENV === 'development') {
  baseUrl = '/api';
} else {
  baseUrl = 'https://xiehao.xin:8088';
}

export {
  baseUrl,
}
