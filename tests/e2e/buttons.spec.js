import { test, expect } from '@playwright/test'

test.describe('Buttons test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173/')
    })

    test('Click on next button validate p2', async ({ page }) => {
        await page.click('text=Next')
        const pageNumbering = page.locator('.btn-container p')
        await expect(pageNumbering).toContainText("2 of 22")
    })

    test('Click on next button validate p4', async ({ page }) => {
        await page.click('text=Next')
        await page.click('text=Next')
        await page.click('text=Next')
        const pageNumbering = page.locator('.btn-container p')
        await expect(pageNumbering).toContainText("4 of 22")
    })

    test('Click on Prev button validate p22', async ({ page }) => {
        await page.click('text=Prev')
        const pageNumbering = page.locator('.btn-container p')
        await expect(pageNumbering).toContainText("22 of 22")
    })

    test('Click on Prev button page 21', async ({ page }) => {
        await page.click('text=Prev')
        await page.click('text=Prev')
        const pageNumbering = page.locator('.btn-container p')
        await expect(pageNumbering).toContainText("21 of 22")
    })
})
