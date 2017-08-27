namespace aci.Controllers {

  const apiUrl = '/api/cars/search/';

    export class HomeController {

      public center = {latitude: 32.8091084, longitude: -97.12631440000001};
      public zoom = 12;
      public markers = [
        {
              id: 0,
              options: {
                  title: 'Allen Commercial Industries',
              },
              latitude: 32.8091084,
              longitude: -97.12631440000001
          },
                    ];




                    public payload
                    public isAdmin





            public leaderboard
            public WebAddress

            public addLeaderboard() {
              console.log("sssssssssssssssssss")
                    this.leaderboardService.saveLeaderboard(this.leaderboard);
                  };

            public getLeaderboard() {

                    this.leaderboardService.getLeaderboard(this.WebAddress).then((result) => {
                    this.leaderboard = result;
                  })
                };
                public showLeaderboardModal(leaderboard:string) {
                     this.$uibModal.open({
                         templateUrl: '/ngApp/views/leaderboardmodal.html',
                         controller: 'LeaderboardDialogController',
                         controllerAs: 'vm',
                         resolve: {
                              dataFromHomeController: () => leaderboard
                         },
                         size: 'lg'
                     });
                 }

//Home controller constructor
      constructor(
        public $scope,
        public leaderboardService,
        private $uibModal: angular.ui.bootstrap.IModalService,
        public $http
      ) {
        //admin ng-show
        let token = window.localStorage['token'];
        if(token) {
          this.payload = JSON.parse(window.atob(token.split('.')[1]));
          if(this.payload.role === 'admin') {
            this.isAdmin = true;
          } else {
            this.isAdmin = false;
          }
        }


        this.leaderboard=this.leaderboardService.getLeaderboard()
        console.log(this.leaderboard)


//carousel
        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        var slides = $scope.slides = [];
        var currIndex = 0;

        $scope.addSlide = function() {
          var newWidth = 600 + slides.length + 1;
          slides.push({
            image: 'https://image.ibb.co/nNDue5/carouselpic4.jpg',
            text: ['Image 1'][slides.length % 1],
            id: currIndex++
          });
          slides.push({
            image: 'https://image.ibb.co/nNDue5/carouselpic4.jpg',
            text: ['image 2'][slides.length % 1],
            id: currIndex++
          });
          slides.push({
            image: 'https://image.ibb.co/nNDue5/carouselpic4.jpg',
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
//carousel end


    }



    export class AboutController {
      public payload
      public isAdmin

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
        //admin ng-show
        let token = window.localStorage['token'];
        if(token) {
          this.payload = JSON.parse(window.atob(token.split('.')[1]));
          if(this.payload.role === 'admin') {
            this.isAdmin = true;
          } else {
            this.isAdmin = false;
          }
        }

        //leaderboard
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
            image: 'https://image.ibb.co/nNDue5/carouselpic4.jpg',
            text: ['Image 1'][slides.length % 1],
            id: currIndex++
          });
          slides.push({
            image: 'https://image.ibb.co/nNDue5/carouselpic4.jpg',
            text: ['image 2'][slides.length % 1],
            id: currIndex++
          });
          slides.push({
            image: 'https://image.ibb.co/nNDue5/carouselpic4.jpg',
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
              public payload
              public isAdmin
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
                   public viewProductModal(product:string) {
                        this.$uibModal.open({
                            templateUrl: '/ngApp/views/viewproductmodal.html',
                            controller: 'DialogController',
                            controllerAs: 'vm',
                            resolve: {
                                 dataFromProductsController: () => product
                            },
                            size: 'lg'
                        });
                    }

                   public showAddProductModal(product:string) {
                        this.$uibModal.open({
                            templateUrl: '/ngApp/views/addproductmodal.html',
                            controller: 'AddProductDialogController',
                            controllerAs: 'vm',

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



                  let token = window.localStorage['token'];
                  if(token) {
                    this.payload = JSON.parse(window.atob(token.split('.')[1]));
                    if(this.payload.role === 'admin') {
                      this.isAdmin = true;
                    } else {
                      this.isAdmin = false;
                    }
                  }






            this.productId = $stateParams['id'];
            this.leaderboard=this.leaderboardService.getLeaderboard()
            console.log(this.leaderboard)


          }




    }





    export class CustomBuildsController {

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
                  public payload
                  public isAdmin
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
                         public viewProductModal(product:string) {
                              this.$uibModal.open({
                                  templateUrl: '/ngApp/views/viewproductmodal.html',
                                  controller: 'DialogController',
                                  controllerAs: 'vm',
                                  resolve: {
                                       dataFromProductsController: () => product
                                  },
                                  size: 'lg'
                              });
                          }


                          public showAddProductModal(product:string) {
                               this.$uibModal.open({
                                   templateUrl: '/ngApp/views/addproductmodal.html',
                                   controller: 'AddProductDialogController',
                                   controllerAs: 'vm',

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

                        let token = window.localStorage['token'];
                        if(token) {
                          this.payload = JSON.parse(window.atob(token.split('.')[1]));
                          if(this.payload.role === 'admin') {
                            this.isAdmin = true;
                          } else {
                            this.isAdmin = false;
                          }
                        }


                  this.productId = $stateParams['id'];
                  this.leaderboard=this.leaderboardService.getLeaderboard()
                  console.log(this.leaderboard)

                }

    }








    export class ContactUsController {
      public payload
      public isAdmin

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
            //admin ng-show
            let token = window.localStorage['token'];
            if(token) {
              this.payload = JSON.parse(window.atob(token.split('.')[1]));
              if(this.payload.role === 'admin') {
                this.isAdmin = true;
              } else {
                this.isAdmin = false;
              }
            }


            this.leaderboard=this.leaderboardService.getLeaderboard()
            console.log(this.leaderboard)
          }



    }






    export class GetStartedController {
      public payload
      public isAdmin


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
        //admin ng-show
        let token = window.localStorage['token'];
        if(token) {
          this.payload = JSON.parse(window.atob(token.split('.')[1]));
          if(this.payload.role === 'admin') {
            this.isAdmin = true;
          } else {
            this.isAdmin = false;
          }
        }

        //leaderboard
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
            image: 'https://image.ibb.co/nNDue5/carouselpic4.jpg',
            text: ['Image 1'][slides.length % 1],
            id: currIndex++
          });
          slides.push({
            image: 'https://image.ibb.co/nNDue5/carouselpic4.jpg',
            text: ['image 2'][slides.length % 1],
            id: currIndex++
          });
          slides.push({
            image: 'https://image.ibb.co/nNDue5/carouselpic4.jpg',
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
        }

      }
}





//modal service
class DialogController {
  public payload
  public isAdmin
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
    constructor(private productService, public dataFromProductsController , private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) {
      //admin ng-show
      let token = window.localStorage['token'];
      if(token) {
        this.payload = JSON.parse(window.atob(token.split('.')[1]));
        if(this.payload.role === 'admin') {
          this.isAdmin = true;
        } else {
          this.isAdmin = false;
        }
      }

     }
}
//end
angular.module('aci').controller('DialogController', DialogController);



//modal service
class AddProductDialogController {
  public payload
  public isAdmin
  public category
  public products
  public product
  public productId
    public ok() {
        this.$uibModalInstance.close();
}


public addProduct() {
  this.productService.saveProduct(this.product);
}

    constructor(private productService, private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) {
      //admin ng-show
      let token = window.localStorage['token'];
      if(token) {
        this.payload = JSON.parse(window.atob(token.split('.')[1]));
        if(this.payload.role === 'admin') {
          this.isAdmin = true;
        } else {
          this.isAdmin = false;
        }
      }

     }
}
//end
angular.module('aci').controller('AddProductDialogController', AddProductDialogController);










export class LogInController {
      public leaderboard
      public WebAddress
      public leaderboardId
      public payload
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
        public $state,


      ) {
        //admin ng-show
        let token = window.localStorage['token'];
        if(token) {
          this.payload = JSON.parse(window.atob(token.split('.')[1]));
          if(this.payload.role === 'admin') {
            this.isAdmin = true;
          } else {
            this.isAdmin = false;
          }
        }

        this.leaderboard=this.leaderboardService.getLeaderboard()
        console.log(this.leaderboard)
      }
    }

    export class RegisterController {
      public payload
      public isAdmin
      public leaderboardId
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
            public editLeaderboard() {
                this.leaderboard._id = this.leaderboardId;
                this.leaderboardService.saveleaderboard(this.leaderboard);
            }
            constructor(
              private userService,
              public $scope,
            private leaderboardService
          ) {


            //admin ng-show
            let token = window.localStorage['token'];
            if(token) {
              this.payload = JSON.parse(window.atob(token.split('.')[1]));
              if(this.payload.role === 'admin') {
                this.isAdmin = true;
              } else {
                this.isAdmin = false;
              }
            }


            this.leaderboard=this.leaderboardService.getLeaderboard()
            console.log(this.leaderboard)
          }


    }




//modal service
class LeaderboardDialogController {
  public payload
  public isAdmin
  public leaderboard
  public WebAddress

  public ok() {
      this.$uibModalInstance.close();
}
  public addLeaderboard() {
    console.log("sssssssssssssssssss")
          this.leaderboardService.saveLeaderboard(this.leaderboard);
        };

  public getLeaderboard() {

          this.leaderboardService.getLeaderboard(this.WebAddress).then((result) => {
          this.leaderboard = result;
        })
      };



    constructor(public leaderboardService, public dataFromHomeController , private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) {

      //admin ng-show
      let token = window.localStorage['token'];
      if(token) {
        this.payload = JSON.parse(window.atob(token.split('.')[1]));
        if(this.payload.role === 'admin') {
          this.isAdmin = true;
        } else {
          this.isAdmin = false;
        }
      }

     }
}
//end
angular.module('aci').controller('LeaderboardDialogController', LeaderboardDialogController);





//ng-hide controller
export class TestnghideController {
  public payload
  public isAdmin

  public create() {
    if(this.payload.role === 'admin') {
      alert('Success!');
    } else {
      alert('Denied. admins only.')
    }
  }

  public read() {
    alert('Success!');
  }

  public update() {
    if(this.payload.role === 'admin') {
      alert('Success!');
    } else {
      alert('Denied. admins only.')
    }
  }

  public delete() {
    if(this.payload.role === 'admin') {
      alert('Success!');
    } else {
      alert('Denied. admins only.')
    }
  }



  constructor() {


          let token = window.localStorage['token'];
          if(token) {
            this.payload = JSON.parse(window.atob(token.split('.')[1]));
            if(this.payload.role === 'admin') {
              this.isAdmin = true;
            } else {
              this.isAdmin = false;
            }
          }
        }



}

}
