System.register(["angular2/core", "../portfolio/portfolio.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, portfolio_service_1;
    var PortfolioComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (portfolio_service_1_1) {
                portfolio_service_1 = portfolio_service_1_1;
            }],
        execute: function() {
            PortfolioComponent = (function () {
                function PortfolioComponent(portfolioService) {
                    this.portfolioService = portfolioService;
                    //need change start value portfolioItem!!!!!!!!!!!
                    this.portfolioItem = this.portfolioService.portfolioList[0];
                }
                PortfolioComponent.prototype.onClickPortfolioItem = function (clickItem) {
                    this.portfolioItem = clickItem;
                    var closeModal = document.getElementsByClassName('carousel-control')[1];
                    var innerWidthBrowser = window.innerWidth;
                    var clientWidthBrowser = document.documentElement.clientWidth;
                    closeModal.style.width = innerWidthBrowser * 0.15 + (innerWidthBrowser - clientWidthBrowser) + 'px';
                };
                PortfolioComponent.prototype.onClickModalPortfolioItem = function (event, action) {
                    if (event.which != 1)
                        return;
                    var lengthPortfolio = this.portfolioService.portfolioList.length;
                    var positionPortfolioItemClick = this.portfolioService.portfolioList.indexOf(this.portfolioItem);
                    switch (action) {
                        case 'Next':
                            positionPortfolioItemClick == lengthPortfolio - 1 ?
                                this.portfolioItem = this.portfolioService.portfolioList[0] :
                                this.portfolioItem = this.portfolioService.portfolioList[positionPortfolioItemClick + 1];
                            break;
                        case 'Prev':
                            positionPortfolioItemClick == 0 ?
                                this.portfolioItem = this.portfolioService.portfolioList[lengthPortfolio - 1] :
                                this.portfolioItem = this.portfolioService.portfolioList[positionPortfolioItemClick - 1];
                            break;
                    }
                };
                PortfolioComponent = __decorate([
                    core_1.Component({
                        selector: 'portfolio_component',
                        templateUrl: "app/components/portfolio/portfolio.template.html",
                    }), 
                    __metadata('design:paramtypes', [portfolio_service_1.PortfolioService])
                ], PortfolioComponent);
                return PortfolioComponent;
            })();
            exports_1("PortfolioComponent", PortfolioComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlBvcnRmb2xpb0NvbXBvbmVudCIsIlBvcnRmb2xpb0NvbXBvbmVudC5jb25zdHJ1Y3RvciIsIlBvcnRmb2xpb0NvbXBvbmVudC5vbkNsaWNrUG9ydGZvbGlvSXRlbSIsIlBvcnRmb2xpb0NvbXBvbmVudC5vbkNsaWNrTW9kYWxQb3J0Zm9saW9JdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQTtnQkFLSUEsNEJBQW1CQSxnQkFBaUNBO29CQUFqQ0MscUJBQWdCQSxHQUFoQkEsZ0JBQWdCQSxDQUFpQkE7b0JBR3BEQSxrREFBa0RBO29CQUVsREEsa0JBQWFBLEdBQUdBLElBQUlBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBSHZEQSxDQUFDQTtnQkFJREQsaURBQW9CQSxHQUFwQkEsVUFBcUJBLFNBQVNBO29CQUMxQkUsSUFBSUEsQ0FBQ0EsYUFBYUEsR0FBQ0EsU0FBU0EsQ0FBQ0E7b0JBQzdCQSxJQUFJQSxVQUFVQSxHQUFDQSxRQUFRQSxDQUFDQSxzQkFBc0JBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3RFQSxJQUFJQSxpQkFBaUJBLEdBQUdBLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBO29CQUMxQ0EsSUFBSUEsa0JBQWtCQSxHQUFHQSxRQUFRQSxDQUFDQSxlQUFlQSxDQUFDQSxXQUFXQSxDQUFDQTtvQkFDOURBLFVBQVVBLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLEdBQUNBLGlCQUFpQkEsR0FBQ0EsSUFBSUEsR0FBQ0EsQ0FBQ0EsaUJBQWlCQSxHQUFDQSxrQkFBa0JBLENBQUNBLEdBQUNBLElBQUlBLENBQUNBO2dCQUM5RkEsQ0FBQ0E7Z0JBQ0RGLHNEQUF5QkEsR0FBekJBLFVBQTBCQSxLQUFLQSxFQUFFQSxNQUFNQTtvQkFDbkNHLEVBQUVBLENBQUFBLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLElBQUlBLENBQUNBLENBQUNBO3dCQUFDQSxNQUFNQSxDQUFDQTtvQkFDNUJBLElBQUlBLGVBQWVBLEdBQUdBLElBQUlBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7b0JBQ2pFQSxJQUFJQSwwQkFBMEJBLEdBQUdBLElBQUlBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0E7b0JBQ2pHQSxNQUFNQSxDQUFBQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDWkEsS0FBS0EsTUFBTUE7NEJBQ1BBLDBCQUEwQkEsSUFBSUEsZUFBZUEsR0FBQ0EsQ0FBQ0E7Z0NBQzNDQSxJQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxJQUFJQSxDQUFDQSxnQkFBZ0JBLENBQUNBLGFBQWFBLENBQUNBLENBQUNBLENBQUNBO2dDQUMzREEsSUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsSUFBSUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxhQUFhQSxDQUFDQSwwQkFBMEJBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBOzRCQUM3RkEsS0FBS0EsQ0FBQ0E7d0JBQ1ZBLEtBQUtBLE1BQU1BOzRCQUNQQSwwQkFBMEJBLElBQUlBLENBQUNBO2dDQUMzQkEsSUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsSUFBSUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxhQUFhQSxDQUFDQSxlQUFlQSxHQUFHQSxDQUFDQSxDQUFDQTtnQ0FDN0VBLElBQUlBLENBQUNBLGFBQWFBLEdBQUdBLElBQUlBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsMEJBQTBCQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDN0ZBLEtBQUtBLENBQUNBO29CQUNkQSxDQUFDQTtnQkFFTEEsQ0FBQ0E7Z0JBbkNMSDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxxQkFBcUJBO3dCQUMvQkEsV0FBV0EsRUFBRUEsa0RBQWtEQTtxQkFDbEVBLENBQUNBOzt1Q0FpQ0RBO2dCQUFEQSx5QkFBQ0E7WUFBREEsQ0FwQ0EsQUFvQ0NBLElBQUE7WUFwQ0QsbURBb0NDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtQb3J0Zm9saW9TZXJ2aWNlfSBmcm9tIFwiLi4vcG9ydGZvbGlvL3BvcnRmb2xpby5zZXJ2aWNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwb3J0Zm9saW9fY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC9jb21wb25lbnRzL3BvcnRmb2xpby9wb3J0Zm9saW8udGVtcGxhdGUuaHRtbFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9ydGZvbGlvQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHBvcnRmb2xpb1NlcnZpY2U6UG9ydGZvbGlvU2VydmljZSkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLy9uZWVkIGNoYW5nZSBzdGFydCB2YWx1ZSBwb3J0Zm9saW9JdGVtISEhISEhISEhISFcclxuICAgIFxyXG4gICAgcG9ydGZvbGlvSXRlbSA9IHRoaXMucG9ydGZvbGlvU2VydmljZS5wb3J0Zm9saW9MaXN0WzBdO1xyXG4gICAgb25DbGlja1BvcnRmb2xpb0l0ZW0oY2xpY2tJdGVtKSB7XHJcbiAgICAgICAgdGhpcy5wb3J0Zm9saW9JdGVtPWNsaWNrSXRlbTtcclxuICAgICAgICB2YXIgY2xvc2VNb2RhbD1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJvdXNlbC1jb250cm9sJylbMV07XHJcbiAgICAgICAgdmFyIGlubmVyV2lkdGhCcm93c2VyID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgdmFyIGNsaWVudFdpZHRoQnJvd3NlciA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgICAgICBjbG9zZU1vZGFsLnN0eWxlLndpZHRoPWlubmVyV2lkdGhCcm93c2VyKjAuMTUrKGlubmVyV2lkdGhCcm93c2VyLWNsaWVudFdpZHRoQnJvd3NlcikrJ3B4JztcclxuICAgIH1cclxuICAgIG9uQ2xpY2tNb2RhbFBvcnRmb2xpb0l0ZW0oZXZlbnQsIGFjdGlvbikge1xyXG4gICAgICAgIGlmKGV2ZW50LndoaWNoICE9IDEpIHJldHVybjtcclxuICAgICAgICB2YXIgbGVuZ3RoUG9ydGZvbGlvID0gdGhpcy5wb3J0Zm9saW9TZXJ2aWNlLnBvcnRmb2xpb0xpc3QubGVuZ3RoO1xyXG4gICAgICAgIHZhciBwb3NpdGlvblBvcnRmb2xpb0l0ZW1DbGljayA9IHRoaXMucG9ydGZvbGlvU2VydmljZS5wb3J0Zm9saW9MaXN0LmluZGV4T2YodGhpcy5wb3J0Zm9saW9JdGVtKTtcclxuICAgICAgICBzd2l0Y2goYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ05leHQnOlxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25Qb3J0Zm9saW9JdGVtQ2xpY2sgPT0gbGVuZ3RoUG9ydGZvbGlvLTEgP1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9ydGZvbGlvSXRlbSA9IHRoaXMucG9ydGZvbGlvU2VydmljZS5wb3J0Zm9saW9MaXN0WzBdIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcnRmb2xpb0l0ZW0gPSB0aGlzLnBvcnRmb2xpb1NlcnZpY2UucG9ydGZvbGlvTGlzdFtwb3NpdGlvblBvcnRmb2xpb0l0ZW1DbGljayArIDFdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ1ByZXYnOlxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25Qb3J0Zm9saW9JdGVtQ2xpY2sgPT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3J0Zm9saW9JdGVtID0gdGhpcy5wb3J0Zm9saW9TZXJ2aWNlLnBvcnRmb2xpb0xpc3RbbGVuZ3RoUG9ydGZvbGlvIC0gMV0gOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9ydGZvbGlvSXRlbSA9IHRoaXMucG9ydGZvbGlvU2VydmljZS5wb3J0Zm9saW9MaXN0W3Bvc2l0aW9uUG9ydGZvbGlvSXRlbUNsaWNrIC0gMV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
