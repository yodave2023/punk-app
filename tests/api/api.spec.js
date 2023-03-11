import { test, expect } from '@playwright/test'

test.describe('API tests', () => {
    const baseUrl = 'https://api.punkapi.com/v2/beers'
    
    test('API test - Assert Response Status', async ({ request }) => {
        const response = await request.get(baseUrl)
        expect(response.status()).toBe(200)
    })

    test('API test - validate last beer has id of 325', async ({ request }) => {
        const response = await request.get(`${baseUrl}/325`)
        expect(response.status()).toBe(200)
    })

    test('API test - confirm no beer with id of 326', async ({ request}) => {
        const response = await request.get(`${baseUrl}/326`)
        expect(response.status()).toBe(404)
    })

    test('API test - confirm page 22 with per page 15 works', async ({request}) => {
        const response = await request.get(`${baseUrl}?page22&per_page=15`)
        expect(response.status()).toBe(200)
    })
})
