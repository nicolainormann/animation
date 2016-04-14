/// <reference path="../../scripts/typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-animate.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />

namespace App {
    export function Config($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/");

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('index', {
                url: '/',
                template: ''
            })
    }
}