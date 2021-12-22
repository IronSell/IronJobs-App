const router = require('express').Router()

// Models
const User = require('../models/User.model')

// Middleware
const isLoggedIn = require('../middleware/isLoggedIn')
const isCompanyLoggedIn = require('../middleware/isCompanyLoggedIn')

// GET candidates page
router.get('/', isCompanyLoggedIn, async (req, res) => {
  try {
    const getCandidates = await User.find()
    return res
      .status(200)
      .json({ message: 'Candidates found 👍', getCandidates })
  } catch (err) {
    return res.status(404).json({ message: 'Page not found' })
  }
})

// GET candidate profile
router.get('/profile/:_id', isLoggedIn, async (req, res) => {
  try {
    const showUser = await User.findById(req.params._id)
    return res.status(200).json({ message: 'Candidate found', showUser })
  } catch (err) {
    return res.status(404).json({ errorMessage: 'This user does not' })
  }
})

// PUT update candidate profile
router.put('/:id', async (req, res) => {
  const {
    name,
    lastName,
    email,
    birth,
    telephoneNumber,
    province,
    postalCode,
    profession,
    linkedIn,
    facebook,
    instagram,
    studiesLevel,
  } = req.body

  try {
    const updateCandidate = await User.findByIdAndUpdate(
      req.params.id,
      {
        name,
        lastName,
        email,
        birth,
        telephoneNumber,
        province,
        postalCode,
        profession,
        linkedIn,
        facebook,
        instagram,
        studiesLevel,
      },
      { new: true },
    )
    return res
      .status(200)
      .json({ message: 'Candidate edited', updateCandidate })
  } catch (err) {
    return res.status(400).json({ message: 'Cannot update the company' })
  }
})

module.exports = router
