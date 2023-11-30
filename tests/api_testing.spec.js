import { expect, test } from '@playwright/test'
import GetUrl from '../utils/getUrl'
import ApiEndpoints from '../endPoints/endPoints'

test('API get request', async ({ request }) => {
    const getUrl = new GetUrl();
    const url = getUrl.getCurrentURL(ApiEndpoints.GET.endpoint);
    const response = await request.get(url)
    expect(response.status()).toBe(200)
})

test('API Post request', async ({ request }) => {
    const getUrl = new GetUrl();
    const url = getUrl.getCurrentURL(ApiEndpoints.USER.endpoint);
    const response = await request.post(url, {
        data: {
            "name": "Imran",
            "job": "SQA"
        }
    })
    expect(response.status()).toBe(201)
    const text = await response.text();
    expect(text).toContain('Imran');
})

test('API Put request', async ({ request }) => {
    const getUrl = new GetUrl();
    const url = getUrl.getCurrentURL(ApiEndpoints.USER.endpoint + 2);
    const response = await request.post(url, {
        data: {
            "name": "Imran",
            "job": "SQA Engineer"
        }
    })
    expect(response.status()).toBe(201)
    const text = await response.text();
    expect(text).toContain('SQA Engineer');
})


test('Demo API DELETE Request', async ({ request }) => {
    const getUrl = new GetUrl();
    const url = getUrl.getCurrentURL(ApiEndpoints.USER.endpoint + 2);
    const response = await request.delete(url)
    expect(response.status()).toBe(204);
})