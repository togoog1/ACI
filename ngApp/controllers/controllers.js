var aci;
(function (aci) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($scope, leaderboardService) {
                this.$scope = $scope;
                this.leaderboardService = leaderboardService;
                this.leaderboard = this.leaderboardService.getLeaderboard();
                console.log(this.leaderboard);
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
            }
            HomeController.prototype.addLeaderboard = function () {
                console.log("sssssssssssssssssssssssssssssssss");
                this.leaderboardService.saveLeaderboard(this.leaderboard);
            };
            HomeController.prototype.getLeaderboard = function () {
                var _this = this;
                this.leaderboardService.getLeaderboard(this.WebAddress).then(function (result) {
                    _this.leaderboard = result;
                });
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AboutController = (function () {
            function AboutController(leaderboardService, $scope) {
                this.leaderboardService = leaderboardService;
                this.$scope = $scope;
                this.leaderboard = this.leaderboardService.getLeaderboard();
                console.log(this.leaderboard);
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
            }
            AboutController.prototype.addLeaderboard = function () {
                console.log("sssssssssssssssssssssssssssssssss");
                this.leaderboardService.saveLeaderboard(this.leaderboard);
            };
            AboutController.prototype.getLeaderboard = function () {
                var _this = this;
                this.leaderboardService.getLeaderboard(this.WebAddress).then(function (result) {
                    _this.leaderboard = result;
                });
            };
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
        var ProductsController = (function () {
            function ProductsController($scope, leaderboardService, $log) {
                this.$scope = $scope;
                this.leaderboardService = leaderboardService;
                this.$log = $log;
                this.leaderboard = this.leaderboardService.getLeaderboard();
                console.log(this.leaderboard);
            }
            ProductsController.prototype.addLeaderboard = function () {
                console.log("sssssssssssssssssssssssssssssssss");
                this.leaderboardService.saveLeaderboard(this.leaderboard);
            };
            ProductsController.prototype.getLeaderboard = function () {
                var _this = this;
                this.leaderboardService.getLeaderboard(this.WebAddress).then(function (result) {
                    _this.leaderboard = result;
                });
            };
            return ProductsController;
        }());
        Controllers.ProductsController = ProductsController;
        var ContactUsController = (function () {
            function ContactUsController($scope, leaderboardService) {
                this.$scope = $scope;
                this.leaderboardService = leaderboardService;
                this.leaderboard = this.leaderboardService.getLeaderboard();
                console.log(this.leaderboard);
            }
            ContactUsController.prototype.addLeaderboard = function () {
                console.log("sssssssssssssssssssssssssssssssss");
                this.leaderboardService.saveLeaderboard(this.leaderboard);
            };
            ContactUsController.prototype.getLeaderboard = function () {
                var _this = this;
                console.log("rthtrhrth");
                this.leaderboardService.getLeaderboard(this.WebAddress).then(function (result) {
                    _this.leaderboard = result;
                });
            };
            return ContactUsController;
        }());
        Controllers.ContactUsController = ContactUsController;
        var GetStartedController = (function () {
            function GetStartedController($stateParams, productService) {
                this.$stateParams = $stateParams;
                this.productService = productService;
                this.productId = $stateParams['id'];
            }
            GetStartedController.prototype.getProducts = function () {
                var _this = this;
                this.productService.getProducts(this.category).then(function (result) {
                    _this.products = result;
                });
            };
            GetStartedController.prototype.deleteProduct = function (productId) {
                this.productService.removeProduct(productId);
            };
            GetStartedController.prototype.addProduct = function () {
                this.productService.saveProduct(this.product);
            };
            GetStartedController.prototype.editProduct = function () {
                this.product._id = this.productId;
                this.productService.saveProduct(this.product);
            };
            return GetStartedController;
        }());
        Controllers.GetStartedController = GetStartedController;
        var LogInController = (function () {
            function LogInController(leaderboardService, userService, $window) {
                this.leaderboardService = leaderboardService;
                this.userService = userService;
                this.$window = $window;
                this.leaderboard = this.leaderboardService.getLeaderboard();
                console.log(this.leaderboard);
            }
            LogInController.prototype.addLeaderboard = function () {
                console.log("sssssssssssssssssssssssssssssssss");
                this.leaderboardService.saveLeaderboard(this.leaderboard);
            };
            LogInController.prototype.getLeaderboard = function () {
                var _this = this;
                this.leaderboardService.getLeaderboard(this.WebAddress).then(function (result) {
                    _this.leaderboard = result;
                });
            };
            LogInController.prototype.login = function () {
                var _this = this;
                this.userService.loginUser(this.userInfo).then(function (data) {
                    _this.$window.localStorage.setItem("token", JSON.stringify(data.token));
                    alert('login successful');
                });
            };
            return LogInController;
        }());
        Controllers.LogInController = LogInController;
        var RegisterController = (function () {
            function RegisterController($scope, leaderboardService) {
                this.$scope = $scope;
                this.leaderboardService = leaderboardService;
                this.leaderboard = this.leaderboardService.getLeaderboard();
                console.log(this.leaderboard);
            }
            RegisterController.prototype.addLeaderboard = function () {
                console.log("sssssssssssssssssssssssssssssssss");
                this.leaderboardService.saveLeaderboard(this.leaderboard);
            };
            RegisterController.prototype.getLeaderboard = function () {
                var _this = this;
                this.leaderboardService.getLeaderboard(this.WebAddress).then(function (result) {
                    _this.leaderboard = result;
                });
            };
            return RegisterController;
        }());
        Controllers.RegisterController = RegisterController;
    })(Controllers = aci.Controllers || (aci.Controllers = {}));
})(aci || (aci = {}));
