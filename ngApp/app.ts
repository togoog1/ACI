namespace aci {

    angular.module('aci', ['ui.router', 'ngResource', 'ui.bootstrap','uiGmapgoogle-maps']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider,
        uiGmapGoogleMapApiProvider: any
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: aci.Controllers.HomeController,
                controllerAs: 'vm'
                })

            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: aci.Controllers.AboutController,
                controllerAs: 'vm'
                })
            .state('products', {
                url: '/products',
                templateUrl: '/ngApp/views/products.html',
                controller: aci.Controllers.ProductsController,
                controllerAs: 'vm'
                })
                .state('custombuilds', {
                    url: '/custombuilds',
                    templateUrl: '/ngApp/views/custombuilds.html',
                    controller: aci.Controllers.CustomBuildsController,
                    controllerAs: 'vm'
                    })
            .state('contactUs', {
                url: '/contactUs',
                templateUrl: '/ngApp/views/contactUs.html',
                controller: aci.Controllers.ContactUsController,
                controllerAs: 'vm'
                })
            .state('getStarted', {
                url: '/getStarted',
                templateUrl: '/ngApp/views/getStarted.html',
                controller: aci.Controllers.GetStartedController,
                controllerAs: 'vm'
                })
            .state('logIn', {
                url: '/logIn',
                templateUrl: '/ngApp/views/logIn.html',
                controller: aci.Controllers.LogInController,
                controllerAs: 'vm'
                })
            .state('register', {
                url: '/register',
                templateUrl: '/ngApp/views/register.html',
                controller: aci.Controllers.RegisterController,
                controllerAs: 'vm'
                })

            .state('testnghide', {
                url: '/testnghide',
                templateUrl: '/ngApp/views/testnghide.html',
                controller: aci.Controllers.TestnghideController,
                controllerAs: 'vm'
                })

            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
                });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);

        uiGmapGoogleMapApiProvider.configure({
    //    key: 'your api key',
});
    });


}
