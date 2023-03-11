import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
    timeout: 60000,
    retries: 0,
    testDir: 'tests/api',
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
        }
    ]
})
