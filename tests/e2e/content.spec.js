import { test, expect } from '@playwright/test'

test.describe('Page content', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173/')
    })

    test(`Verify Punk Ale's heading`, async ({ page }) => {
        const pageHeading = page.locator('h1')
        await expect(pageHeading).toContainText("Punk Ale's")
    })

    test(`Verify beer title`, async ({ page }) => {
        const articleTitle = page.locator('.beers article .title').first()
        await expect(articleTitle).toContainText("Buzz")
    })

    test(`Verify beer malts`, async ({ page }) => {
        const articleInfo = page.locator('.beers article .ingredients').first()
        await expect(articleInfo).toContainText("malts: Maris")
    })
    
    test(`Verify beer abv & litres`, async ({ page }) => {
        const articleInfo = page.locator('.beers article .info').first()
        await expect(articleInfo).toContainText("abv: 4.5% | 20 litres")
    })
})