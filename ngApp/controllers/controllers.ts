namespace aci.Controllers {

    export class HomeController {





      public leaderboard
      public WebAddress

      public addLeaderboard() {
        console.log("sssssssssssssssssssssssssssssssss")
              this.leaderboardService.saveLeaderboard(this.leaderboard);
            }

      public getLeaderboard() {

              this.leaderboardService.getLeaderboard(this.WebAddress).then((result) => {
              this.leaderboard = result;
            })
            }





      constructor(
        public $scope,
      private leaderboardService
      ) {


        this.leaderboard=this.leaderboardService.getLeaderboard()
        console.log(this.leaderboard)
        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        let slides = $scope.slides = [];
        let currIndex = 0;

        $scope.addSlide = function() {
          let newWidth = 600 + slides.length + 1;
          slides.push({
            image: '//unsplash.it/' + newWidth + '/300',
            text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
            id: currIndex++
          });
        };

        $scope.randomize = function() {
          let indexes = generateIndexesArray();
          assignNewIndexesToSlides(indexes);
        };

        for (let i = 0; i < 4; i++) {
          $scope.addSlide();
        }

        // Randomize logic below

        function assignNewIndexesToSlides(indexes) {
          for (let i = 0, l = slides.length; i < l; i++) {
            slides[i].id = indexes.pop();
          }
        }

        function generateIndexesArray() {
          let indexes = [];
          for (let i = 0; i < currIndex; ++i) {
            indexes[i] = i;
          }
          return shuffle(indexes);
        }

        // http://stackoverflow.com/questions/962802#962890
        function shuffle(array) {
          let tmp, current, top = array.length;

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

    }

    export class AboutController {

      public leaderboard
      public WebAddress

      public addLeaderboard() {
        console.log("sssssssssssssssssssssssssssssssss")
              this.leaderboardService.saveLeaderboard(this.leaderboard);
            }

      public getLeaderboard() {

              this.leaderboardService.getLeaderboard(this.WebAddress).then((result) => {
              this.leaderboard = result;
            })
            }



      constructor(

        private leaderboardService,
        public $scope
      ) {
        //leaderboard
        this.leaderboard=this.leaderboardService.getLeaderboard()
        console.log(this.leaderboard)

        //carousel
        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        let slides = $scope.slides = [];
        let currIndex = 0;

        $scope.addSlide = function() {
          let newWidth = 600 + slides.length + 1;
          slides.push({
            image: '//unsplash.it/' + newWidth + '/300',
            text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
            id: currIndex++
          });
        };

        $scope.randomize = function() {
          let indexes = generateIndexesArray();
          assignNewIndexesToSlides(indexes);
        };

        for (let i = 0; i < 4; i++) {
          $scope.addSlide();
        }

        // Randomize logic below

        function assignNewIndexesToSlides(indexes) {
          for (let i = 0, l = slides.length; i < l; i++) {
            slides[i].id = indexes.pop();
          }
        }

        function generateIndexesArray() {
          let indexes = [];
          for (let i = 0; i < currIndex; ++i) {
            indexes[i] = i;
          }
          return shuffle(indexes);
        }

        // http://stackoverflow.com/questions/962802#962890
        function shuffle(array) {
          let tmp, current, top = array.length;

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

    }

    export class ProductsController {

      public leaderboard
      public WebAddress

      public addLeaderboard() {
        console.log("sssssssssssssssssssssssssssssssss")
              this.leaderboardService.saveLeaderboard(this.leaderboard);
            }

      public getLeaderboard() {

              this.leaderboardService.getLeaderboard(this.WebAddress).then((result) => {
              this.leaderboard = result;
            })
            }



          public  constructor(
              public $scope,
            private leaderboardService,
            public $log
          ) {

            this.leaderboard=this.leaderboardService.getLeaderboard()
            console.log(this.leaderboard)

        /*    $scope.items = [
              'The first choice!',
              'And another choice for you.',
              'but wait! A third!'
            ];

            $scope.status = {
              isopen: false
            };

            $scope.toggled = function(open) {
              $log.log('Dropdown is now: ', open);
            };

            $scope.toggleDropdown = function($event) {
              $event.preventDefault();
              $event.stopPropagation();
              $scope.status.isopen = !$scope.status.isopen;
            };

            $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
          });*/

          }

//inline dropdown





    }
    export class ContactUsController {

      public leaderboard
      public WebAddress

      public addLeaderboard() {
        console.log("sssssssssssssssssssssssssssssssss")
              this.leaderboardService.saveLeaderboard(this.leaderboard);
            }

      public getLeaderboard() {
console.log("rthtrhrth")
              this.leaderboardService.getLeaderboard(this.WebAddress).then((result) => {
              this.leaderboard = result;
            })
            }

            constructor(
              public $scope,
            private leaderboardService
          ) {

            this.leaderboard=this.leaderboardService.getLeaderboard()
            console.log(this.leaderboard)
          }



    }






    export class GetStartedController {

      public category
            public products
            public product
            public productId

            public getProducts() {
              this.productService.getProducts(this.category).then((result) => {
                this.products = result;
              })
            }
            public deleteProduct(productId) {
              this.productService.removeProduct(productId);
            }
            public addProduct() {
              this.productService.saveProduct(this.product);
            }
            public editProduct() {
                this.product._id = this.productId;
                this.productService.saveProduct(this.product);
            }
private constructor(
        public $stateParams,
        private productService
     ) {
this.productId = $stateParams['id'];

   }

}










    export class LogInController {

      public userInfo
      public leaderboard
      public WebAddress

      public addLeaderboard() {
        console.log("sssssssssssssssssssssssssssssssss")
              this.leaderboardService.saveLeaderboard(this.leaderboard);
            }

      public getLeaderboard() {

              this.leaderboardService.getLeaderboard(this.WebAddress).then((result) => {
              this.leaderboard = result;
            })
            }





      public login() {
        this.userService.loginUser(this.userInfo).then((data) => {
          this.$window.localStorage.setItem("token", JSON.stringify(data.token));
          alert('login successful');
        })
      }
      public constructor(
        private leaderboardService,
        private userService,
        public $window
      ) {
        this.leaderboard=this.leaderboardService.getLeaderboard()
        console.log(this.leaderboard)
      }
    }

    export class RegisterController {

      public leaderboard
      public WebAddress

      public addLeaderboard() {
        console.log("sssssssssssssssssssssssssssssssss")
              this.leaderboardService.saveLeaderboard(this.leaderboard);
            }

      public getLeaderboard() {

              this.leaderboardService.getLeaderboard(this.WebAddress).then((result) => {
              this.leaderboard = result;
            })
            }

            constructor(
              public $scope,
            private leaderboardService
          ) {

            this.leaderboard=this.leaderboardService.getLeaderboard()
            console.log(this.leaderboard)
          }


    }



}
