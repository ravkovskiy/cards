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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ib290c3RyYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQSxtQkFBUyxDQUFDLDJCQUFZLEVBQUU7Z0JBQ3BCLHlCQUFnQjtnQkFDaEIsd0JBQWU7Z0JBQ2YsNEJBQVk7Z0JBQ1osd0JBQVU7Z0JBQ1YsY0FBTyxDQUFDLHlCQUFnQixFQUFFLEVBQUMsUUFBUSxFQUFFLDZCQUFvQixFQUFDLENBQUM7YUFDOUQsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC9ib290c3RyYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Jvb3RzdHJhcH0gICAgZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3NlcidcclxuaW1wb3J0IHtwcm92aWRlfSAgICBmcm9tICdhbmd1bGFyMi9jb3JlJ1xyXG5pbXBvcnQge0NPUkVfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJ1xyXG5pbXBvcnQge1JPVVRFUl9CSU5ESU5HUywgUk9VVEVSX1BST1ZJREVSUywgTG9jYXRpb25TdHJhdGVneSwgUGF0aExvY2F0aW9uU3RyYXRlZ3l9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcidcclxuZGVjbGFyZSB2YXIgJDpKUXVlcnlTdGF0aWM7XHJcbmltcG9ydCB7UHJpY2VTZXJ2aWNlfSBmcm9tIFwiLi9jb21wb25lbnRzL3ByaWNlL3ByaWNlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtBcHBTZXJ2aWNlfSBmcm9tIFwiLi9jb21wb25lbnRzL2FwcC9hcHAuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9hcHAvQXBwQ29tcG9uZW50J1xyXG5cclxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW1xyXG4gICAgUk9VVEVSX1BST1ZJREVSUyxcclxuICAgIENPUkVfRElSRUNUSVZFUyxcclxuICAgIFByaWNlU2VydmljZSxcclxuICAgIEFwcFNlcnZpY2UsXHJcbiAgICBwcm92aWRlKExvY2F0aW9uU3RyYXRlZ3ksIHt1c2VDbGFzczogUGF0aExvY2F0aW9uU3RyYXRlZ3l9KVxyXG5dKTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
