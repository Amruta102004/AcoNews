//d84701fa4ecd0934286b78d44b2d1b8a

import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [articles, setArticles] = useState([]);
    const [query, setQuery] = useState('latest');
    const [category, setCategory] = useState('general');
    const [country, setCountry] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const fetchNews = useCallback(async () => {
        try {
            const response = await axios.get('/api/news', {
                params: {
                    q: query,
                    category: category,
                    country: country
                }
            });

            setArticles(response.data.articles || []);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    }, [query, category, country]);

    useEffect(() => {
        fetchNews();
    }, [fetchNews]);

    const handleSearch = (e) => {
        setQuery(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    };

    const toggleVisibility = () => {
        setIsVisible(window.scrollY > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="App">
            <header className="navbar">
                <div className="logo">
                    <h1>ACONEWS</h1>
                </div>

                <div className="controls">
                    <input
                        type="text"
                        placeholder="Search for news..."
                        value={query}
                        onChange={handleSearch}
                    />

                    <select value={category} onChange={handleCategoryChange}>
                        <option value="general">General</option>
                        <option value="business">Business</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="health">Health</option>
                        <option value="science">Science</option>
                        <option value="sports">Sports</option>
                        <option value="technology">Technology</option>
                    </select>

                    <select value={country} onChange={handleCountryChange}>
                        <option value="">All Countries</option>
                        <option value="us">United States</option>
                        <option value="gb">United Kingdom</option>
                        <option value="ca">Canada</option>
                        <option value="au">Australia</option>
                        <option value="in">India</option>
                        <option value="mx">Mexico</option>
                        <option value="za">South Africa</option>
                    </select>

                    <button onClick={fetchNews}>
                        Search
                    </button>
                </div>
            </header>

            <div className="news-container">
                {articles.map((article, index) => (
                    <div key={index} className="news-card">
                        <img
                            src={
                                article.image ||
                                'https://via.placeholder.com/300x200?text=No+Image'
                            }
                            alt={article.title}
                        />
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>

                        <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Read more
                        </a>
                    </div>
                ))}
            </div>

            {isVisible && (
                <button
                    className="scroll-to-top"
                    onClick={scrollToTop}
                >
                    ↑
                </button>
            )}

            <footer className="footer">
                Developed by Amruta Tekale
            </footer>
        </div>
    );
}

export default App;