# Artifacte Seeker — Mobile-First RWA Tokenization Platform

A mobile-optimized version of Artifacte for the Solana Seeker phone. Tokenize and trade real-world assets as NFTs with verified provenance and transparent auctions on Solana.

## Features

✨ **Mobile-First Design**
- Optimized UI for phone touch interaction
- Bottom navigation bar for easy thumb access
- Large touch targets (44px minimum)
- Responsive grid layouts (1 col mobile → 3+ cols desktop)
- Safe area insets for notch support
- PWA manifest for app installability

🏛️ **Real-World Asset Tokenization**
- Digital Art
- Spirits
- TCG Cards
- Sports Cards
- Watches

💰 **Marketplace Features**
- Fixed-price listings
- Live auction bidding
- Multi-currency support (USD1 & USDC)
- Portfolio tracking
- Asset submission for verification

🔐 **Solana Integration**
- Wallet adapter support (Phantom, Solflare)
- Secure on-chain transactions
- Verified asset ownership
- Treasury wallet: `DDSpvAK8DbuAdEaaBHkfLieLPSJVCWWgquFAA3pvxXoX`

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3.4
- **Wallet**: @solana/wallet-adapter-react
- **Blockchain**: @solana/web3.js
- **UI Components**: lucide-react
- **Fonts**: Inter, Playfair Display

## Getting Started

### Prerequisites
- Node.js 18+
- npm/yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
artifacte-seeker/
├── app/
│   ├── layout.tsx          # Root layout with mobile nav
│   ├── page.tsx            # Home page
│   ├── auctions/           # Auction marketplace
│   ├── portfolio/          # User portfolio
│   ├── digital-art/        # Digital art gallery
│   ├── submit/             # Asset submission form
│   ├── about/              # About page
│   └── api/
│       ├── rpc/            # CORS proxy for Solana RPC
│       ├── listing/        # Listing API
│       └── listing-event/  # Event API
├── components/
│   ├── MobileNav.tsx       # Bottom navigation
│   ├── AssetCard.tsx       # Asset card component
│   ├── AuctionCard.tsx     # Auction card component
│   ├── WalletProvider.tsx  # Wallet setup
│   └── ...
├── lib/
│   └── data.ts             # Sample assets and auctions
├── public/
│   └── manifest.json       # PWA manifest
└── styles/
    └── globals.css         # Global styles & animations
```

## Design System

### Colors
- **Background**: `#0f172a` (slate-950)
- **Primary Accent**: `#eab308` (yellow-500)
- **Text**: `#e2e8f0` (slate-100)
- **Borders**: `#c87f0a33` (yellow-600/20)

### Typography
- **Serif**: Playfair Display (headings)
- **Sans**: Inter (body)

### Touch Targets
- Minimum 44px height/width for mobile buttons
- 16px font size on inputs to prevent iOS zoom

## Mobile Optimizations

### Bottom Navigation
- Sticky bottom nav on mobile, hidden on desktop (md breakpoint)
- Touch-friendly icons with labels
- Active state highlighting with yellow accent

### Responsive Grid
```
Mobile:  1 column
Tablet:  2 columns
Desktop: 3-4 columns
```

### Safe Area
- Accounts for notches and home indicators
- `env(safe-area-inset-bottom)` padding for sticky nav

### Performance
- Lazy loading images
- Optimized for low-bandwidth
- CSS animations for micro-interactions
- Minimal JavaScript bundles

## Smart Contracts

Located in `/programs/`:
- `auction/` - Auction mechanism
- `rwa_nft/` - RWA NFT minting and management

## Tokens

- **USD1**: `USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB`
- **USDC**: `EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`

## Deployment

### Vercel (Recommended)

```bash
vercel
```

Environment variables:
- `NEXT_PUBLIC_RPC_ENDPOINT` (defaults to mainnet-beta)

### Docker

```bash
docker build -t artifacte-seeker .
docker run -p 3000:3000 artifacte-seeker
```

## API Endpoints

### RPC Proxy
**POST** `/api/rpc`

Proxies JSON-RPC requests to Solana RPC endpoint for CORS compatibility.

### Listings
**GET** `/api/listing`
**POST** `/api/listing`

Manage asset listings.

### Events
**GET** `/api/listing-event`
**POST** `/api/listing-event`

Track auction and transaction events.

## PWA Installation

The app is installable on Seeker phone:
1. Visit the app in your mobile browser
2. Tap the install/share button
3. Select "Add to Home Screen" (iOS) or "Install app" (Android)

## Accessibility

- WCAG 2.1 AA compliant
- High contrast mode support
- Keyboard navigation
- ARIA labels on interactive elements
- Safe color palette for colorblind users

## Contributing

To add features or fix bugs:

1. Create a feature branch: `git checkout -b feat/your-feature`
2. Make your changes
3. Test on mobile: `npm run dev`
4. Commit with semantic messages: `git commit -m 'feat: add feature'`
5. Push and create a Pull Request

## License

Private — Artifacte Platform

## Support

Issues & feedback: GitHub Issues

---

**Built for Solana Seeker** 📱✨
