System.register(['angular2/platform/browser', 'angular2/core', 'angular2/common', 'angular2/router', "./components/price/price.service", "./components/app/app.service", './components/app/AppComponent'], function(exports_1) {
    var browser_1, core_1, common_1, router_1, price_service_1, app_service_1, AppComponent_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (price_service_1_1) {
                price_service_1 = price_service_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            },
            function (AppComponent_1_1) {
                AppComponent_1 = AppComponent_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(AppComponent_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                common_1.CORE_DIRECTIVES,
                price_service_1.PriceService,
                app_service_1.AppService,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.PathLocationStrategy })
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ib290c3RyYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQSxtQkFBUyxDQUFDLDJCQUFZLEVBQUU7Z0JBQ3BCLHlCQUFnQjtnQkFDaEIsd0JBQWU7Z0JBQ2YsNEJBQVk7Z0JBQ1osd0JBQVU7Z0JBQ1YsY0FBTyxDQUFDLHlCQUFnQixFQUFFLEVBQUMsUUFBUSxFQUFFLDZCQUFvQixFQUFDLENBQUM7YUFDOUQsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC9ib290c3RyYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Jvb3RzdHJhcH0gICAgZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3NlcidcbmltcG9ydCB7cHJvdmlkZX0gICAgZnJvbSAnYW5ndWxhcjIvY29yZSdcbmltcG9ydCB7Q09SRV9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9jb21tb24nXG5pbXBvcnQge1JPVVRFUl9CSU5ESU5HUywgUk9VVEVSX1BST1ZJREVSUywgTG9jYXRpb25TdHJhdGVneSwgUGF0aExvY2F0aW9uU3RyYXRlZ3l9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcidcbmRlY2xhcmUgdmFyICQ6SlF1ZXJ5U3RhdGljO1xuaW1wb3J0IHtQcmljZVNlcnZpY2V9IGZyb20gXCIuL2NvbXBvbmVudHMvcHJpY2UvcHJpY2Uuc2VydmljZVwiO1xuaW1wb3J0IHtBcHBTZXJ2aWNlfSBmcm9tIFwiLi9jb21wb25lbnRzL2FwcC9hcHAuc2VydmljZVwiO1xuXG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2FwcC9BcHBDb21wb25lbnQnXG5cbmJvb3RzdHJhcChBcHBDb21wb25lbnQsIFtcbiAgICBST1VURVJfUFJPVklERVJTLFxuICAgIENPUkVfRElSRUNUSVZFUyxcbiAgICBQcmljZVNlcnZpY2UsXG4gICAgQXBwU2VydmljZSxcbiAgICBwcm92aWRlKExvY2F0aW9uU3RyYXRlZ3ksIHt1c2VDbGFzczogUGF0aExvY2F0aW9uU3RyYXRlZ3l9KVxuXSk7XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
