# Quick Start

AuthMark allows you to **add authentication to your website** with minimal setup. Users log in via OAuth providers, and your app receives a **unique Account ID (ACCID)** stored in a cookie.

---

## 1. Include the Script

Add this to your HTML `<head>`:

```html
<script src="https://authmark.github.io/Handler/latest.js" defer></script>
```

> This script automatically handles login/logout buttons, the AuthMark Provider Chooser, and cookie management.

---

## 2. Add Login & Logout Placeholders

Add these `<div>` elements where you want your login/logout buttons:

```html
<div id="authmark-ctrl_logout"></div>
<div id="authmark-ctrl_login_microsoft"></div>
<div id="authmark-ctrl_login_discord"></div>
<div id="authmark-ctrl_login_google"></div>
<div id="authmark-ctrl_login_github"></div>
<div id="authmark-ctrl_chooser"></div>
```

**Notes:**

* The script automatically detects which divs exist and renders buttons accordingly.
* You must have at least **one provider div** (`authmark-ctrl_login_[provider]`) to display a login button.
* The `authmark-ctrl_chooser` div renders the **AuthMark Provider Chooser** button.
* The `authmark-ctrl_logout` div renders the logout button.
* You can style them however you like; default styles are applied if no custom styles are provided.

---

## 3. How It Works

* AuthMark automatically renders login buttons for each provider div, a logout button, and the provider chooser.
* When a user logs in, a **unique ACCID** is stored in a cookie named:

```text
accid
```

* You can access it in JavaScript like this:

```js
const accid = document.cookie
  .split('; ')
  .find(row => row.startsWith('accid='))
  ?.split('=')[1];

console.log(accid);
```

---

## 4. Example HTML Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AuthMark Demo</title>
  <script src="https://authmark.github.io/auth.js" defer></script>
  <style>
    /* Optional: default styling for buttons */
    .authmark-btn {
      padding: 12px 20px;
      border-radius: 8px;
      cursor: pointer;
      margin: 5px;
      border: 1px solid #333;
      background: #f0f0f0;
      font-weight: 600;
    }
    .authmark-btn:hover { background: #ddd; }

    #authmark-ctrl_logout .authmark-btn { background: #ef4444; color: white; }
    #authmark-ctrl_login_google .authmark-btn { background: #4285F4; color: white; }
    #authmark-ctrl_login_github .authmark-btn { background: #333; color: white; }
    #authmark-ctrl_login_microsoft .authmark-btn { background: #0078D4; color: white; }
    #authmark-ctrl_login_discord .authmark-btn { background: #7289DA; color: white; }
  </style>
</head>
<body>

<h1>AuthMark Demo</h1>

<div id="authmark-ctrl_logout"></div>
<div id="authmark-ctrl_login_google"></div>
<div id="authmark-ctrl_login_github"></div>
<div id="authmark-ctrl_login_microsoft"></div>
<div id="authmark-ctrl_login_discord"></div>
<div id="authmark-ctrl_chooser"></div>

<script>
  // AuthMark Script Initialization
  window.addEventListener('DOMContentLoaded', () => {
    AuthMark.init(); // auto-detects divs and handles ACCID cookie
  });
</script>

</body>
</html>
```

---

## 5. Accessing the ACCID

The **unique account ID** is stored in the `accid` cookie and can be used to verify users, authorize content, or map accounts in your backend:

```js
const accid = document.cookie
  .split('; ')
  .find(row => row.startsWith('accid='))
  ?.split('=')[1];

if(accid) {
  console.log('User ACCID:', accid);
} else {
  console.log('User not logged in');
}
```

---

### Notes

* You can **customize button styles** freely.
* All login/logout state management is handled automatically by the script.
* This integration works with **multi-provider OAuth** using the AuthMark Cloudflare Worker.

---

✅ With this setup, your site has a **ready-to-use, privacy-focused authentication system** that stores only a safe ACCID in cookies and leaves styling completely customizable.
