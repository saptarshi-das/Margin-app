# Firestore Setup Checklist

Follow these steps to complete the database setup:

## ✅ Step 1: Verify Firebase Configuration

Make sure your `.env` file has all the required Firebase credentials:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## ✅ Step 2: Enable Firestore Database

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Click **Firestore Database** in the left sidebar
4. Click **Create Database**
5. Choose **Start in production mode** (we'll add security rules next)
6. Select location: **asia-south1** (or closest to India)
7. Click **Enable**

## ✅ Step 3: Configure Security Rules

In Firestore console:

1. Go to **Rules** tab
2. Replace the default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow users to read/write only their own course data
    match /userCourses/{userId} {
      allow read, write: if request.auth != null 
                          && request.auth.uid == userId
                          && request.auth.token.email.matches('.*@iimranchi.ac.in$');
    }
  }
}
```

3. Click **Publish**

These rules ensure:
- ✅ Only authenticated users can access data
- ✅ Users can only access their own courses
- ✅ Only @iimranchi.ac.in emails allowed

## ✅ Step 4: Test the Implementation

### Test Online Sync

1. Login to the app
2. Add a course
3. Open browser DevTools (F12) → Console tab
4. Look for: `✅ Saved to server and local storage`
5. Open the app in another browser/device with the same account
6. You should see the course appear automatically!

### Test Offline Mode

1. Open DevTools (F12) → Network tab
2. Select **Offline** from throttling dropdown
3. Should see orange "Offline Mode" indicator
4. Add/edit courses - should work fine!
5. Check Console: `📴 Offline - saved to local storage only`
6. Select **Online** again
7. Should see green "Back Online" briefly
8. Check Console: `✅ Synced local changes to server`

## ✅ Step 5: Verify Firestore Data

1. Go to Firebase Console → Firestore Database
2. Click on **Data** tab
3. You should see a collection named `userCourses`
4. Click on a document (your userId)
5. You should see:
   - `courses`: Array of your courses
   - `updatedAt`: Last update timestamp
   - `userId`: Your user ID

## 🎯 Success Checklist

- [ ] Firestore database created
- [ ] Security rules configured
- [ ] Can add/edit/delete courses
- [ ] Data syncs across devices
- [ ] Offline mode works
- [ ] Online/offline indicator appears
- [ ] No errors in browser console

## 🐛 Troubleshooting

### "Missing or insufficient permissions"

- Check security rules are published
- Verify you're logged in with @iimranchi.ac.in email
- Clear browser cache and try again

### Data not syncing across devices

- Check internet connection
- Verify both devices use the same Google account
- Check browser console for errors
- Wait a few seconds (real-time sync can take 1-2 seconds)

### Offline mode not working

- Check if service worker is registered (Console should show: `SW registered`)
- Try hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Check if browser supports IndexedDB

### TypeScript errors about import.meta.env

- These should auto-resolve once the dev server recompiles
- If persistent, restart the dev server: `npm run dev`

## 📊 Firestore Usage Limits (Free Tier)

- **Storage**: 1 GB
- **Reads**: 50,000 per day
- **Writes**: 20,000 per day
- **Deletes**: 20,000 per day

For your use case (course tracking), these limits are more than enough!

## 🚀 Next Steps

Once everything is working:

1. ✅ Test on mobile devices
2. ✅ Share the app with other students
3. ✅ Monitor Firestore usage in Firebase Console
4. ✅ Consider adding a data export feature
5. ✅ Deploy to production (Vercel)

---

**Need help?** Check `DATABASE_IMPLEMENTATION.md` for detailed documentation.
