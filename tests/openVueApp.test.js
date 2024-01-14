// Open browser
// redirect to vue 3 applicaion
// Check that the page has loaded
// app url "http://localhost:8080/"
const h1Text = "Welcome to Your Vue.js App"

// @ts-check
const { test, expect } = require('@playwright/test');

// Opening Vue applicatiom
test('Opening page', async ({page}) => {
    await page.goto('http://localhost:8080');
    // Expect page to have the heading Welcome to your Vue.js App
    await expect (page).toHaveTitle(/my-vue-project/)
});
// Now that the Vue 3 app has loaded, i can test for the button to be clicked on
test('Clicking on button, testing to see if profile picyure loads', async ({page}) => {
    await page.goto('http://localhost:8080');
    // await click of the button
    await page.click('a.button-link');
    // await loading of new page
    await page.goto('https://github.com/mattkirke')
    // expect to have page title of my GitHub
    await expect (page).toHaveTitle(/mattkirke/)
    // Search for my frofile image by it's ALT text
    await page.screenshot();
    await page.getByAltText("View mattkirke's full-sized avatar").click()
});