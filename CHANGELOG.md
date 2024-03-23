# CHANGELOG

## v0.1.0-alpha.5:

### New Features
- New social icons: `Service.Mastodon` and `Service.Rss`
- New `StoreBadges` component
- New `QrCode` component
- New `Signature` component
- New [examples](examples)

### Enhancements
- Updated README
- Dependency updates

## v0.1.0-alpha.4:
- `README.md`: notice about test mode
- Support for test mode logging
- npm updates

## v0.1.0-alpha.3:
- `README.md` cleanup (listing of components)
- `Image` component now requires only `src`; the other params are optional
- `ViewInBrowser` component has changed: text is optional
- npm updates

## v0.1.0-alpha.2:
- Introduced `CHANGELOG.md`
- npm updates
- Introduced new services as [social icons](examples/confirm_email/index.js):
  - `Service.Phone` (converts into a link with `tel:` prefix)
  - `Service.Facebook`
  - `Service.YouTube`
  - `Service.Instagram`
  - `Service.LinkedIn`
  - `Service.Slack`
  - `Service.Discord`
  - `Service.TikTok`
  - `Service.Snapchat`
  - `Service.Threads`
  - `Service.Telegram`
- **Breaking Changes:**
  - Renamed `Service.Github` to `Service.GitHub`

## v0.1.0-alpha.1:
- Initial implementation