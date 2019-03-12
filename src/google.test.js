import puppeteer from 'puppeteer'

let browser;
let page;

describe('Google', () => {
    beforeAll(async () => {
        //    browser = await puppeteer.launch({ headless: false })
        await page.goto('https://google.com')
    })
    // afterEach(async () => {
    //     await browser.close()
    // })
    it('should display "google" text on page', async () => {
        await expect(page).toMatch('google')
        // await page.goto('https://google.com')
        // await page.evaluate(() => {
        //     debbuger
        // })
    })
})