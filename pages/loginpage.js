export class LoginPage {

    constructor(page) {
        this.page = page;
        this.username = this.page.getByRole('textbox', { name: 'Enter Email' });
        this.password = this.page.getByRole('textbox', { name: 'Enter Password' });
        this.loginButton = this.page.getByRole('button', { name: 'Sign in' });
        // this.invalidErrorMessage=this.page.getByText("USER Email Doesn't Exist");
        
        this.emptyErrorMessage=this.page.getByText("Email and Password is required");
            this.locators = {errorMessage: this.page.getByText("USER Email Doesn't Exist")};
        }


    async gotoLoginPage() {
        
         await this.page.goto('https://freelance-learn-automation.vercel.app/login');
                 console.log(process.env.BASE_URL);

        // await this.page.goto(process.env.BASE_URL + '/login');
        
    }


    async login(username, password) {
        await this.username.fill(
            username);
        await this.password.fill(
            password
        );
        await this.loginButton.click()

    }

}