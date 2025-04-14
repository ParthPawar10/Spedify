const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database (if needed)
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Scraping functions
const scrapeAmazon = async (query) => {
    const amazonUrl = `https://www.amazon.in/s?k=${query}`;
    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto(amazonUrl, { waitUntil: 'domcontentloaded' });

        // Get product details
        const products = await page.evaluate(() => {
            const productElements = document.querySelectorAll('div.s-main-slot .s-result-item');
            const productList = [];

            productElements.forEach((element) => {
                const title = element.querySelector('h2 a') ? element.querySelector('h2 a').innerText : null;
                const price = element.querySelector('.a-price .a-offscreen') ? element.querySelector('.a-price .a-offscreen').innerText : null;
                const link = element.querySelector('h2 a') ? 'https://www.amazon.in' + element.querySelector('h2 a').getAttribute('href') : null;
                const image_url = element.querySelector('.s-image') ? element.querySelector('.s-image').getAttribute('src') : null;

                if (title && price && link) {
                    productList.push({ title, price, link, image_url });
                }
            });

            return productList;
        });

        await browser.close();
        return products;
    } catch (error) {
        console.error('Error scraping Amazon:', error);
        return [];
    }
};

const scrapeFlipkart = async (query) => {
    const flipkartUrl = `https://www.flipkart.com/search?q=${query}`;
    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto(flipkartUrl, { waitUntil: 'domcontentloaded' });

        // Wait for the products to load
        await page.waitForSelector('.tUxRFH');

        // Extract product details
        const products = await page.evaluate(() => {
            const productElements = document.querySelectorAll('.tUxRFH');
            const productList = [];

            productElements.forEach((element) => {
                const title = element.querySelector('.KzDlHZ') ? element.querySelector('.KzDlHZ').innerText : null;
                const price = element.querySelector('.Nx9bqj') ? element.querySelector('.Nx9bqj').innerText : null;
                const image_url = element.querySelector('.DByuf4') ? element.querySelector('.DByuf4').getAttribute('src') : null;
                const link = element.querySelector('a.CGtC98') ? 'https://www.flipkart.com' + element.querySelector('a.CGtC98').getAttribute('href') : null;
                if (title && price && link) {
                    productList.push({ title, price, link, image_url });
                }
            });

            return productList;
        });

        await browser.close();
        return products;
    } catch (error) {
        console.error('Error scraping Flipkart:', error);
        return [];
    }
};

// API endpoint to search products
app.post('/api/search', async (req, res) => {
    const { query } = req.body;
    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required' });
    }
    
    try {
        // Fetch product data from both Amazon and Flipkart
        const amazonResults = await scrapeAmazon(query);
        const flipkartResults = await scrapeFlipkart(query);

        // Combine the results from both sources
        const combinedResults = [...amazonResults, ...flipkartResults];
        
        // Send combined results back to the client
        return res.json(combinedResults);
    } catch (error) {
        console.error('Error fetching product data:', error);
        return res.status(500).json({ error: 'Error fetching product data' });
    }
});

// Default route
app.get("/", (req, res) => {
    res.send("API WORKING");
});
app.use('/auth', require('./routes/auth'));
// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
