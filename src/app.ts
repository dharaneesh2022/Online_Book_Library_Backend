import express from 'express';
import bookRoutes from './routes/book.routes';
import borrowRoutes from './routes/borrow.routes';

const app = express();
app.use(express.json());

app.use("/api", bookRoutes);
app.use("/api", borrowRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Online Book Library API');
});
app.listen(3000, () => {
    console.log('Server running on http://localhost:8080');
});
export default app;