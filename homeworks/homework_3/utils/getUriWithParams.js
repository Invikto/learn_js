export function getUriWithParams(endpoint, params) {
  let uri = endpoint;

  Object.keys(params).forEach((item, index) => {
    !index ? uri = uri.concat('?', item, '=', params[item]) :
      uri = uri.concat('&', item, '=', params[item]);
  });

  return uri;
}
