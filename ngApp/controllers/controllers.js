var aci;
(function (aci) {
    var Controllers;
    (function (Controllers) {
        var apiUrl = '/api/cars/search/';
        var HomeController = (function () {
            function HomeController($scope, leaderboardService) {
                this.$scope = $scope;
                this.leaderboardService = leaderboardService;
                this.center = { latitude: 32.8091084, longitude: -97.12631440000001 };
                this.zoom = 12;
                this.markers = [
                    {
                        id: 0,
                        options: {
                            title: 'Allen Commercial Industries',
                        },
                        latitude: 32.8091084,
                        longitude: -97.12631440000001
                    },
                ];
                var token = window.localStorage['token'];
                if (token) {
                    this.payload = JSON.parse(window.atob(token.split('.')[1]));
                    if (this.payload.role === 'admin') {
                        this.isAdmin = true;
                    }
                    else {
                        this.isAdmin = false;
                    }
                }
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
                        image: 'https://image.ibb.co/iUwvZ5/carouselpic2.jpg',
                        text: ['Image 1'][slides.length % 1],
                        id: currIndex++
                    });
                    slides.push({
                        image: 'https://image.ibb.co/iUwvZ5/carouselpic2.jpg',
                        text: ['image 2'][slides.length % 1],
                        id: currIndex++
                    });
                    slides.push({
                        image: 'https://image.ibb.co/iUwvZ5/carouselpic2.jpg',
                        text: ['image3'][slides.length % 1],
                        id: currIndex++
                    });
                };
                $scope.randomize = function () {
                    var indexes = generateIndexesArray();
                    assignNewIndexesToSlides(indexes);
                };
                for (var i = 0; i < 1; i++) {
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
                var token = window.localStorage['token'];
                if (token) {
                    this.payload = JSON.parse(window.atob(token.split('.')[1]));
                    if (this.payload.role === 'admin') {
                        this.isAdmin = true;
                    }
                    else {
                        this.isAdmin = false;
                    }
                }
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
                        image: 'https://image.ibb.co/iUwvZ5/carouselpic2.jpg',
                        text: ['Image 1'][slides.length % 1],
                        id: currIndex++
                    });
                    slides.push({
                        image: 'https://image.ibb.co/iUwvZ5/carouselpic2.jpg',
                        text: ['image 2'][slides.length % 1],
                        id: currIndex++
                    });
                    slides.push({
                        image: 'https://image.ibb.co/iUwvZ5/carouselpic2.jpg',
                        text: ['image3'][slides.length % 1],
                        id: currIndex++
                    });
                };
                $scope.randomize = function () {
                    var indexes = generateIndexesArray();
                    assignNewIndexesToSlides(indexes);
                };
                for (var i = 0; i < 1; i++) {
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
            function ProductsController($scope, leaderboardService, $log, productService, $stateParams, $uibModal) {
                this.$scope = $scope;
                this.leaderboardService = leaderboardService;
                this.$log = $log;
                this.productService = productService;
                this.$stateParams = $stateParams;
                this.$uibModal = $uibModal;
                var token = window.localStorage['token'];
                if (token) {
                    this.payload = JSON.parse(window.atob(token.split('.')[1]));
                    if (this.payload.role === 'admin') {
                        this.isAdmin = true;
                    }
                    else {
                        this.isAdmin = false;
                    }
                }
                this.productId = $stateParams['id'];
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
            ProductsController.prototype.getProducts = function (category) {
                var _this = this;
                this.productService.getProducts(category).then(function (result) {
                    _this.products = result;
                    console.log(_this.products);
                });
            };
            ProductsController.prototype.deleteProduct = function (productId) {
                this.productService.removeProduct(productId);
            };
            ProductsController.prototype.addProduct = function () {
                this.productService.saveProduct(this.product);
            };
            ProductsController.prototype.editProduct = function () {
                this.product._id = this.productId;
                this.productService.saveProduct(this.product);
            };
            ProductsController.prototype.showProductModal = function (product) {
                this.$uibModal.open({
                    templateUrl: '/ngApp/views/productmodal.html',
                    controller: 'DialogController',
                    controllerAs: 'vm',
                    resolve: {
                        dataFromProductsController: function () { return product; }
                    },
                    size: 'lg'
                });
            };
            return ProductsController;
        }());
        Controllers.ProductsController = ProductsController;
        var ContactUsController = (function () {
            function ContactUsController($scope, leaderboardService) {
                this.$scope = $scope;
                this.leaderboardService = leaderboardService;
                var token = window.localStorage['token'];
                if (token) {
                    this.payload = JSON.parse(window.atob(token.split('.')[1]));
                    if (this.payload.role === 'admin') {
                        this.isAdmin = true;
                    }
                    else {
                        this.isAdmin = false;
                    }
                }
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
            function GetStartedController($stateParams, productService, $log, $document, $uibModal, $http) {
                this.$stateParams = $stateParams;
                this.productService = productService;
                this.$log = $log;
                this.$document = $document;
                this.$uibModal = $uibModal;
                this.$http = $http;
                var token = window.localStorage['token'];
                if (token) {
                    this.payload = JSON.parse(window.atob(token.split('.')[1]));
                    if (this.payload.role === 'admin') {
                        this.isAdmin = true;
                    }
                    else {
                        this.isAdmin = false;
                    }
                }
                this.productId = $stateParams['id'];
            }
            GetStartedController.prototype.getProducts = function (category) {
                var _this = this;
                this.productService.getProducts(category).then(function (result) {
                    _this.products = result;
                    console.log(_this.products);
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
            GetStartedController.prototype.showProductModal = function (product) {
                this.$uibModal.open({
                    templateUrl: '/ngApp/views/productmodal.html',
                    controller: 'DialogController',
                    controllerAs: 'vm',
                    resolve: {
                        dataFromProductsController: function () { return product; }
                    },
                    size: 'lg'
                });
            };
            return GetStartedController;
        }());
        Controllers.GetStartedController = GetStartedController;
        var DialogController = (function () {
            function DialogController(productService, dataFromProductsController, $uibModalInstance) {
                this.productService = productService;
                this.dataFromProductsController = dataFromProductsController;
                this.$uibModalInstance = $uibModalInstance;
                var token = window.localStorage['token'];
                if (token) {
                    this.payload = JSON.parse(window.atob(token.split('.')[1]));
                    if (this.payload.role === 'admin') {
                        this.isAdmin = true;
                    }
                    else {
                        this.isAdmin = false;
                    }
                }
            }
            DialogController.prototype.ok = function () {
                this.$uibModalInstance.close();
            };
            DialogController.prototype.getProducts = function (category) {
                var _this = this;
                this.productService.getProducts(category).then(function (result) {
                    _this.products = result;
                    console.log(_this.products);
                });
            };
            DialogController.prototype.deleteProduct = function (productId) {
                this.productService.removeProduct(productId);
            };
            DialogController.prototype.addProduct = function () {
                this.productService.saveProduct(this.product);
            };
            DialogController.prototype.editProduct = function () {
                this.productService.saveProduct(this.dataFromProductsController);
                console.log();
            };
            return DialogController;
        }());
        angular.module('aci').controller('DialogController', DialogController);
        var LogInController = (function () {
            function LogInController(leaderboardService, userService, $window, $state, payload) {
                this.leaderboardService = leaderboardService;
                this.userService = userService;
                this.$window = $window;
                this.$state = $state;
                this.payload = payload;
                var token = window.localStorage['token'];
                if (token) {
                    this.payload = JSON.parse(window.atob(token.split('.')[1]));
                    if (this.payload.role === 'admin') {
                        this.isAdmin = true;
                    }
                    else {
                        this.isAdmin = false;
                    }
                }
                this.leaderboard = this.leaderboardService.getLeaderboard();
                console.log(this.leaderboard);
            }
            LogInController.prototype.login = function () {
                if (this.isAdmin === true) {
                    this.userInfo.role = 'admin';
                    this.createSession();
                }
                else {
                    this.userInfo.role = 'guest';
                    this.createSession();
                }
            };
            LogInController.prototype.createSession = function () {
                var _this = this;
                this.userService.loginUser(this.userInfo).then(function (data) {
                    _this.$window.localStorage.setItem("token", JSON.stringify(data.token));
                    _this.$state.go('home');
                });
            };
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
            return LogInController;
        }());
        Controllers.LogInController = LogInController;
        var RegisterController = (function () {
            function RegisterController(userService, $scope, leaderboardService) {
                this.userService = userService;
                this.$scope = $scope;
                this.leaderboardService = leaderboardService;
                var token = window.localStorage['token'];
                if (token) {
                    this.payload = JSON.parse(window.atob(token.split('.')[1]));
                    if (this.payload.role === 'admin') {
                        this.isAdmin = true;
                    }
                    else {
                        this.isAdmin = false;
                    }
                }
                this.leaderboard = this.leaderboardService.getLeaderboard();
                console.log(this.leaderboard);
            }
            RegisterController.prototype.signup = function () {
                this.userService.registerUser(this.user).then(function () {
                    alert('signup successful, please login');
                });
            };
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
            RegisterController.prototype.editLeaderboard = function () {
                this.leaderboard._id = this.leaderboardId;
                this.leaderboardService.saveleaderboard(this.leaderboard);
            };
            return RegisterController;
        }());
        Controllers.RegisterController = RegisterController;
        var TestController = (function () {
            function TestController(leaderboardService, $uibModal, $http) {
                this.leaderboardService = leaderboardService;
                this.$uibModal = $uibModal;
                this.$http = $http;
                var token = window.localStorage['token'];
                if (token) {
                    this.payload = JSON.parse(window.atob(token.split('.')[1]));
                    if (this.payload.role === 'admin') {
                        this.isAdmin = true;
                    }
                    else {
                        this.isAdmin = false;
                    }
                }
                this.leaderboard = this.leaderboardService.getLeaderboard();
            }
            TestController.prototype.addLeaderboard = function () {
                console.log("sssssssssssssssssss");
                this.leaderboardService.saveLeaderboard(this.leaderboard);
            };
            ;
            TestController.prototype.getLeaderboard = function () {
                var _this = this;
                this.leaderboardService.getLeaderboard(this.WebAddress).then(function (result) {
                    _this.leaderboard = result;
                });
            };
            ;
            return TestController;
        }());
        Controllers.TestController = TestController;
        var TestnghideController = (function () {
            function TestnghideController() {
                var token = window.localStorage['token'];
                if (token) {
                    this.payload = JSON.parse(window.atob(token.split('.')[1]));
                    if (this.payload.role === 'admin') {
                        this.isAdmin = true;
                    }
                    else {
                        this.isAdmin = false;
                    }
                }
            }
            TestnghideController.prototype.create = function () {
                if (this.payload.role === 'admin') {
                    alert('Success!');
                }
                else {
                    alert('Denied. admins only.');
                }
            };
            TestnghideController.prototype.read = function () {
                alert('Success!');
            };
            TestnghideController.prototype.update = function () {
                if (this.payload.role === 'admin') {
                    alert('Success!');
                }
                else {
                    alert('Denied. admins only.');
                }
            };
            TestnghideController.prototype.delete = function () {
                if (this.payload.role === 'admin') {
                    alert('Success!');
                }
                else {
                    alert('Denied. admins only.');
                }
            };
            return TestnghideController;
        }());
        Controllers.TestnghideController = TestnghideController;
    })(Controllers = aci.Controllers || (aci.Controllers = {}));
})(aci || (aci = {}));
