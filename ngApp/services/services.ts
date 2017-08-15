namespace aci.Services {




//banner
  export class BannerService {
    public BannerResource

//save banner
    public saveBanner(banner) {
          return this.BannerResource.save(banner);
          
        }

//get banner
    public getBanner(WebAddress) {
      return this.BannerResource.get({tag: WebAddress});
    }
    public constructor(
      public $resource
    ) {
      this.BannerResource = $resource('/api/banner/:tag');
    }
  }
angular.module('aci').service('bannerService', BannerService);






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


















//Corousel services

  angular.module('aci').controller('CarouselDemoCtrl', function ($scope) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlide = function() {
      var newWidth = 600 + slides.length + 1;
      slides.push({
        image: '//unsplash.it/' + newWidth + '/300',
        text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
        id: currIndex++
      });
    };

    $scope.randomize = function() {
      var indexes = generateIndexesArray();
      assignNewIndexesToSlides(indexes);
    };

    for (var i = 0; i < 4; i++) {
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
  });


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
