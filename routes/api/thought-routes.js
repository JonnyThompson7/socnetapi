const router = require('express').Router();

router
  .route('/')
  .get(getAllThoughts)
  .post(createThought);

router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router
  .route('/:thoughtId/reactions')
  .post(addReaction);

router
  .route('/:thoughtId/reactions/:reactionId')
  .post(deleteReaction);


module.exports = router;