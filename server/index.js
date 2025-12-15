/* eslint-env node */
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import db from './config/databases.js';

// Import routes
import bansRoutes from './routes/bans.js';
import earnersRoutes from './routes/earners.js';
import gangsRoutes from './routes/gangs.js';
import leaderboardRoutes from './routes/leaderboard.js';
import punishmentsRoutes from './routes/punishments.js';
import staffRoutes from './routes/staff.js';
import storeRoutes from './routes/store.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/api/health', async (req, res) => {
  const status = {};
  const envInfo = {
    nodeEnv: process.env.NODE_ENV,
    vercel: !!process.env.VERCEL,
    dbHost: process.env.DB_HOST ? 'Set' : 'Missing',
    dbUser: process.env.DB_USER ? 'Set' : 'Missing',
    dbPassword: process.env.DB_PASSWORD ? 'Set' : 'Missing',
    dbPort: process.env.DB_PORT || 'Not set',
  };

  try {
    await db.query('tokens', 'SELECT 1');
    status.tokens = 'connected';
  } catch (error) {
    status.tokens = `error: ${error.message}`;
    console.error('Tokens DB error:', error);
  }

  try {
    await db.query('iga', 'SELECT 1');
    status.iga = 'connected';
  } catch (error) {
    status.iga = `error: ${error.message}`;
    console.error('IGA DB error:', error);
  }

  try {
    await db.query('server', 'SELECT 1');
    status.server = 'connected';
  } catch (error) {
    status.server = `error: ${error.message}`;
    console.error('Server DB error:', error);
  }

  try {
    await db.query('darkrp', 'SELECT 1');
    status.darkrp = 'connected';
  } catch (error) {
    status.darkrp = `error: ${error.message}`;
    console.error('DarkRP DB error:', error);
  }

  res.json({
    status: 'ok',
    databases: status,
    connectionStatus: db.connectionStatus,
    env: envInfo,
  });
});

// API Routes
app.use('/api/store', storeRoutes);
app.use('/api/leaderboard', leaderboardRoutes);
app.use('/api/bans', bansRoutes);
app.use('/api/punishments', punishmentsRoutes);
app.use('/api/gangs', gangsRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/earners', earnersRoutes);

// Export для Vercel Serverless Functions
export default app;

// Start server только для локальной разработки
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
    console.log(`📊 API endpoints available at http://localhost:${PORT}/api`);
  });
}
