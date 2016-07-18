System.register(["angular2/core", "../price/price.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, price_service_1;
    var PriceComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (price_service_1_1) {
                price_service_1 = price_service_1_1;
            }],
        execute: function() {
            PriceComponent = (function () {
                function PriceComponent(priceService) {
                    this.priceService = priceService;
                }
                PriceComponent = __decorate([
                    core_1.Component({
                        selector: 'price_component',
                        templateUrl: "app/components/price/price.template.html",
                    }), 
                    __metadata('design:paramtypes', [price_service_1.PriceService])
                ], PriceComponent);
                return PriceComponent;
            })();
            exports_1("PriceComponent", PriceComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3ByaWNlL3ByaWNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJQcmljZUNvbXBvbmVudCIsIlByaWNlQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQTtnQkFLSUEsd0JBQW1CQSxZQUF5QkE7b0JBQXpCQyxpQkFBWUEsR0FBWkEsWUFBWUEsQ0FBYUE7Z0JBRTVDQSxDQUFDQTtnQkFQTEQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsaUJBQWlCQTt3QkFDM0JBLFdBQVdBLEVBQUVBLDBDQUEwQ0E7cUJBQzFEQSxDQUFDQTs7bUNBS0RBO2dCQUFEQSxxQkFBQ0E7WUFBREEsQ0FSQSxBQVFDQSxJQUFBO1lBUkQsMkNBUUMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9wcmljZS9wcmljZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtQcmljZVNlcnZpY2V9IGZyb20gXCIuLi9wcmljZS9wcmljZS5zZXJ2aWNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwcmljZV9jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwL2NvbXBvbmVudHMvcHJpY2UvcHJpY2UudGVtcGxhdGUuaHRtbFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJpY2VDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcHJpY2VTZXJ2aWNlOlByaWNlU2VydmljZSkge1xyXG4gICAgICAgICAgIFxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
