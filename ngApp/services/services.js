var aci;
(function (aci) {
    var Services;
    (function (Services) {
        var ProductService = (function () {
            function ProductService($resource) {
                this.$resource = $resource;
                this.ProductResource = $resource('/api/products/:tag');
            }
            ProductService.prototype.saveProduct = function (product) {
                return this.ProductResource.save(product);
            };
            ProductService.prototype.getProducts = function (category) {
                return this.ProductResource.query({ tag: category }).$promise;
            };
            ProductService.prototype.removeProduct = function (productId) {
                return this.ProductResource.delete({ tag: productId });
            };
            return ProductService;
        }());
        Services.ProductService = ProductService;
        angular.module('aci').service('productService', ProductService);
        var LeaderboardService = (function () {
            function LeaderboardService($resource) {
                this.$resource = $resource;
                this.LeaderboardResource = $resource('/api/leaderboard/:tag');
            }
            LeaderboardService.prototype.saveLeaderboard = function (leaderboard) {
                return this.LeaderboardResource.save(leaderboard);
            };
            LeaderboardService.prototype.getLeaderboard = function (WebAddress) {
                return this.LeaderboardResource.get({ tag: WebAddress });
            };
            return LeaderboardService;
        }());
        Services.LeaderboardService = LeaderboardService;
        angular.module('aci').service('leaderboardService', LeaderboardService);
        var UserService = (function () {
            function UserService($resource) {
                this.$resource = $resource;
                this.LoginResource = this.$resource('/userRoutes/api/Login/Local');
                this.SignUpResource = this.$resource('/userRoutes/api/Register');
            }
            UserService.prototype.registerUser = function (userObj) {
                return this.SignUpResource.save(userObj).$promise;
            };
            UserService.prototype.loginUser = function (userInfo) {
                return this.LoginResource.save(userInfo).$promise;
            };
            return UserService;
        }());
        Services.UserService = UserService;
        angular.module('aci').service('userService', UserService);
        angular.module('aci').controller('CarouselDemoCtrl', function ($scope) {
            $scope.myInterval = 5000;
            $scope.noWrapSlides = false;
            $scope.active = 0;
            var slides = $scope.slides = [];
            var currIndex = 0;
            $scope.addSlide = function () {
                var newWidth = 600 + slides.length + 1;
                slides.push({
                    image: '//unsplash.it/' + newWidth + '/300',
                    text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 4],
                    id: currIndex++
                });
            };
            $scope.randomize = function () {
                var indexes = generateIndexesArray();
                assignNewIndexesToSlides(indexes);
            };
            for (var i = 0; i < 4; i++) {
                $scope.addSlide();
            }
            function assignNewIndexesToSlides(indexes) {
                for (var i = 0, l = slides.length; i < l; i++) {
                    slides[i].id = indexes.pop();
                }
            }
            function generateIndexesArray() {
                var indexes = [];
                for (var i = 0; i < currIndex; ++i) {
                    indexes[i] = i;
                }
                return shuffle(indexes);
            }
            function shuffle(array) {
                var tmp, current, top = array.length;
                if (top) {
                    while (--top) {
                        current = Math.floor(Math.random() * (top + 1));
                        tmp = array[current];
                        array[current] = array[top];
                        array[top] = tmp;
                    }
                }
                return array;
            }
        });
        angular.module('aci').controller('Dropdown', function ($scope) {
            $scope.oneAtATime = true;
            $scope.groups = [
                {
                    title: 'Dynamic Group Header - 1',
                    content: 'Dynamic Group Body - 1'
                },
                {
                    title: 'Dynamic Group Header - 2',
                    content: 'Dynamic Group Body - 2'
                }
            ];
            $scope.items = ['Item 1', 'Item 2', 'Item 3'];
            $scope.addItem = function () {
                var newItemNo = $scope.items.length + 1;
                $scope.items.push('Item ' + newItemNo);
            };
            $scope.status = {
                isCustomHeaderOpen: false,
                isFirstOpen: true,
                isFirstDisabled: false
            };
        });
    })(Services = aci.Services || (aci.Services = {}));
})(aci || (aci = {}));
