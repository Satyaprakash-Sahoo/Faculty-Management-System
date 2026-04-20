import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import facultyRoutes from './routes/faculty.js';
import Faculty from './models/Faculty.js';

const app = express();
const PORT = process.env.PORT || 5002;
const MONGO_URI = process.env.MONGO_URI;

// --- Pre-flight checks ---
if (!MONGO_URI) {
  console.error('FATAL ERROR: MONGO_URI is not defined in the .env file.');
  process.exit(1);
}

app.use(cors());
app.use(express.json());

// --- API Routes ---
app.use('/api/auth', authRoutes);
app.use('/api/faculty', facultyRoutes);

// Seed the database (no auth required for seeding)
app.get('/api/seed-faculty', async (req, res) => {
    try {
        await Faculty.deleteMany({});
        const initialFaculty = [
            { name: 'Dr. Evelyn Reed', subject: 'Physics', email: 'e.reed@institute.edu', phone: '123-456-7890', qualification: 'Ph.D. in Physics', experience: '15 years', profilePicture: 'https://i.pravatar.cc/150?u=1' },
            { name: 'Prof. Samuel Grant', subject: 'History', email: 's.grant@institute.edu', phone: '234-567-8901', qualification: 'M.A. in History', experience: '12 years', profilePicture: 'https://i.pravatar.cc/150?u=2' },
            { name: 'Dr. Eleanor Vance', subject: 'Computer Science', email: 'e.vance@institute.edu', phone: '345-678-9012', qualification: 'Ph.D. in Computer Science', experience: '10 years', profilePicture: 'https://i.pravatar.cc/150?u=3' },
        ];
        await Faculty.insertMany(initialFaculty);
        res.status(200).send('Faculty data seeded successfully!');
    } catch (error) {
        res.status(500).json({ message: 'Error seeding data', error: error.message });
    }
});


// --- MongoDB Connection & Server Startup ---
console.log('Connecting to Faculty Information database...');
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Faculty Information database connected successfully.');
    app.listen(PORT, () => {
      console.log(`Faculty Information API server is running on http://localhost:${PORT}`);
      console.log(`Visit http://localhost:${PORT}/api/seed-faculty to populate the database with initial data.`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to the database:', err);
    process.exit(1);
  });