# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> login test
- Location: tests\login.spec.js:3:5

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "undefined/login", waiting until "load"

```

# Test source

```ts
  1  | import dotenv from 'dotenv';
  2  | 
  3  | dotenv.config();
  4  | 
  5  | export class LoginPage {
  6  | 
  7  |     constructor(page) {
  8  | 
  9  |         this.page = page;
  10 | 
  11 |         this.username = '#email1';
  12 |         this.password = '#password1';
  13 |         this.loginButton = "//button[text()='Sign in']";
  14 | 
  15 |     }
  16 | 
  17 | 
  18 |     async gotoUrl() {
  19 | 
> 20 | await this.page.goto(process.env.BASE_URL + '/login');
     |                 ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  21 |     }
  22 | 
  23 | 
  24 |     async loginCredentials() {
  25 | 
  26 | 
  27 |         await this.page.fill(
  28 |             this.username,
  29 |             process.env.LOGIN_USERNAME
  30 |         );
  31 | 
  32 | 
  33 |         await this.page.fill(
  34 |             this.password,
  35 |             process.env.LOGIN_PASSWORD
  36 |         );
  37 | 
  38 | 
  39 |         await this.page.click(
  40 |             this.loginButton
  41 |         );
  42 | 
  43 | 
  44 |         await this.page.screenshot({
  45 |             path: 'screenshots/homepage.png'
  46 |         });
  47 | 
  48 |     }
  49 | 
  50 | 
  51 |     async takeScreenshot() {
  52 | 
  53 |         await this.page.screenshot({
  54 |             path: 'screenshots/login.png'
  55 |         });
  56 | 
  57 |     }
  58 | 
  59 | }
```