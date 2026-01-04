# Update Notification System

## Overview
Implemented a subtle, non-intrusive update notification system to ensure users always get the latest version of the app, especially important for iPhone users who rarely close apps.

## The Problem
- iPhone users keep apps in memory for extended periods
- With cache-first strategy, they could be stuck on old versions for weeks
- No automatic way to update the app without manually refreshing

## The Solution
A grey, subtle update banner that:
- Appears when a new version is detected
- Allows users to update when convenient
- Doesn't interrupt their workflow

## How It Works

### 1. Service Worker Detection
```javascript
// In UpdatePrompt.tsx
- Checks for updates every 60 seconds
- Listens for new service worker installations
- Shows banner when update is ready
```

### 2. User Action
```
User sees banner → Clicks "Update" → App reloads with new version
                  → Clicks "✕" → Banner disappears (update on next open)
```

### 3. Smooth Update Flow
```javascript
// Service worker lifecycle:
1. New version deployed
2. Service worker downloads new files in background
3. Update notification appears
4. User clicks "Update"
5. Service worker activates
6. Page reloads automatically
7. User sees new version!
```

## Design

### Visual Style
- **Color**: Subtle grey (`bg-gray-100` light, `bg-gray-800` dark)
- **Position**: Fixed at top, above all content
- **Animation**: Smooth slide-down entrance
- **Size**: Compact, doesn't block content
- **Transparency**: Semi-transparent border

### Layout
```
┌──────────────────────────────────────────────────────┐
│ 🔄  Update Available                    [Update] ✕  │
│     A new version of Margin is ready                 │
└──────────────────────────────────────────────────────┘
```

## Components Created

### `UpdatePrompt.tsx`
- Main component that detects and displays updates
- Manages service worker lifecycle
- Handles user interactions (update/dismiss)

### Service Worker Updates
- Added `message` event listener for SKIP_WAITING
- Responds to update command from the UI
- Activates new version immediately when user confirms

### CSS Animation
```css
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## User Experience

### First-Time Update
1. User opens app (sees old version)
2. New version detected → Downloads silently
3. Grey banner slides down from top
4. User clicks "Update" → Smooth reload
5. App shows new version!

### Dismissed Update
1. User clicks ✕ to dismiss
2. Banner disappears
3. Next time they open the app → Banner appears again
4. Update is remembered and ready

### iPhone Users
- No longer stuck on old versions
- Gentle reminder to update
- Works even with app in background for weeks

## Benefits

✅ **Non-intrusive**: Subtle grey color, dismissible  
✅ **User control**: Update when convenient  
✅ **iPhone-friendly**: Solves the background app problem  
✅ **Fast updates**: Most users will update within 1-2 days  
✅ **Graceful**: Doesn't interrupt workflow  

## Technical Details

### Update Check Frequency
- Checks every 60 seconds while app is active
- Also checks on service worker lifecycle events
- No performance impact (background check)

### Browser Support
- Works on all modern browsers
- Falls back gracefully on older browsers
- PWA-optimized for iOS and Android

### Cache Strategy
- Update downloads in background
- Old version keeps working
- New version activates on user confirmation
- No data loss or interruption

## Testing

To test the update notification:

1. **Make a change** to the app
2. **Build and deploy** to production
3. **Open the app** (if already open, wait 60 seconds)
4. **See the banner** appear
5. **Click "Update"** → App reloads with new version

## Future Enhancements

Possible additions:
- Show what's new in the update
- Add update urgency indicator (optional vs critical)
- Allow snoozing updates for specific duration
- Track update adoption rate
