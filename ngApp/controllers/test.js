var aci;
(function (aci) {
    var Controllers;
    (function (Controllers) {
        var testController = (function () {
            function testController($scope, placeService, $stateParams) {
                this.$scope = $scope;
                this.placeService = placeService;
                this.$stateParams = $stateParams;
                this.placeId = $stateParams['id'];
            }
            testController.prototype.getPlaces = function () {
                var _this = this;
                this.placeService.getPlaces(this.category).then(function (result) {
                    _this.places = result;
                });
            };
            testController.prototype.deletePlace = function (placeId) {
                this.placeService.removePlace(placeId);
            };
            testController.prototype.addPlace = function () {
                this.placeService.savePlace(this.place);
            };
            testController.prototype.editPlace = function () {
                this.place._id = this.placeId;
                this.placeService.savePlace(this.place);
            };
            return testController;
        }());
        Controllers.testController = testController;
    })(Controllers = aci.Controllers || (aci.Controllers = {}));
})(aci || (aci = {}));
