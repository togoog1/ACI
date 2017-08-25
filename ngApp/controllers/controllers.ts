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



//Home controller constructor
      constructor(
        public $scope,
      private leaderboardService
      ) {

        this.leaderboard=this.leaderboardService.getLeaderboard()
        console.log(this.leaderboard)



        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        var slides = $scope.slides = [];
        var currIndex = 0;

        $scope.addSlide = function() {
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

        $scope.randomize = function() {
          var indexes = generateIndexesArray();
          assignNewIndexesToSlides(indexes);
        };

        for (var i = 0; i < 1; i++) {
          $scope.addSlide();
        }

        // Randomize logic below

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

        // http://stackoverflow.com/questions/962802#962890
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
        }}




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
                  public showProductModal(product:string) {
                       this.$uibModal.open({
                           templateUrl: '/ngApp/views/productmodal.html',
                           controller: 'DialogController',
                           controllerAs: 'vm',
                           resolve: {
                                dataFromProductsController: () => product
                           },
                           size: 'lg'
                       });
                   }


          public  constructor(
              public $scope,
            private leaderboardService,
            public $log,
            private productService,
            public $stateParams,
            private $uibModal: angular.ui.bootstrap.IModalService
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
            public showProductModal(product:string) {
                 this.$uibModal.open({
                     templateUrl: '/ngApp/views/productmodal.html',
                     controller: 'DialogController',
                     controllerAs: 'vm',
                     resolve: {
                          dataFromProductsController: () => product
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
  public category
  public products
  public product
  public productId
    public ok() {
        this.$uibModalInstance.close();
}
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

   this.productService.saveProduct(this.dataFromProductsController);
console.log( )
}
    constructor(private productService, public dataFromProductsController , private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) { }
}
//end
angular.module('aci').controller('DialogController', DialogController);








export class LogInController {
      public leaderboard
      public WebAddress

      public userInfo
      public isAdmin

      public login() {
        if(this.isAdmin === true) {
            this.userInfo.role = 'admin';
            this.createSession();
          }
      else {
          this.userInfo.role ='guest';
          this.createSession();
        }
      }

      public createSession(){
          this.userService.loginUser(this.userInfo).then((data) => {
              this.$window.localStorage.setItem("token", JSON.stringify(data.token));
              this.$state.go('home');
        })
      }


      public addLeaderboard() {
        console.log("sssssssssssssssssssssssssssssssss")
              this.leaderboardService.saveLeaderboard(this.leaderboard);
            }

      public getLeaderboard() {

              this.leaderboardService.getLeaderboard(this.WebAddress).then((result) => {
              this.leaderboard = result;
            })
            }




      public constructor(
        private leaderboardService,
        private userService,
        public $window,
        public $state
      ) {
        this.leaderboard=this.leaderboardService.getLeaderboard()
        console.log(this.leaderboard)
      }
    }

    export class RegisterController {

      public leaderboard
      public WebAddress
      public user

public signup() {
  this.userService.registerUser(this.user).then(() => {
    alert('signup successful, please login');
  })
}

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
              private userService,
              public $scope,
            private leaderboardService
          ) {

            this.leaderboard=this.leaderboardService.getLeaderboard()
            console.log(this.leaderboard)
          }


    }

export class TestController {
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

 constructor(private leaderboardService, private carService: aci.Services.CarService, private $uibModal: angular.ui.bootstrap.IModalService, public $http) {

}


}

export class Test2Controller{





}









//ng-hide controller
export class TestnghideController {
  public isAdmin

public payload


public create(){
  if(this.payload.role === 'admin') {
    alert('Sucess!');
  } else {
    alert('Denied. admins only')
  }
}

public read(){
    alert('Sucess!');
}

public update(){
  if(this.payload.role === 'admin') {
    alert('Sucess!');
  } else {
    alert('Denied. admins only')
  }
}
public delete(){
  if(this.payload.role === 'admin') {
    alert('Sucess!');
  } else {
    alert('Denied. admins only')
  }
}





constructor(){
let test=true
  if(test){
    this.isAdmin=true
    }
    else{
      this.isAdmin=false
    }
  }




}



//angular.module('aci').controller('testnghideController', testnghideController);



}
