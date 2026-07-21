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
  - generic [ref=e20]:
    - img "Login" [ref=e22]
    - generic [ref=e23]:
      - generic [ref=e25]:
        - heading "Sign In" [level=2] [ref=e26]
        - textbox "Enter Email" [ref=e27]
        - textbox "Enter Password" [ref=e28]
        - button "Sign in" [ref=e29] [cursor=pointer]
        - link "New user? Signup" [ref=e30] [cursor=pointer]:
          - /url: /signup
      - generic [ref=e31]:
        - heading "Connect with us" [level=2] [ref=e32]
        - generic [ref=e33] [cursor=pointer]:
          - link [ref=e34]:
            - /url: https://youtube.com/MukeshOtwani
            - img [ref=e35]
          - link [ref=e38]:
            - /url: https://twitter.com/MukeshOtwani
            - img [ref=e39]
          - link [ref=e41]:
            - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
            - img [ref=e42]
          - link [ref=e44]:
            - /url: https://www.facebook.com/groups/256655817858291
            - img [ref=e45]
          - link [ref=e47]:
            - /url: https://learn-automation/reddit
            - img [ref=e48]
  - generic [ref=e62]:
    - generic [ref=e63]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=e64]
      - heading "©2023 All rights reserved" [level=2] [ref=e65]
    - generic [ref=e66] [cursor=pointer]:
      - link [ref=e67]:
        - /url: https://youtube.com/MukeshOtwani
        - img [ref=e68]
      - link [ref=e71]:
        - /url: https://twitter.com/MukeshOtwani
        - img [ref=e72]
      - link [ref=e74]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
        - img [ref=e75]
      - link [ref=e77]:
        - /url: https://www.facebook.com/groups/256655817858291
        - img [ref=e78]
```

# Test source

```ts
  1  | // import dotenv from 'dotenv';
  2  | 
  3  | // dotenv.config();
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
  20 | await this.page.goto('https://freelance-learn-automation.vercel.app/login');
  21 |     }
  22 | 
  23 | 
  24 |     async loginCredentials() {
  25 | 
  26 | 
> 27 |         await this.page.fill(
     |                         ^ Error: page.fill: value: expected string, got undefined
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