# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> login test
- Location: tests\login.spec.js:3:5

# Error details

```
Error: page.fill: value: expected string, got undefined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6] [cursor=pointer]:
        - img "logo" [ref=e7]
        - heading "Learn Automation Courses" [level=1] [ref=e8]
      - generic [ref=e9]:
        - img "menu" [ref=e10] [cursor=pointer]
        - generic [ref=e11]:
          - generic [ref=e12]:
            - text: Learn Automation Courses
            - img "delete" [ref=e13] [cursor=pointer]
          - generic [ref=e14]:
            - link "Home" [ref=e15] [cursor=pointer]:
              - /url: /
              - generic [ref=e16]: Home
            - link "Practise" [ref=e17] [cursor=pointer]:
              - /url: /practise
              - generic [ref=e18]: Practise
            - button "Log in" [ref=e19] [cursor=pointer]
  - generic [ref=e22]:
    - generic [ref=e23]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=e24]
      - heading "©2023 All rights reserved" [level=2] [ref=e25]
    - generic [ref=e26] [cursor=pointer]:
      - link [ref=e27]:
        - /url: https://youtube.com/MukeshOtwani
        - img [ref=e28]
      - link [ref=e31]:
        - /url: https://twitter.com/MukeshOtwani
        - img [ref=e32]
      - link [ref=e34]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
        - img [ref=e35]
      - link [ref=e37]:
        - /url: https://www.facebook.com/groups/256655817858291
        - img [ref=e38]
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
  8  |         this.page = page;
  9  |         this.url=process.env.BASE_URL;
  10 |         this.username = '#email1';
  11 |         this.password = '#password1';
  12 |         this.loginButton = "//button[text()='Sign in']";
  13 |     }
  14 | 
  15 | 
  16 |  async gotoUrl() {
  17 | 
  18 |         await this.page.goto(
  19 |             `${this.url}/login`
  20 |         );
  21 | 
  22 |     }
  23 | 
  24 | 
  25 |     async loginCredentials() {
  26 | 
  27 |        console.log("LOGIN USER:", process.env.LOGIN_USERNAME);
  28 | console.log("LOGIN PASS:", process.env.LOGIN_PASSWORD);
  29 | 
> 30 |   await this.page.fill(
     |                   ^ Error: page.fill: value: expected string, got undefined
  31 |     this.username,
  32 |     process.env.LOGIN_USERNAME
  33 | );
  34 | 
  35 | await this.page.fill(
  36 |     this.password,
  37 |     process.env.LOGIN_PASSWORD
  38 | );
  39 | 
  40 |         await this.page.click(this.loginButton);
  41 | 
  42 |         await this.page.screenshot({
  43 |             path: 'screenshots/homepage.png'
  44 |         });
  45 |     }
  46 | 
  47 | 
  48 |     async takeScreenshot() {
  49 | 
  50 |         await this.page.screenshot({
  51 |             path:'screenshots/login.png'
  52 |         });
  53 | 
  54 |     }
  55 | }
```