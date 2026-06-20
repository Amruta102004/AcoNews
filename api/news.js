export default async function handler(req, res) {
    try {
        const { q = 'latest', category = 'general', country = '' } = req.query;

        const url =
            `https://gnews.io/api/v4/top-headlines` +
            `?q=${encodeURIComponent(q)}` +
            `&category=${category}` +
            `&country=${country}` +
            `&lang=en` +
            `&max=10` +
            `&apikey=${process.env.GNEWS_API_KEY}`;

        const response = await fetch(url);
        const data = await response.json();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to fetch news',
            error: error.message
        });
    }
}