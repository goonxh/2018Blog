let baseUrl = '';

if(process.env.NODE_ENV === 'development') {
  baseUrl = '/api';
} else {
  baseUrl = 'http://xiehao.xin:8088/api';
}

export {
  baseUrl,
}
