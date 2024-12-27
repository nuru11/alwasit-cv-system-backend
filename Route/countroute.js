const express = require('express');
const { Count } = require('../models/count');

const router = express.Router();

// // Get the current count
// router.get('/count', async (req, res) => {
//   try {
//     const count = await Count.findOne(); // Assuming there's only one row for the count
//     res.json({ total: count ? count.cv_count : 0 }); // Updated column reference
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });

router.get('/count', async (req, res) => {
  try {
    const count = await Count.findOne(); // Assuming there's only one row for the count
    res.json({ cv_count: count ? count.cv_count : 0 }); // Return cv_count
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Increment the count
router.post('/count/increment', async (req, res) => {
  try {
    const count = await Count.findOne();
    
    if (count) {
      count.cv_count += 1; // Updated column reference
      await count.save();
      res.send('Count incremented');
    } else {
      // Create a new count if none exists
      await Count.create({ cv_count: 1 }); // Updated column reference
      res.send('Count initialized to 1');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Update the count to a specific value
router.put('/count', async (req, res) => {
  const { newValue } = req.body;

  if (typeof newValue !== 'number') {
    return res.status(400).send('Invalid input: newValue should be a number');
  }

  try {
    const count = await Count.findOne();
    
    if (count) {
      count.cv_count = newValue; // Updated column reference
      await count.save();
      res.send(`Count updated to ${newValue}`);
    } else {
      // Create a new count if none exists
      await Count.create({ cv_count: newValue }); // Updated column reference
      res.send(`Count initialized to ${newValue}`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

module.exports = router;