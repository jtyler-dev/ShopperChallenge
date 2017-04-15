// server/routes/user.js
// REST endpoints for the user

var userRoutes =  function(router, userController) {
    router.get('/user', userController.getUser);
    router.post('/user', userController.createNewUser);
};

module.exports = userRoutes;
