import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
    timeout: 60000,
    retries: 0,
    testDir: 'tests/e2e',
    use: {
        headless: true,
        actionTimeout: 15000,
        ignoreHTPSErrors: true,
        video: 'off',
        screenshot: 'off',
    },
    projects: [
        {
            name: 'chrome',
            use: {...devices['Desktop Chrome'] },
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        },
        {
            name: 'mobileChrome',
            use: { ...devices['Galaxy S8'] },
        },
        {
            name: 'mobileSafari',
            use: { ...devices['iPhone 12 Pro'] },
        }       
    ]
})
