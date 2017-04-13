// server/routes/funnelsRoutes.js
// REST endpoints for the user

var userRoutes =  function(router, funnelsController) {
    router.get('/funnels.json', funnelsController.getData);
};

module.exports = userRoutes;
