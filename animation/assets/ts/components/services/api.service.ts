/// <reference path="../../../../scripts/typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../../../scripts/typings/angularjs/angular-animate.d.ts" />
/// <reference path="../../../../scripts/typings/angularjs/angular.d.ts" />

namespace App {
    export class ApiService {
        private posts = [];

        constructor() {
        }

        public get(url: string, $http: ng.IHttpService) {
            $http.get(url)
                .then((response) => {
                    this.posts.push.apply(this.posts, response.data); 
                });
            return this.posts;
        }
    }

    angular.module("app").service("ApiService", ApiService);
}