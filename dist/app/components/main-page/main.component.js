System.register(["angular2/core", "../carousel/carousel.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, carousel_component_1;
    var MainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (carousel_component_1_1) {
                carousel_component_1 = carousel_component_1_1;
            }],
        execute: function() {
            MainComponent = (function () {
                function MainComponent() {
                }
                MainComponent = __decorate([
                    core_1.Component({
                        selector: 'main_component',
                        directives: [carousel_component_1.CarouselComponent],
                        templateUrl: "app/components/main-page/main.template.html",
                    }), 
                    __metadata('design:paramtypes', [])
                ], MainComponent);
                return MainComponent;
            })();
            exports_1("MainComponent", MainComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL21haW4tcGFnZS9tYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJNYWluQ29tcG9uZW50IiwiTWFpbkNvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBRUE7Z0JBQUFBO2dCQUsyQkMsQ0FBQ0E7Z0JBTDVCRDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxnQkFBZ0JBO3dCQUMxQkEsVUFBVUEsRUFBRUEsQ0FBQ0Esc0NBQWlCQSxDQUFDQTt3QkFDL0JBLFdBQVdBLEVBQUVBLDZDQUE2Q0E7cUJBQzdEQSxDQUFDQTs7a0NBQzBCQTtnQkFBREEsb0JBQUNBO1lBQURBLENBTDNCLEFBSzRCQSxJQUFBO1lBTDVCLHlDQUs0QixDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL21haW4tcGFnZS9tYWluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge0Nhcm91c2VsQ29tcG9uZW50fSBmcm9tIFwiLi4vY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50XCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtYWluX2NvbXBvbmVudCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbQ2Fyb3VzZWxDb21wb25lbnRdLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwL2NvbXBvbmVudHMvbWFpbi1wYWdlL21haW4udGVtcGxhdGUuaHRtbFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudHt9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
