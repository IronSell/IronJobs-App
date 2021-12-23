const router = require('express').Router();

//Models
const JobOffer = require('../models/JobOffer.model');
const User = require('../models/User.model');

//Middleware
const isLoggedIn = require('../middleware/isLoggedIn');
const isLoggedOut = require('../middleware/isLoggedOut');

// GET offers page
router.get('/', async (req, res) => {
  try {
    const searchOffers = await JobOffer.find();
    return res.status(200).json({ message: 'Offers found', searchOffers });
  } catch (err) {
    return res.status(404).json({ errorMessage: 'Offers not found' });
  }
});

// GET offer page
router.get('/:_id', async (req, res) => {
  try {
    const showOffer = await JobOffer.findById(req.params._id);
    return res.status(200).json({ message: 'Offer found', showOffer });
  } catch (err) {
    return res.status(404).json({ errorMessage: 'Offer not found' });
  }
});

// GET searchbar
router.get('/:jobTitle', async (req, res) => {
  try {
    const x = await JobOffer.find(req.body.jobTitle, {
      input: { $regex: /pattern/, $options: 'y' },
    });
  } catch (err) {
    return res.status(403).json({ errorMessage: 'Offer not found' });
  }
});

// PUT apply job
router.put('/:_id', async (req, res) => {
  const candidateId = req.params._id;
  const jobId = req.body.data;
  try {
    const offerApplied = await User.findByIdAndUpdate(
      candidateId,
        { $push: {appliedJobs: jobId}},
        {safe: true, upsert: true, new: true}
    );
    return res
      .status(200)
      .json({ message: 'You have applied successfuly', offerApplied });
  } catch (err) {
    return res.status(400).json({ message: 'There was an error when applying' });
  }
});

// DELETE offer
router.delete('/delete/:_id', isLoggedIn, async (req, res) => {
  try {
    const deletedOffer = await JobOffer.find(req.params._id);
    return res.status(200).json({ message: 'Offer deleted', deletedOffer });
  } catch (err) {
    return res.status(404).json({ errorMessage: 'Cannot delete the offer' });
  }
});

// Add to saved jobs
router.patch(
  '/favorites/:user_id/company/:job_id',
  isLoggedIn,
  async (req, res) => {
    const userId = req.params.user_id;
    const jobId = req.params.job_id;

    try {
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { $push: { savedJobs: jobId } },
        { safe: true, upsert: true, new: true }
      );
      return res
        .status(200)
        .json({ message: 'Offer add to favorites', updatedUser });
    } catch (err) {
      return res.status(404).json({ errorMessage: 'Cannot add to favorites' });
    }
  }
);

module.exports = router;
