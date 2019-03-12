import puppeteer from "puppeteer";

describe("Google", () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
  });
  afterEach(async () => {
    // await browser.close();
  });

  it("should load the page", async () => {
    await page.goto("https://www.google.com", { timeout: 50000 });
    await page.evaluate(() => {
      debbuger;
    });
  });
});
