Backend URL  --> https://reelify-backend.onrender.com

# Reelify - Video Streaming Platform

A modern, full-featured video streaming platform built with React, designed for users to upload, watch, and manage videos. Features include user authentication, video playback, subscriptions, search, and more.

## 🚀 Features

- **User Authentication**: Secure login, registration, and logout with JWT-based authentication and automatic token refresh.
- **Video Upload**: Upload videos with thumbnails, titles, descriptions, categories, and playlists.
- **Video Streaming**: High-quality video playback using Plyr player with custom controls.
- **Subscriptions**: Subscribe to channels and view personalized subscription feeds.
- **Watch History**: Track and manage your viewing history.
- **Search Functionality**: Search videos with pagination and filters.
- **Channel Profiles**: View and manage user channels with profile information.
- **Categories**: Browse videos by categories like Music, Sports, Live, etc.
- **Responsive Design**: Mobile-first design using Tailwind CSS.
- **Real-time Notifications**: Toast notifications for user actions.
- **Like/Dislike System**: Interactive video rating with animations.
- **Dark Theme**: Consistent dark UI theme throughout the application.

## 🛠️ Tech Stack

### Frontend
- **React 19**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router DOM**: Client-side routing
- **Axios**: HTTP client for API requests
- **Plyr**: Customizable video player
- **React Toastify**: Notification system
- **Framer Motion**: Smooth animations and transitions
- **React Icons**: Icon library

### Development Tools
- **ESLint**: Code linting
- **Vite Plugins**: React plugin and Tailwind integration

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Backend API server (see environment setup)

## 🔧 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/reelify.git
   cd reelify
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env` file in the root directory:
   ```env
   VITE_API_BASE_URL=http://localhost:8000/api/v1
   ```
   Replace with your actual backend API URL.

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

6. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
reelify/
├── public/
│   ├── icons/
│   └── images/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Auth.jsx         # Authentication initializer
│   │   ├── Button.jsx       # Custom button component
│   │   ├── ChannelProfile.jsx # Channel profile display
│   │   ├── Input.jsx        # Search input component
│   │   ├── LikeButton.jsx   # Like/dislike functionality
│   │   ├── Loader.jsx       # Loading spinner
│   │   ├── Login.jsx        # Login modal
│   │   ├── Logo.jsx         # App logo
│   │   ├── Modal.jsx        # Modal wrapper
│   │   ├── NavPages.jsx     # Navigation menu
│   │   ├── Profile.jsx      # User profile dropdown
│   │   ├── Register.jsx     # Registration modal
│   │   ├── Resetpass.jsx    # Password reset modal
│   │   ├── StreamChannelInfo.jsx # Stream sidebar info
│   │   ├── StreamDetails.jsx # Video details section
│   │   ├── StreamRelatedVideo.jsx # Related videos
│   │   ├── Swtichers.jsx    # Toggle switches
│   │   ├── Upload.jsx       # Upload button
│   │   ├── Videocard.jsx    # Video card component
│   │   ├── Videoplayer.jsx  # Video player wrapper
│   │   ├── channelTabs.jsx  # Channel navigation tabs
│   │   ├── index.js         # Component exports
│   │   └── videolist.jsx    # Video list item
│   ├── constants.js         # App constants and enums
│   ├── context/             # React context providers
│   │   ├── SearchContext.jsx # Search state management
│   │   └── UserContext.jsx  # User authentication state
│   ├── hooks/               # Custom React hooks
│   │   ├── useFetchData.js  # Data fetching hook
│   │   └── usePostData.js   # Data posting hook
│   ├── layouts/             # Page layout components
│   │   ├── AskLogin.jsx     # Login prompt
│   │   ├── CateogrizedVideo.jsx # Categorized video grid
│   │   ├── Container.jsx    # Main container wrapper
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Playlist.jsx     # Playlist display
│   │   ├── Stream.jsx       # Video streaming page
│   │   ├── SubscribedChannelList.jsx # Subscription list
│   │   ├── about.jsx        # About page
│   │   └── index.js         # Layout exports
│   ├── pages/               # Route components
│   │   ├── SearchResults.jsx # Search results page
│   │   ├── channel.jsx      # Channel page
│   │   ├── history.jsx      # Watch history page
│   │   ├── subscriptions.jsx # Subscriptions page
│   │   └── uploadVideo.jsx  # Video upload page
│   ├── services/            # API service layer
│   │   ├── ApiService.js    # Axios instance with interceptors
│   │   └── api.js           # API wrapper functions
│   ├── utils/               # Utility functions
│   │   ├── dateUtils.js     # Date formatting
│   │   └── durationUtil.js  # Duration formatting
│   ├── App.css              # Global styles
│   ├── App.jsx              # Main app component
│   ├── index.css            # Tailwind imports
│   └── main.jsx             # App entry point
├── .env                     # Environment variables
├── .gitignore               # Git ignore rules
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── README.md                # Project documentation
├── vercel.json              # Vercel deployment config
└── vite.config.js           # Vite configuration
```

## 🔌 API Integration

The frontend communicates with a backend API for:
- User authentication and profile management
- Video upload and streaming
- Subscription management
- Search and recommendations
- Like/dislike functionality

### Key API Endpoints Used:
- `users/login` - User login
- `users/register` - User registration
- `users/logout` - User logout
- [`videos/upload`](src/components/Videocard.jsx ) - Video upload
- [`videos/play/{id}`](src/components/channelTabs.jsx ) - Video streaming
- `subscriptions/subscribedvideos` - Subscription feed
- [`recommend/search`](src/components/channelTabs.jsx ) - Video search

## 🎨 Styling

- **Tailwind CSS**: Utility classes for responsive design
- **Custom Theme**: Dark color scheme with defined CSS variables
- **Animations**: Framer Motion for smooth transitions
- **Icons**: React Icons for consistent iconography

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

### Other Platforms
The app can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Plyr](https://github.com/sampotts/plyr) for the video player
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React](https://reactjs.org/) community for excellent documentation

## 📞 Support

For support, email support@reelify.com or create an issue in the repository.

---

**Note**: This is a frontend-only application. You'll need a compatible backend API server to handle data persistence and video storage.
