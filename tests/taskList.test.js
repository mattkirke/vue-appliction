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

// Testing for adding new task
test('add new task', async ({page}) => {
    await page.goto('http://localhost:8080');
    // Check if text has been added to input box
    await page.fill('input.inputBox', 'task added test')
    // testing for button click
    await page.click('button.buttonLinkAdd')
    // check if task appears in task list
    await page.textContent('li.taskItem:has-text("task added test")')
});

// Test to mark as completed by clicking on task and it turning green
test('task completed', async ({page}) => {
    await page.goto('http://localhost:8080');
    await page.click(".list li")
    await page.waitForTimeout(1000);
    // Assert that the color is green
    //ChatGCPT solution
    // Use page.$eval to get the color style of the clicked task
    const color = await page.$eval('.list li', (task) => {
        return window.getComputedStyle(task).color;
    });

    // Assert that the color is green
    expect(color).toBe('rgb(0, 128, 0)');  
})

//testing if list updates
test('test checking if list updatess', async ({ page }) =>{
    await page.goto('http://localhost:8080');
    await page.fill('input.inputBox', 'task added test')
    await page.click('button.buttonLinkAdd')
    //page.locator to find 'task added test' in list
    const taskAdded = await page.locator('.list li:has-text("task added test")');
    // if not null, task will exisit in list
    await expect(taskAdded).not.toBeNull();

})
