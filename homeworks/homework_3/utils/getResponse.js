import fetch from 'node-fetch';

import { getUriWithParams } from "./getUriWithParams.js";

export async function getResponse(endpoint, method, params) {
  const uri = getUriWithParams(endpoint, params);
  const response = await fetch(uri, {
    method: method
  });

  return response.json();
}
