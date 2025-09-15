# Azary'el Flame — Light of the Chosen (Original All-in-One Package)

This ZIP contains the original source, codex, assets, docs, and an APK placeholder. It's arranged to be ready to upload to GitHub.

## Structure

```
Azaryel-Flame/
├── app/                 # React UI source code
├── apk/                 # APK placeholder & build instructions
├── codex/               # Codex (PDF + markdown)
├── docs/
│   ├── PRIVACY_POLICY.md
│   ├── DELETE_DATA.md
│   └── README.md
└── assets/              # Icons, splash screens, images
```

## Quick start (to upload to GitHub)
1. Create a new repository on GitHub.
2. Upload this entire folder (or push via git).
3. Follow docs/README.md for building the APK (instructions provided).
4. If you want CI to build an APK automatically, enable GitHub Actions and the included workflow `.github/workflows/android.yml`.

## APK note
A placeholder file `apk/original-apk-placeholder.txt` is included. Because I cannot build a signed production APK inside this environment, the repository includes:
- Build scripts
- GitHub Actions workflow to build on GitHub runners
- Instructions to build locally with Capacitor/Android Studio

Follow the steps in `docs/README.md` to produce a real APK.

