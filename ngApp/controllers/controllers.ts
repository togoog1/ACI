namespace aci.Controllers {

    export class HomeController {
      public WebAddress
      public banners


     public getBanner() {
        this.bannerService.getBanner(this.WebAddress).then((result) => {
    this.banners = result;

    })
  }



      constructor(
        public $scope,
      private bannerService
      ) {



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
      constructor(
        public $scope
      ) {
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

    }
    export class ContactUsController {

    }

    export class GetStartedController {

        public banners
        public WebAddress

        public addBanner() {
          console.log("add Banners")
                this.bannerService.saveBanner(this.banners);
              }

        public getBanner() {
                this.bannerService.getBanner(this.WebAddress).then((result) => {
                this.banners = result;
              })
              }

private constructor(
        private bannerService
     ) {
       this.banners=this.bannerService.getBanner()
       console.log(this.banners)
   }

}










    export class LogInController {
      public userInfo

      public login() {
        this.userService.loginUser(this.userInfo).then((data) => {
          this.$window.localStorage.setItem("token", JSON.stringify(data.token));
          alert('login successful');
        })
      }
      public constructor(
        private userService,
        public $window
      ) {
      }
    }

    export class RegisterController {

    }



}
