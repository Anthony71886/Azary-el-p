# Generate a Signed Android APK (Capacitor + Android Studio)

## Prereqs
- Node.js 18+ and npm
- Android Studio + Android SDK
- Java 17

## Steps
```bash
# Create a React project (or use your existing one)
npm create vite@latest azaryel-flame -- --template react
cd azaryel-flame
npm install

# Copy the provided web/ files into your project (public/ or root)
# Add Capacitor
npm install @capacitor/core @capacitor/cli
npx cap init "Azaryel Flame" com.azaryel.flame

# Add Android platform
npx cap add android

# Copy web assets to native
npx cap copy

# Open in Android Studio
npx cap open android
```
### Build a Signed Release APK
- Android Studio → **Build > Generate Signed Bundle / APK...**
- Choose **APK**, set variant to `release`, create/select your keystore, finish.
