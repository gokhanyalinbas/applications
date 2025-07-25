# SociPop - Social Media Popularity Tracker

SociPop is a React Native mobile application that aggregates social media accounts and calculates a popularity score (PopScore) for users. The app allows users to track their social media performance across multiple platforms in one unified dashboard.

## Features

### 🏠 Home Screen
- **PopScore Display**: Large circular display showing user's current popularity score
- **Subscriber Count**: Track total subscribers across platforms
- **Views Analytics**: Monitor total views with trending indicators
- **30-Day Chart**: Visual representation of performance over time

### 🔍 Discovery Screen
- **User Search**: Find and explore other users on the platform
- **Category Filters**: Filter users by categories (Food, Gaming, Lifestyle, Tech, Fashion)
- **PopScore Comparison**: View other users' popularity scores and trends
- **Mini Charts**: Quick visual performance indicators for each user

### 📢 Campaigns Screen
- **Marketing Campaigns**: Browse available brand partnership opportunities
- **Campaign Categories**: Filter campaigns by type (Promotion, Partnership)
- **Apply System**: Easy application process for campaigns
- **Applied Campaigns**: Track your campaign applications

### 👤 Profile Screen
- **Connected Accounts**: Manage linked social media platforms (YouTube, Instagram, etc.)
- **PopScore History**: Detailed chart showing score evolution over time
- **Account Management**: Link new accounts or remove existing ones
- **User Settings**: Profile customization and logout functionality

## PopScore Algorithm

The PopScore is calculated based on:
- Subscriber/Follower count across platforms
- Engagement rates (likes, comments, shares)
- Content consistency and frequency
- Growth trends over time
- Cross-platform presence

## Tech Stack

- **React Native** with Expo
- **React Navigation** for screen navigation
- **React Native Chart Kit** for data visualization
- **Expo Linear Gradient** for beautiful UI gradients
- **Expo Vector Icons** for consistent iconography

## Project Structure

```
SociPop/
├── src/
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   ├── DiscoveryScreen.js
│   │   ├── CampaignsScreen.js
│   │   └── ProfileScreen.js
│   ├── components/
│   ├── navigation/
│   ├── utils/
│   └── constants/
│       └── colors.js
├── App.js
└── package.json
```

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd SociPop
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install additional Expo dependencies:**
   ```bash
   npx expo install expo-linear-gradient
   ```

## Running the App

### Development Mode

```bash
# Start the Expo development server
npm start

# Run on iOS simulator (macOS only)
npm run ios

# Run on Android emulator
npm run android

# Run in web browser
npm run web
```

### Using Expo Go

1. Install the Expo Go app on your mobile device
2. Run `npm start` to start the development server
3. Scan the QR code with Expo Go (Android) or Camera app (iOS)

## Design System

### Color Palette
- **Primary**: Purple (#7C3AED) - Used for main branding and active states
- **Secondary**: Teal (#10B981) - Used for PopScore indicators and success states
- **Accent**: Blue (#3B82F6) - Used for charts and data visualization
- **Background**: Light gray (#F9FAFB) - Main app background
- **Social Colors**: Platform-specific colors (YouTube red, Instagram pink, etc.)

### Typography
- **Headers**: Bold, 24-28px
- **Body Text**: Regular, 16px
- **Captions**: Light, 14px
- **Numbers**: Bold for emphasis on metrics

## Key Components

### PopScore Circle
A prominent circular display showing the user's popularity score with gradient background and smooth animations.

### Chart Components
- Line charts for trend visualization
- Mini charts for quick comparisons
- Historical data tracking

### Navigation
Bottom tab navigation with four main sections, each with appropriate icons and active states.

## Future Enhancements

- [ ] Real social media API integrations
- [ ] Push notifications for score changes
- [ ] Advanced analytics and insights
- [ ] Social features (following, sharing)
- [ ] Monetization features for campaigns
- [ ] Dark mode support
- [ ] Multi-language support

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For questions or support, please contact the development team or create an issue in the repository.