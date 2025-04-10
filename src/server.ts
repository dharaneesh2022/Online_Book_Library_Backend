import express from 'express';
import bookRoutes from './routes/book.routes';
import borrowRoutes from './routes/borrow.routes';
import returnRoutes from './routes/return.routes'; // If created

const app = express();
const PORT = 8080;

app.use(express.json());

// Route setup
app.use('/api/books', bookRoutes);
app.use('/api/borrow', borrowRoutes);
app.use('/api/return', returnRoutes); // Optional

app.get('/', (_req, res) => {
  res.send('Library API Running');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
