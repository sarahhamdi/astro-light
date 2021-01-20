export const ASTRO_URL = 'http://192.168.0.5/rest/api/v1/settings'

type MethodType = 'POST' | 'GET' | 'PATCH' | 'DELETE'

export const apiReq = async (
  url: string,
  method: MethodType,
  data: {} = {}
) => {
  console.log(`[${method}] - ${url}`)

  const response = await fetch(url, {
    method,
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  })

  console.log(`[${method}] - ${url}
    response: ${response}`)
  return response // already returns json, so no need for response.json()
}
