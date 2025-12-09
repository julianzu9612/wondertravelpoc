
const { chromium } = require('playwright');

(async () => {
    console.log('Starting manual Playwright test...');
    try {
        console.log('Launching browser...');
        const browser = await chromium.launch({
            headless: true,
            executablePath: '/home/jzuluaga/.cache/ms-playwright/chromium-1194/chrome-linux/chrome',
            args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
        });
        console.log('Browser launched successfully.');

        const context = await browser.newContext();
        const page = await context.newPage();

        console.log('Navigating to example.com...');
        await page.goto('https://example.com');
        console.log('Page title:', await page.title());

        await browser.close();
        console.log('Test completed successfully.');
    } catch (error) {
        console.error('Test failed:', error);
        process.exit(1);
    }
})();
