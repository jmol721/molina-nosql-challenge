const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
    addReaction,
    updateThought,
    removeThought,
    removeReaction
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThought);

router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought);

router
    .route('/:userId')
    .post(createThought);

router
    .route('/:userId/:thoughtId')
    .put(addReaction)
    .delete(removeThought);

router
    .route('/:userId/:thoughtId/:reactionId')
    .delete(removeReaction);

    module.exports = router;