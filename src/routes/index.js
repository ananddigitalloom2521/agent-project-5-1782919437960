const express = require('express');
const router = express.Router();
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('./users');
const { getVacationRequests, getVacationRequest, createVacationRequest, updateVacationRequest, deleteVacationRequest } = require('./vacation-requests');

router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

router.get('/vacation-requests', getVacationRequests);
router.get('/vacation-requests/:id', getVacationRequest);
router.post('/vacation-requests', createVacationRequest);
router.put('/vacation-requests/:id', updateVacationRequest);
router.delete('/vacation-requests/:id', deleteVacationRequest);

module.exports = router;