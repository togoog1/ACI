namespace aci.Services {


  //testing
  export class ProductService {
    public ProductResource

    public saveProduct(product) {
      return this.ProductResource.save(product);
    }

    public getProducts(category) {
      return this.ProductResource.query({tag: category}).$promise;
    }

    public removeProduct(productId) {
      return this.ProductResource.delete({tag: productId})
    }

    public constructor(
      public $resource
    ) {
      this.ProductResource = $resource('/api/products/:tag');
    }
  }

  angular.module('aci').service('productService', ProductService);




//leaderboard
  export class LeaderboardService {
    public LeaderboardResource

//save leaderboard
    public saveLeaderboard(leaderboard) {
          return this.LeaderboardResource.save(leaderboard);

        }

//get leaderboard
    public getLeaderboard(WebAddress) {
      return this.LeaderboardResource.get({tag: WebAddress});
    }
    public constructor(
      public $resource
    ) {
      this.LeaderboardResource = $resource('/api/leaderboard/:tag');
    }
  }
angular.module('aci').service('leaderboardService', LeaderboardService);








//log in sercvices


  export class UserService {
    public LoginResource
    public SignUpResource

    public registerUser(userObj) {
      return this.SignUpResource.save(userObj).$promise;
    }

    public loginUser(userInfo) {
      return this.LoginResource.save(userInfo).$promise;
    }

    constructor(private $resource:ng.resource.IResourceService){
      this.LoginResource = this.$resource('/userRoutes/api/Login/Local');
      this.SignUpResource = this.$resource('/userRoutes/api/Register');
    }

  }

  angular.module('aci').service('userService', UserService);







  export class CarService {
      public CarResource;
      public MakeResource;



      public getMatchingMakes(makeId) {
          return this.CarResource.query({id: makeId});
      }

      public getAllMakes() {
      return this.MakeResource.query();
    }


      public listCars() {
          return this.CarResource.query();
      }

      public getCar(carId) {
          return this.CarResource.get({id: carId});
      }

      public constructor(public $resource) {
          this.CarResource = $resource('/api/cars/:id');
          this.MakeResource = $resource('/api/makes');
      }


}
  angular.module('aci').service('carService', CarService);













//about page drop down menu


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

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isCustomHeaderOpen: false,
    isFirstOpen: true,
    isFirstDisabled: false
  };
});




    }
