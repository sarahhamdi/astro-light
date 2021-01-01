export const ASTRO_URL = 'http://192.168.0.5/rest/api/v1/settings'

type MethodType = 'POST' | 'GET' | 'PATCH' | 'DELETE'

export const apiReq = async (
  url: string = ASTRO_URL,
  method: MethodType = 'POST',
  data: {} = {}
) => {
  const response = await fetch(url, {
    method,
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  })
  return response // already returns json, so no need for response.json()
}
