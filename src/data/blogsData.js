export const blogsData = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    author: "MK Aamir Lehri",
    date: "Dec 15, 2025",
    category: "React",
    excerpt:
      "Learn how to use React Hooks to write cleaner and more efficient functional components.",
    image: "/images/project5.jpg",
    fullContent: `
      <h2>Introduction to React Hooks</h2>
      <p>React Hooks revolutionized the way we write React components. Before Hooks, we had to use class components for state management and lifecycle methods. Now, we can do everything with functional components.</p>
      
      <h3>What are React Hooks?</h3>
      <p>Hooks are functions that let you "hook into" React state and lifecycle features from function components. The most commonly used hooks are:</p>
      
      <ul>
        <li><strong>useState</strong> - For managing component state</li>
        <li><strong>useEffect</strong> - For side effects and lifecycle events</li>
        <li><strong>useContext</strong> - For accessing context values</li>
        <li><strong>useRef</strong> - For accessing DOM elements</li>
        <li><strong>useMemo</strong> - For performance optimization</li>
        <li><strong>useCallback</strong> - For memoizing functions</li>
      </ul>
      
      <h3>useState Hook</h3>
      <p>The useState hook is the most fundamental hook. It allows you to add state to functional components.</p>
      
      <pre><code>import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}</code></pre>
      
      <h3>useEffect Hook</h3>
      <p>The useEffect hook lets you perform side effects in function components. It's similar to componentDidMount, componentDidUpdate, and componentWillUnmount combined.</p>
      
      <pre><code>import { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(res => res.json())
      .then(data => setData(data));
  }, []); // Empty array means run once on mount
  
  return <div>{data ? data.title : 'Loading...'}</div>;
}</code></pre>
      
      <h3>Best Practices</h3>
      <p>When using React Hooks, keep these best practices in mind:</p>
      
      <ol>
        <li>Only call Hooks at the top level of your component</li>
        <li>Only call Hooks from React function components</li>
        <li>Use the ESLint plugin to enforce Hook rules</li>
        <li>Keep effects focused on a single concern</li>
        <li>Clean up effects when necessary</li>
      </ol>
      
      <h3>Conclusion</h3>
      <p>React Hooks have made functional components more powerful and easier to work with. By mastering hooks, you can write cleaner, more maintainable React code. Start with useState and useEffect, then gradually explore other hooks as needed.</p>
    `,
    readTime: "5 min read",
    tags: ["React", "Hooks", "JavaScript", "Frontend"],
  },
  {
    id: 2,
    title: "Web Performance Optimization Tips",
    author: "MK Aamir Lehri",
    date: "Dec 10, 2025",
    category: "Performance",
    excerpt:
      "Discover techniques to optimize your website's performance and improve user experience.",
    image: "/images/project3.jpg",
    fullContent: `
      <h2>Why Performance Matters</h2>
      <p>Website performance directly impacts user experience, SEO rankings, and conversion rates. A slow website can cost you visitors and revenue. Let's explore essential optimization techniques.</p>
      
      <h3>Image Optimization</h3>
      <p>Images often account for most of a webpage's size. Here's how to optimize them:</p>
      
      <ul>
        <li>Use modern formats like WebP or AVIF</li>
        <li>Implement lazy loading for below-the-fold images</li>
        <li>Compress images without losing quality</li>
        <li>Use responsive images with srcset</li>
        <li>Consider using a CDN for image delivery</li>
      </ul>
      
      <h3>Code Splitting</h3>
      <p>Don't load all JavaScript at once. Split your code into smaller chunks:</p>
      
      <pre><code>// Dynamic import
const MyComponent = React.lazy(() => import('./MyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MyComponent />
    </Suspense>
  );
}</code></pre>
      
      <h3>Minimize HTTP Requests</h3>
      <p>Each HTTP request adds latency. Reduce them by:</p>
      
      <ul>
        <li>Combining CSS and JavaScript files</li>
        <li>Using CSS sprites for icons</li>
        <li>Inlining critical CSS</li>
        <li>Removing unused code</li>
      </ul>
      
      <h3>Caching Strategies</h3>
      <p>Implement proper caching to reduce server load and improve load times:</p>
      
      <ol>
        <li>Browser caching with proper cache headers</li>
        <li>Service workers for offline support</li>
        <li>CDN caching for static assets</li>
        <li>Server-side caching with Redis or Memcached</li>
      </ol>
      
      <h3>Measuring Performance</h3>
      <p>Use tools to monitor and improve performance:</p>
      
      <ul>
        <li><strong>Google Lighthouse</strong> - Comprehensive audits</li>
        <li><strong>WebPageTest</strong> - Detailed performance analysis</li>
        <li><strong>Chrome DevTools</strong> - Network and performance tabs</li>
        <li><strong>GTmetrix</strong> - Performance scoring</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Performance optimization is an ongoing process. Start with the basics—optimize images, minimize requests, and implement caching. Then measure, iterate, and continue improving.</p>
    `,
    readTime: "7 min read",
    tags: ["Performance", "Optimization", "Web Development", "SEO"],
  },
  {
    id: 3,
    title: "Building Scalable Node.js Applications",
    author: "MK Aamir Lehri",
    date: "Dec 5, 2025",
    category: "Backend",
    excerpt:
      "Best practices for building scalable and maintainable Node.js applications.",
    image: "/images/project6.jpg",
    fullContent: `
      <h2>Introduction to Scalable Node.js</h2>
      <p>Node.js is perfect for building scalable applications, but you need to follow best practices. Let's explore how to build applications that can handle growth.</p>
      
      <h3>Project Structure</h3>
      <p>A well-organized project structure is crucial for scalability:</p>
      
      <pre><code>project/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   ├── utils/
│   └── config/
├── tests/
└── package.json</code></pre>
      
      <h3>Database Design</h3>
      <p>Choose the right database and design it properly:</p>
      
      <ul>
        <li><strong>SQL</strong> - For complex relationships and transactions</li>
        <li><strong>NoSQL</strong> - For flexible schemas and horizontal scaling</li>
        <li>Use connection pooling</li>
        <li>Implement proper indexing</li>
        <li>Consider database replication</li>
      </ul>
      
      <h3>Error Handling</h3>
      <p>Robust error handling is essential for production applications:</p>
      
      <pre><code>// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  
  res.status(err.status || 500).json({
    error: {
      message: err.message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    }
  });
});</code></pre>
      
      <h3>API Design</h3>
      <p>Follow RESTful principles for clean APIs:</p>
      
      <ul>
        <li>Use proper HTTP methods (GET, POST, PUT, DELETE)</li>
        <li>Implement versioning (e.g., /api/v1/)</li>
        <li>Use meaningful status codes</li>
        <li>Implement rate limiting</li>
        <li>Document with Swagger or similar tools</li>
      </ul>
      
      <h3>Security Best Practices</h3>
      <p>Security should be built-in from the start:</p>
      
      <ol>
        <li>Use helmet.js for securing HTTP headers</li>
        <li>Implement JWT for authentication</li>
        <li>Validate and sanitize all inputs</li>
        <li>Use HTTPS in production</li>
        <li>Keep dependencies updated</li>
        <li>Implement CORS properly</li>
      </ol>
      
      <h3>Performance Optimization</h3>
      <p>Optimize for better performance:</p>
      
      <ul>
        <li>Use clustering to utilize all CPU cores</li>
        <li>Implement caching with Redis</li>
        <li>Use streams for large data processing</li>
        <li>Optimize database queries</li>
        <li>Use compression middleware</li>
      </ul>
      
      <h3>Testing</h3>
      <p>Write tests to ensure reliability:</p>
      
      <pre><code>const request = require('supertest');
const app = require('../app');

describe('GET /api/users', () => {
  it('should return all users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('users');
  });
});</code></pre>
      
      <h3>Deployment</h3>
      <p>Deploy with confidence:</p>
      
      <ul>
        <li>Use process managers like PM2</li>
        <li>Implement CI/CD pipelines</li>
        <li>Monitor with tools like New Relic or DataDog</li>
        <li>Use environment variables for configuration</li>
        <li>Implement logging with Winston or similar</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Building scalable Node.js applications requires careful planning and following best practices. Focus on good architecture, security, performance, and testing from the beginning.</p>
    `,
    readTime: "10 min read",
    tags: ["Node.js", "Backend", "Scalability", "Architecture"],
  },
];
