# LinkedIn No Auto-Follow

🚫 Take control of your LinkedIn experience and stop unwanted company follows!

This Chrome extension automatically unchecks the "Follow Company" checkbox when applying for jobs on LinkedIn.

## What it does

- ✅ Automatically unchecks the "Follow Company" checkbox during job applications
- 🎯 Works on all LinkedIn job pages  
- 🔄 Easy enable/disable toggle
- 🔒 No data collection or tracking

Perfect for job seekers who apply to many positions and want to curate their LinkedIn feed. Simply install and it works automatically in the background.

## Installation

### From Chrome Web Store
1. Visit the [Chrome Web Store page](https://chromewebstore.google.com/detail/linkedin-no-auto-follow/ghheofjhdiffbldbgikcajphnphlmikj?authuser=0&hl=en-GB)
2. Click "Add to Chrome"
3. Confirm installation

### From Source (Developer Mode)
1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension folder
5. The extension is now installed!

## How to Use

1. **Automatic Mode**: Once installed, the extension works automatically on LinkedIn job pages
2. **Manual Control**: Click the extension icon to enable/disable the functionality




### Files Structure
```
linkedin-no-autofollow/
├── manifest.json      # Extension configuration
├── content.js         # Main functionality script
├── popup.html         # Extension popup interface
├── popup.js           # Popup interaction logic
└── README.md          # This file
```

### Permissions Used
- `storage`: To save user enable/disable preferences
- Host permission for `*.linkedin.com`: Required to run on LinkedIn pages only

## Development

### Requirements
- Desktop Chrome browser

## Privacy Policy

This extension does not collect, store, or transmit any personal data. The only data stored is your enable/disable preference, which remains locally on your device and is never shared.

## License

MIT License - feel free to use, modify, and distribute.

## Changelog

### v1.0.0
- Initial release
- Automatic checkbox unchecking functionality
- Enable/disable toggle
- Privacy-focused design

---

**Star ⭐ this repository if it helped you!**
**Star ⭐ this repository if it helped you!**
