# Introduction

Welcome to **AuthMark**, the best platform for lightweight static site authentication.

AuthMark allows your application to **verify that a user is logged in on a website**, without exposing any sensitive information. Using a **Cloudflare Worker-based pipeline**, AuthMark performs a quick check on the user’s session or cookie, then returns a **unique account identifier** that you can safely use in your systems.

### How It Works

1. **Website → Cookie Check**
   The user interacts with your website, initiating a session or login check.

2. **Cloudflare Worker**
   AuthMark validates the user’s session securely, without exposing sensitive data.

3. **Cookie Check → Website**
   Your website receives a **unique ACCID** representing that account. This ACCID can be used for authentication, authorization, or internal mapping—no personal data required.

### Key Features

* **Privacy-first** – Returns only a unique account ID (ACCID), never passwords or personal information.
* **Secure and fast** – Uses Cloudflare Workers for quick, reliable validation.
* **Multi-website support** – Works with different websites’ login sessions, allowing the same access token to be used across multiple platforms.
* **Simple integration** – Just send a request, receive an ACCID, and use it in your app.
* **User session mapping** – Optionally track a user’s session across multiple websites using ACCIDs, without exposing sensitive information.

### Practical Uses

AuthMark is ideal for:

1. **Web Apps & Dashboards** – Authenticate users without handling passwords.
2. **Verification** – Verify users securely.
3. **SaaS Products** – Map logged-in users to internal systems with ACCIDs.
4. **Internal Tools** – Grant access based on verified website sessions without storing sensitive info.
5. **Cross-system session mapping** – Track or analyze user sessions across multiple services safely using ACCIDs.

> AuthMark focuses on **account validation and ID generation**, making it a safe, simple way to integrate verified login sessions into your applications.