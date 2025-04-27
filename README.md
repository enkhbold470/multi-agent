# Rest&Vest

An investment matching platform that connects investors with startups that align with their investment criteria.

![Rest&Vest Logo](/multi-agent/public/restnvest-logo.png)

## Overview

Rest&Vest uses advanced algorithms to help investors discover startup investment opportunities that match their preferences. The platform simplifies the process of finding promising startups by analyzing various criteria and presenting personalized recommendations.

## Features

- **AI-Powered Matching**: Intelligent algorithm that connects investors with startups based on specific criteria
- **Personalized Dashboard**: User-friendly interface with customizable preferences
- **Detailed Startup Profiles**: Comprehensive information on each startup including founders, metrics, and funding status
- **Secure Authentication**: User authentication powered by Clerk

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **UI Components**: Radix UI, Tailwind CSS
- **Authentication**: Clerk
- **Data Fetching**: Axios
- **Form Handling**: React Hook Form, Zod validation

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- pnpm

### Installation

1. Clone the repository
   ```
   git clone https://github.com/enkhbold470/multi-agent.git
   cd lahacks-2025
   ```

2. Install dependencies
   ```
   cd multi-agent
   pnpm install
   ```

3. Set up environment variables
   Create a `.env.local` file in the multi-agent directory with the following variables:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   ```

4. Run the development server
   ```
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
multi-agent/
├── app/                  # Next.js application routes
│   ├── dashboard/        # Dashboard interface
│   ├── sign-in/          # Authentication pages
│   ├── sign-up/
│   ├── page.tsx          # Landing page
│   └── layout.tsx        # Root layout
├── components/           # Reusable React components
│   ├── ui/               # UI components
│   ├── preferences-panel.tsx
│   ├── startup-card.tsx
│   └── startup-details-modal.tsx
├── lib/                  # Utilities and data structures
├── public/               # Static assets
└── styles/               # Global styles
```

## API Integration

The app fetches startup data from an external API:
```
https://starfish-app-rpg67.ondigitalocean.app/api/companies
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Created during LAHacks 2025
- UI components powered by Radix UI and Tailwind CSS 