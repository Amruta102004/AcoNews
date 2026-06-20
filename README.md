# ACONEWS - News Application

## Overview

ACONEWS is a news application built using React and the GNews API. It allows users to browse the latest news articles, filter news by category and country, and perform searches. The application features a responsive design and integrates with the GNews API to fetch top headlines.

## Features

- **Country Selector:** Fetch news based on the selected region.
- **Search Functionality:** Find articles by keywords.
- **Pagination:** Navigate through multiple pages of news articles.
- **Responsive Design:** Ensures usability across different screen sizes.
- **API Integration:** Fetch news articles using the GNews API.

## Technologies Used

- **React:** For building the user interface.
- **Axios:** For making API calls to GNews.
- **CSS:** For styling and responsiveness.
- **GNews API:** To fetch news articles based on the selected country and search term.

## Installation Instructions

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/Amruta102004/AcoNews
    ```

2. **Navigate to the Frontend Directory:**
    ```bash
    cd aconews/frontend
    ```

3. **Install Frontend Dependencies:**
    ```bash
    npm install
    ```

4. **Start the Frontend Development Server:**

    - For Development:
        ```bash
        npm start
        ```

    - For Production Build:
        ```bash
        npm run build
        ```

## Approach

- **Component Structure:** The UI is broken down into reusable components like `NewsCard` for displaying individual articles.
- **API Integration:** GNews API is used for fetching news articles. Axios is utilized for API calls.
- **Pagination:** Implemented to allow browsing through different pages of articles. Managed on the client side due to GNews API’s lack of native pagination support.
- **Responsiveness:** Basic CSS ensures the app is responsive. Tailwind CSS is known but not used; plain CSS is preferred for simplicity.

## Challenges and Solutions

- **Pagination:** Managed client-side due to lack of native pagination support in GNews API.
- **API Request Limits:** Optimized API calls by caching results and minimizing unnecessary requests.
- **Search and Filtering:** Ensured accurate search functionality and filtering by refetching articles when search terms or country changes.

## Future Enhancements

- **Tailwind CSS:** Refactor CSS into Tailwind for a more scalable design system.
- **Debounced Search:** Implement debounced search functionality to reduce API calls.
- **Better Error Handling:** Add user-friendly error messages and improved handling of API failures.

## Developer

- **Name:** Amruta Tekale
- **Email:** [atekale046@gmail.com](mailto:atekale046@gmail.com)
