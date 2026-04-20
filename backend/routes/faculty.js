import express from 'express';
import Faculty from '../models/Faculty.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// GET all faculty
router.get('/', authenticateToken, async (req, res) => {
    try {
        const faculty = await Faculty.find({});
        res.json(faculty);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching faculty', error: error.message });
    }
});

// GET faculty by ID
router.get('/:id', authenticateToken, async (req, res) => {
    try {
        const member = await Faculty.findById(req.params.id);
        if (member) {
            res.json(member);
        } else {
            res.status(404).json({ message: 'Faculty member not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching faculty member', error: error.message });
    }
});

// POST new faculty
router.post('/', authenticateToken, async (req, res) => {
    try {
        const newMember = new Faculty(req.body);
        const savedMember = await newMember.save();
        res.status(201).json(savedMember);
    } catch (error) {
        res.status(400).json({ message: 'Error creating faculty member', error: error.message });
    }
});

// PUT update faculty
router.put('/:id', authenticateToken, async (req, res) => {
    try {
        const updatedMember = await Faculty.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (updatedMember) {
            res.json(updatedMember);
        } else {
            res.status(404).json({ message: 'Faculty member not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Error updating faculty member', error: error.message });
    }
});

// DELETE faculty
router.delete('/:id', authenticateToken, async (req, res) => {
    try {
        const deletedMember = await Faculty.findByIdAndDelete(req.params.id);
        if (deletedMember) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Faculty member not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting faculty member', error: error.message });
    }
});

export default router;

