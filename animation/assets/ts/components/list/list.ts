/// <reference path="../../../../scripts/typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../../../scripts/typings/angularjs/angular-animate.d.ts" />
/// <reference path="../../../../scripts/typings/angularjs/angular.d.ts" />

namespace App {
    class ListController {
        public posts;
        public apiRoot = "http://jsonplaceholder.typicode.com";

        constructor(ApiService, $http) {
            this.posts = ApiService.get(this.apiRoot + "/posts", $http);
        }
    }

    class List implements ng.IComponentOptions {
        public controller: any;
        public templateUrl: string;

        constructor() {
            this.controller = ListController;
            this.templateUrl = "/assets/ts/components/list/list.html";
        }
    }

    angular.module("app").component("list", new List());
}