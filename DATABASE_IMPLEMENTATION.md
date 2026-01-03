# Database Implementation with Offline Support

## Overview

Your app now uses **Firebase Firestore** as the database with a **network-first strategy** and full **offline support**. This means:

- ✅ **Multi-device sync**: Your courses stay in sync across all devices when you log in
- ✅ **Offline-first**: App works immediately, even without internet
- ✅ **Network-first**: When online, data syncs with Firestore automatically
- ✅ **Automatic sync**: Changes made offline automatically sync when you're back online

## How It Works

### Network-First Strategy

1. **When you open the app:**
   - Shows local data immediately (fast UI)
   - If online: Syncs with Firestore in the background
   - Uses the newest data (local vs server)

2. **When you make changes:**
   - Changes saved to localStorage instantly (no lag)
   - If online: Also saved to Firestore automatically
   - If offline: Saved locally, then synced when back online

3. **Real-time updates:**
   - Changes made on other devices appear automatically
   - Uses Firestore's real-time listeners

### Offline Behavior

- **No internet?** No problem! The app works completely offline
- All your data is stored locally in `localStorage`
- An orange "Offline Mode" indicator appears when you're offline
- When back online, a green "Back Online" indicator appears briefly
- All offline changes automatically sync to the server

## Technical Details

### Data Storage

**Firestore Structure:**
```
userCourses/
  └── {userId}/
      ├── courses: Array<Course>
      ├── updatedAt: Timestamp
      └── userId: string
```

**Course Object:**
```typescript
{
  id: string;
  name: string;
  shortName?: string;
  leaves: number;
  maxLeaves: number;
}
```

### Files Modified/Created

1. **`src/firebase/config.ts`**
   - Added Firestore initialization
   - Enabled offline persistence with `enableIndexedDbPersistence()`

2. **`src/firebase/database.ts`** (NEW)
   - Complete database service with network-first strategy
   - Handles online/offline detection
   - Manages sync between Firestore and localStorage
   - Real-time listener for multi-device sync

3. **`src/App.tsx`**
   - Integrated database service
   - Course operations now sync to database
   - Manages database lifecycle (initialize/cleanup)

4. **`src/components/OfflineIndicator.tsx`** (NEW)
   - Shows offline/online status
   - Appears when offline, disappears when back online

## Setting Up Firestore

Before the database works, you need to enable Firestore in your Firebase project:

### Step 1: Enable Firestore

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project (or create one if you haven't)
3. Click **Firestore Database** in the left sidebar
4. Click **Create Database**
5. Choose **Start in production mode**
6. Select a location (choose closest to your users, e.g., `asia-south1` for India)
7. Click **Enable**

### Step 2: Set Up Security Rules

In the Firestore console, go to the **Rules** tab and use these rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read/write their own data
    match /userCourses/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

These rules ensure:
- Only authenticated users can access data
- Users can only access their own courses
- Multi-device sync works for the same user

### Step 3: Create Firestore Index (Optional)

For better performance, you can create an index:

1. In Firestore console, go to **Indexes** tab
2. Click **Create Index**
3. Collection ID: `userCourses`
4. Add field: `userId` (Ascending)
5. Add field: `updatedAt` (Descending)
6. Click **Create**

## Testing Offline Mode

To test offline functionality:

1. **Open DevTools** (F12 or Cmd+Option+I)
2. Go to **Network** tab
3. Select **Offline** from the throttling dropdown
4. The app should show "Offline Mode" indicator
5. Try adding/editing courses - they should work!
6. Select **Online** again
7. Changes should sync automatically

## Monitoring

The app logs sync status to the console:

- `📴 Offline - using local data` - App is offline
- `📡 Using server data (newer)` - Server data is newer
- `💾 Local data is newer - syncing to server` - Local data uploaded
- `🔄 Uploading local data to server` - First-time upload
- `🔔 Real-time update from server` - Another device made changes
- `✅ Saved to server and local storage` - Save successful
- `⚠️ Failed to save to server (saved locally)` - Offline, saved locally
- `📡 Connection restored - syncing with server...` - Back online

## Benefits

### For Users

1. **Fast Performance**: Data loads instantly from local storage
2. **Works Offline**: Full functionality without internet
3. **Multi-Device**: Access from any device with your account
4. **Auto-Sync**: No manual refresh needed
5. **Data Persistence**: Never lose your data

### For Development

1. **Scalable**: Firestore handles millions of users
2. **Real-time**: Changes propagate instantly
3. **Offline-First**: Better user experience
4. **Secure**: Firebase Authentication + Security Rules
5. **Cost-Effective**: Firestore free tier is generous

## Troubleshooting

### Data Not Syncing?

1. Check your internet connection
2. Verify Firebase config in `.env` file
3. Check if Firestore is enabled in Firebase Console
4. Review security rules (users must be authenticated)
5. Check browser console for errors

### "Permission Denied" Errors?

- Ensure security rules are set correctly
- User must be logged in with Google (@iimranchi.ac.in)
- User can only access their own data (userId matches)

### Offline Indicator Not Showing?

- Check browser's DevTools Network tab
- Try toggling offline mode manually
- Component uses `navigator.onLine` API

## Future Enhancements

Potential improvements:

1. **Conflict Resolution**: Handle simultaneous edits from multiple devices
2. **Data Migration**: Migrate existing localStorage data to Firestore
3. **Backup/Export**: Allow users to download their data
4. **Sync Status**: Show sync progress for large datasets
5. **Cloud Functions**: Add server-side validation/processing

## Notes

- **LocalStorage Limit**: Browser localStorage has ~5-10MB limit
- **Firestore Limits**: Free tier allows 1GB storage, 50K reads/day
- **Offline Persistence**: Firestore caches data locally (IndexedDB)
- **Multiple Tabs**: Persistence works in one tab at a time
- **Browser Support**: Modern browsers only (Chrome, Firefox, Safari, Edge)

---

**Your app is now ready for multi-device, offline-first usage! 🎉**
