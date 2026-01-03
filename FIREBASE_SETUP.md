# Firebase Google Login Setup Guide

This guide will help you set up Firebase Google Authentication with domain restriction for @iimranchi.ac.in email addresses.

## Prerequisites

- A Google account
- Access to [Firebase Console](https://console.firebase.google.com/)

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **Add project** (or **Create a project**)
3. Enter a project name (e.g., "Margin App")
4. Optionally enable Google Analytics (recommended for production)
5. Click **Create project**

## Step 2: Enable Google Authentication

1. In your Firebase project, go to **Build** → **Authentication** in the left sidebar
2. Click **Get started** (if this is your first time)
3. Go to the **Sign-in method** tab
4. Click on **Google** in the providers list
5. Toggle **Enable** to ON
6. Set a **Project support email** (your email address)
7. Click **Save**

## Step 3: Register Your Web App

1. In Firebase Console, click the **Settings gear** icon → **Project settings**
2. Scroll down to the **Your apps** section
3. Click the **Web** icon (`</>`) to add a web app
4. Enter an app nickname (e.g., "Margin Web App")
5. Optionally check **Firebase Hosting** if you plan to deploy there
6. Click **Register app**

## Step 4: Get Your Firebase Configuration

After registering your app, Firebase will show you a configuration object that looks like this:

\`\`\`javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
\`\`\`

**Keep this information safe!**

## Step 5: Configure Environment Variables

1. Create a `.env` file in the root of your project (same level as `package.json`)
2. Copy the contents from `.env.example`
3. Fill in your Firebase configuration values:

\`\`\`env
VITE_FIREBASE_API_KEY=AIza...
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123
\`\`\`

⚠️ **Important**: Never commit the `.env` file to Git. It's already listed in `.gitignore`.

## Step 6: Configure Authorized Domains

1. In Firebase Console, go to **Authentication** → **Settings** tab
2. Scroll to **Authorized domains**
3. Add your domains:
   - `localhost` (already there by default)
   - Your production domain (e.g., `your-app.netlify.app` or `your-domain.com`)

## Step 7: Test Your Setup

1. Start your development server:
   \`\`\`bash
   npm run dev
   \`\`\`

2. Open the app in your browser (usually `http://localhost:5173`)

3. Click "Sign in with Google"

4. Try signing in with:
   - ✅ An `@iimranchi.ac.in` email (should work)
   - ❌ Any other email domain (should be rejected)

## How Domain Restriction Works

The app implements **two layers** of domain restriction:

### Layer 1: Google Provider Hint
In `src/firebase/config.ts`, we use the `hd` parameter:
\`\`\`typescript
googleProvider.setCustomParameters({
  hd: 'iimranchi.ac.in'
});
\`\`\`

This **suggests** to Google that only @iimranchi.ac.in accounts should be shown, but users can still bypass this.

### Layer 2: Server-Side Domain Validation
In `src/contexts/AuthContext.tsx`, we verify the email domain after sign-in:
\`\`\`typescript
const domain = email.split('@')[1];
if (domain !== ALLOWED_DOMAIN) {
  await firebaseSignOut(auth);
  throw new Error(\`Only \${ALLOWED_DOMAIN} email addresses are allowed.\`);
}
\`\`\`

This **enforces** the domain restriction and signs out any unauthorized users.

## Troubleshooting

### "Firebase config is missing"
- Make sure you created the `.env` file
- Check that all variables start with `VITE_`
- Restart the dev server after creating/modifying `.env`

### "Popup was blocked"
- Allow popups for your localhost/domain in browser settings
- Or try using `signInWithRedirect` instead (requires code changes)

### "Domain not authorized"
- Add your domain to **Authorized domains** in Firebase Console
- For localhost, it should work by default

### Users from other domains can still sign in
- Check that the domain validation code in `AuthContext.tsx` is working
- Look for errors in the browser console

## Security Best Practices

1. **Never hardcode** Firebase config in your code
2. **Always use** environment variables
3. **Keep** your `.env` file out of version control
4. For production, set environment variables in your hosting platform (Netlify, Vercel, etc.)

## Next Steps

Once authentication is working, you can:
- Migrate from localStorage to Firestore for cloud storage
- Add user profiles and settings
- Implement data sync across devices
- Add social features like course sharing

## Support

If you encounter issues, check:
- [Firebase Authentication Docs](https://firebase.google.com/docs/auth)
- [Firebase Console](https://console.firebase.google.com/) for error logs
- Browser console for client-side errors
