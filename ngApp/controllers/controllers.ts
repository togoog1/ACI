namespace aci.Controllers {

  const apiUrl = '/api/cars/search/';

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
        //if check webtoken. access tokens payload.


        // Image factory
      //var createImage = function(src, title) {
    //      imageArray[0] = new Image();
//imageArray[0].src = "my-image-01.png";
//          imageArray[0].imageCaption = "A caption for the image";

//      };

        // array of images
    //    var images = [];

        // push two images to the array
    //    images.push(createImage("foo.jpg", "foo title"));
  //      images.push(createImage("bar.jpg", "bar title"));

        // output
  //      console.log(images);







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
console.log(this.slides)
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

                  public category
                  public products
                  public product
                  public productId

                  public getProducts(category) {
                    this.productService.getProducts(category).then((result) => {
                      this.products = result;
                      console.log(this.products)
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



          public  constructor(
              public $scope,
            private leaderboardService,
            public $log,
            private productService,
            public $stateParams,
          ) {
            this.productId = $stateParams['id'];
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

            public getProducts(category) {
              this.productService.getProducts(category).then((result) => {
                this.products = result;
                console.log(this.products)
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
            public showModal(product) {
                 this.$uibModal.open({
                     templateUrl: '/ngApp/views/modal.html',
                     controller: 'DialogController',
                     controllerAs: 'modal',
                     resolve: {
                          product: () => product
                     },
                     size: 'lg'
                 });
             }
private constructor(
        public $stateParams,
        private productService,
        private $log,
        private $document,
        private $uibModal: angular.ui.bootstrap.IModalService,
        public $http
     ) {
this.productId = $stateParams['id'];

   }

}





//modal service
class DialogController {
    public ok() {
        this.$uibModalInstance.close();
}
    constructor(public product:object, private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) { }
}
//end
angular.module('aci').controller('DialogController', DialogController);









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

export class TestController {
public cars;
public makes;
public makeId;
public carId;
public selectedMake = 0;
public selectedModel;
public search;
public matchingMakes;

public getMatchingMakes() {
  this.matchingMakes = this.carService.getMatchingMakes(this.makeId);
console.log(this.matchingMakes);

}





public getCars() {
    if (this.selectedMake == 0)
        return this.cars
    else
        return this.cars.filter(x => x.carMakeId == this.selectedMake);
}



public fetch() {
console.log(apiUrl+this.search)
this.$http.get(apiUrl + this.search).then((res) => {
//  console.log(res);
this.cars = res.data;
});
}








//  export function showModalUI(carId: number, $uibModal: angular.ui.bootstrap.IModalService, cars, makes) {

//       let car = cars.find(x => x.id == carId);
    // let make = makes.find(x => x.id == car.carMakeId);

//modal stuff
public showModal(car) {
     this.$uibModal.open({
         templateUrl: '/ngApp/views/modal.html',
         controller: 'DialogController',
         controllerAs: 'modal',
         resolve: {
              car: () => car
         },
         size: 'lg'
     });
 }

 constructor(private carService: aci.Services.CarService, private $uibModal: angular.ui.bootstrap.IModalService, public $http) {
     this.cars = this.carService.listCars();
     this.makes = this.carService.getAllMakes();
     //this.$http.get('/api/cars')
                 //  .then((response) => {
                   //    this.cars = response.data;
                 //  })

 }
}










//ng-hide controller
export class TestnghideController {



constructor(private $scope){

      var showApp = angular.module('showApp', []).controller('testnghideController', function($scope) {
    // set the default value of our number
      $scope.myNumber = 0;

    // function to evaluate if a number is even
      $scope.isEven = function(value) {
      if (value % 2 == 0)
        return true;
      else
        return false;
      };
    });
/**/


}





}



//angular.module('aci').controller('testnghideController', testnghideController);



}
