export const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Video Categories Enum
export const VIDEO_CATEGORIES = {
    MUSIC: 'Music',
    PODCAST: 'Podcast',
    SPORTS: 'Sports',
    CARS: 'Cars',
    LIVE: 'Live',
    UNBOXING: 'Unboxing'
};

// Array of all categories (for filtering, includes "All")
export const VIDEO_CATEGORIES_FILTER = [
    'All',
    VIDEO_CATEGORIES.MUSIC,
    VIDEO_CATEGORIES.PODCAST,
    VIDEO_CATEGORIES.SPORTS,
    VIDEO_CATEGORIES.CARS,
    VIDEO_CATEGORIES.LIVE,
    VIDEO_CATEGORIES.UNBOXING
];

// Array of categories for upload dropdown (excludes "All")
export const VIDEO_CATEGORIES_UPLOAD = [
    VIDEO_CATEGORIES.MUSIC,
    VIDEO_CATEGORIES.PODCAST,
    VIDEO_CATEGORIES.SPORTS,
    VIDEO_CATEGORIES.CARS,
    VIDEO_CATEGORIES.LIVE,
    VIDEO_CATEGORIES.UNBOXING
];