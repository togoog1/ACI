var aci;
(function (aci) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($scope, bannerService) {
                this.$scope = $scope;
                this.bannerService = bannerService;
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
            HomeController.prototype.getBanner = function () {
                var _this = this;
                this.bannerService.getBanner(this.WebAddress).then(function (result) {
                    _this.banners = result;
                });
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AboutController = (function () {
            function AboutController($scope) {
                this.$scope = $scope;
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
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
        var ProductsController = (function () {
            function ProductsController() {
            }
            return ProductsController;
        }());
        Controllers.ProductsController = ProductsController;
        var ContactUsController = (function () {
            function ContactUsController() {
            }
            return ContactUsController;
        }());
        Controllers.ContactUsController = ContactUsController;
        var GetStartedController = (function () {
            function GetStartedController(bannerService) {
                this.bannerService = bannerService;
                this.banners = this.bannerService.getBanner();
                console.log(this.banners);
            }
            GetStartedController.prototype.addBanner = function () {
                console.log("add Banners");
                this.bannerService.saveBanner(this.banners);
            };
            GetStartedController.prototype.getBanner = function () {
                var _this = this;
                this.bannerService.getBanner(this.WebAddress).then(function (result) {
                    _this.banners = result;
                });
            };
            return GetStartedController;
        }());
        Controllers.GetStartedController = GetStartedController;
        var LogInController = (function () {
            function LogInController(userService, $window) {
                this.userService = userService;
                this.$window = $window;
            }
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
            function RegisterController() {
            }
            return RegisterController;
        }());
        Controllers.RegisterController = RegisterController;
    })(Controllers = aci.Controllers || (aci.Controllers = {}));
})(aci || (aci = {}));
