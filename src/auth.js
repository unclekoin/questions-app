export function getAuthForm() {
  return `
    <form class="mui-form" id="auth-form">
        <div class="mui-textfield mui-textfield--float-label">
            <input type="email" id="email" required>
            <label for="email">Email</label>
        </div>
        <div class="mui-textfield mui-textfield--float-label">
            <input type="password" id="pasword" required>
            <label for="pasword">Password</label>
        </div>
        <button type="submit" class="mui-btn mui-btn--raised mui-btn--primary">Login</button>
    </form>
  `
}
