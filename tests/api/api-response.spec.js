import { test, expect } from '@playwright/test'

test.describe('API tests', () => {
    const baseUrl = 'https://api.punkapi.com/v2/beers'
    
    test('API test - validate reponse data contains 15 beer objects', async ({ request }) => {
        const response = await request.get(`${baseUrl}?page1&per_page=15`)
        const responseBody = JSON.parse(await response.text())
        expect(responseBody.length).toBe(15)
    })

    test('API test - validate reponse data contains our required properties', async ({ request }) => {
        const response = await request.get(`${baseUrl}?page1&per_page=15`)
        const responseBody = JSON.parse(await response.text())
        expect(responseBody[0].name).toBe("Buzz")
        expect(responseBody[0].id).toBe(1)
        expect(responseBody[0].abv).toBe(4.5)
        expect(responseBody[0].volume.value).toBe(20)
        expect(responseBody[0].volume.unit).toBe('litres')
        expect(responseBody[0].ingredients.malt.length).toBeGreaterThan(1)
    })
    
})