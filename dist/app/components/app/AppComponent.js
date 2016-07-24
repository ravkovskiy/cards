System.register(['angular2/core', "../app/app.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, app_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(appService) {
                    this.appService = appService;
                    this.checkBackground = this.appService.backgroundList[0];
                    this.name = '';
                    this.phone = '';
                    this.adress = '';
                    this.email = '';
                    this.stringHTML = '';
                    this.imgHeight = '-154px';
                }
                AppComponent.prototype.onClickBackgroundItem = function (clickItem) {
                    this.checkBackground = clickItem;
                    var elem = document.getElementsByClassName('card-input')[0];
                    function bind(func, context) {
                        return function () {
                            return func.apply(context, arguments);
                        };
                    }
                    //we are using setTimeout after refreshing card's image
                    setTimeout(bind(function () {
                        var card = document.getElementById('imgCard');
                        elem.style.top = (-card.clientHeight / 2) - 70 + 'px';
                        this.imgHeight = (-card.clientHeight / 2) - 70 + 'px';
                    }, this), 0);
                };
                AppComponent.prototype.onUploadFile = function (files) {
                    // Создадим данные формы и добавим в них данные файлов из files
                    var data = new FormData();
                    $.each(files, function (key, value) {
                        data.append(key, value);
                    });
                    var realThis = this;
                    // Отправляем запрос
                    $.ajax({
                        url: '/upload',
                        type: 'POST',
                        data: data,
                        cache: false,
                        dataType: 'json',
                        processData: false,
                        contentType: false,
                        success: function (respond, textStatus, jqXHR) {
                            // Если все ОК
                            if (typeof respond.error === 'undefined') {
                                console.log('файлы загружены');
                                addBackground();
                            }
                            else {
                                console.log('ОШИБКИ ОТВЕТА сервера: ' + respond.error);
                            }
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            console.log('ОШИБКИ AJAX запроса: ' + textStatus, errorThrown);
                        }
                    });
                    function addBackground() {
                        realThis.appService.backgroundList.push({ image: files[0].name });
                    }
                };
                AppComponent.prototype.onClickSendCard = function () {
                    this.stringHTML = "\n            <body>\n                <div class=\"card\" id=\"card\">\n                    <img src=\"http://ravkovskiy.github.io/image/" + this.checkBackground.image + "\" id=\"imgCard\">\n                    <div class='card-input'>\n                        <div>" + this.name + "</div>\n                        <div>" + this.phone + "</div\n                        <div>" + this.adress + "</div\n                        <div>" + this.email + "</div\n                    </div>\n                </div>\n                <style type=\"text/css\">\n                    .card { \n                        width: 500px;\n                        height: 400px;\n                        margin: 25px auto;\n                    }\n                    .card img {\n                        width: 100%;\n                    }\n                    .card-input {\n                        position: relative;\n                        top:" + this.imgHeight + ";\n                        z-index: 30;\n                        padding-left: 50px;\n                    }\n                    .card-input div{\n                        margin-bottom: 20px;\n                        height: 20px;\n                        color: white;\n                    }\n                    .card-input div:first-child {\n                        font-size: 25px;\n                    }\n                    .card-input div:nth-child(2) {\n                        font-size: 20px;\n                    }\n                    .card-input div:nth-child(3) {\n                        margin-bottom: 16px;\n                    }\n                </style>\n            </body>\n";
                    var data = {
                        file: this.stringHTML,
                        name: this.checkBackground.image.slice(0, this.checkBackground.image.indexOf('.')) + '.pdf'
                    };
                    var realThis = this;
                    $.ajax({
                        url: '/pdf',
                        type: 'POST',
                        data: data,
                        success: function (respond, textStatus, jqXHR) {
                            // Если все ОК
                            if (typeof respond.error === 'undefined') {
                                console.log('файл отправлен');
                                realThis.sendFile();
                            }
                            else {
                                console.log('ОШИБКИ ОТВЕТА сервера: ' + respond.error);
                            }
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            console.log('ОШИБКИ AJAX запроса: ' + textStatus, errorThrown);
                        }
                    });
                };
                AppComponent.prototype.sendFile = function () {
                    var realCheckBackground = this.checkBackground;
                    setTimeout(function () {
                        $.ajax({
                            url: '/sendEmail',
                            type: 'POST',
                            data: { name: realCheckBackground.image.slice(0, realCheckBackground.image.indexOf('.')) + '.pdf' },
                            success: function (respond, textStatus, jqXHR) {
                                // Если все ОК
                                if (typeof respond.error === 'undefined') {
                                    console.log('файл отправлен');
                                }
                                else {
                                    console.log('ОШИБКИ ОТВЕТА сервера: ' + respond.error);
                                }
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                                console.log('ОШИБКИ AJAX запроса: ' + textStatus, errorThrown);
                            }
                        });
                    }, 20000);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/components/app/app.template.html'
                    }), 
                    __metadata('design:paramtypes', [app_service_1.AppService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC9BcHBDb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQXBwQ29tcG9uZW50Lm9uQ2xpY2tCYWNrZ3JvdW5kSXRlbSIsIkFwcENvbXBvbmVudC5vbkNsaWNrQmFja2dyb3VuZEl0ZW0uYmluZCIsIkFwcENvbXBvbmVudC5vblVwbG9hZEZpbGUiLCJBcHBDb21wb25lbnQub25VcGxvYWRGaWxlLmFkZEJhY2tncm91bmQiLCJBcHBDb21wb25lbnQub25DbGlja1NlbmRDYXJkIiwiQXBwQ29tcG9uZW50LnNlbmRGaWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFLSUEsc0JBQW1CQSxVQUFzQkE7b0JBQXRCQyxlQUFVQSxHQUFWQSxVQUFVQSxDQUFZQTtvQkFJekNBLG9CQUFlQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxjQUFjQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDcERBLFNBQUlBLEdBQVNBLEVBQUVBLENBQUNBO29CQUNoQkEsVUFBS0EsR0FBU0EsRUFBRUEsQ0FBQ0E7b0JBQ2pCQSxXQUFNQSxHQUFTQSxFQUFFQSxDQUFDQTtvQkFDbEJBLFVBQUtBLEdBQVNBLEVBQUVBLENBQUNBO29CQUNqQkEsZUFBVUEsR0FBU0EsRUFBRUEsQ0FBQ0E7b0JBQ3RCQSxjQUFTQSxHQUFXQSxRQUFRQSxDQUFDQTtnQkFSN0JBLENBQUNBO2dCQVNERCw0Q0FBcUJBLEdBQXJCQSxVQUFzQkEsU0FBU0E7b0JBQzNCRSxJQUFJQSxDQUFDQSxlQUFlQSxHQUFHQSxTQUFTQSxDQUFDQTtvQkFDakNBLElBQUlBLElBQUlBLEdBQUdBLFFBQVFBLENBQUNBLHNCQUFzQkEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQzVEQSxjQUFjQSxJQUFJQSxFQUFFQSxPQUFPQTt3QkFDdkJDLE1B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bEJBLFdBQVdBLEVBQUVBLHNDQUFzQ0E7cUJBQ3REQSxDQUFDQTs7aUNBMEtEQTtnQkFBREEsbUJBQUNBO1lBQURBLENBN0tBLEFBNktDQSxJQUFBO1lBN0tELHVDQTZLQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FwcC9BcHBDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtBcHBTZXJ2aWNlfSBmcm9tIFwiLi4vYXBwL2FwcC5zZXJ2aWNlXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2FwcC9hcHAudGVtcGxhdGUuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBwU2VydmljZTogQXBwU2VydmljZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjaGVja0JhY2tncm91bmQgPSB0aGlzLmFwcFNlcnZpY2UuYmFja2dyb3VuZExpc3RbMF07XHJcbiAgICBuYW1lOiBTdHJpbmc9Jyc7XHJcbiAgICBwaG9uZTogU3RyaW5nPScnO1xyXG4gICAgYWRyZXNzOiBTdHJpbmc9Jyc7XHJcbiAgICBlbWFpbDogU3RyaW5nPScnO1xyXG4gICAgc3RyaW5nSFRNTDogU3RyaW5nPScnO1xyXG4gICAgaW1nSGVpZ2h0OiBTdHJpbmcgPSAnLTE1NHB4JztcclxuICAgIG9uQ2xpY2tCYWNrZ3JvdW5kSXRlbShjbGlja0l0ZW0pIHtcclxuICAgICAgICB0aGlzLmNoZWNrQmFja2dyb3VuZCA9IGNsaWNrSXRlbTtcclxuICAgICAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhcmQtaW5wdXQnKVswXTtcclxuICAgICAgICBmdW5jdGlvbiBiaW5kKGZ1bmMsIGNvbnRleHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vd2UgYXJlIHVzaW5nIHNldFRpbWVvdXQgYWZ0ZXIgcmVmcmVzaGluZyBjYXJkJ3MgaW1hZ2VcclxuICAgICAgICBzZXRUaW1lb3V0KGJpbmQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgY2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWdDYXJkJyk7XHJcbiAgICAgICAgICAgIGVsZW0uc3R5bGUudG9wID0gKC1jYXJkLmNsaWVudEhlaWdodCAvIDIpIC0gNzAgKyAncHgnO1xyXG4gICAgICAgICAgICB0aGlzLmltZ0hlaWdodCA9ICgtY2FyZC5jbGllbnRIZWlnaHQgLyAyKSAtIDcwICsgJ3B4JztcclxuICAgICAgICB9LCB0aGlzKSwgMCk7XHJcblxyXG4gICAgfVxyXG4gICAgb25VcGxvYWRGaWxlKGZpbGVzKSB7XHJcbiAgICAgICAgLy8g0KHQvtC30LTQsNC00LjQvCDQtNCw0L3QvdGL0LUg0YTQvtGA0LzRiyDQuCDQtNC+0LHQsNCy0LjQvCDQsiDQvdC40YUg0LTQsNC90L3Ri9C1INGE0LDQudC70L7QsiDQuNC3IGZpbGVzXHJcblxyXG4gICAgICAgIHZhciBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgJC5lYWNoKGZpbGVzLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBkYXRhLmFwcGVuZChrZXksIHZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgcmVhbFRoaXMgPSB0aGlzO1xyXG4gICAgICAgIC8vINCe0YLQv9GA0LDQstC70Y/QtdC8INC30LDQv9GA0L7RgVxyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvdXBsb2FkJyxcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSwgLy8g0J3QtSDQvtCx0YDQsNCx0LDRgtGL0LLQsNC10Lwg0YTQsNC50LvRiyAoRG9uJ3QgcHJvY2VzcyB0aGUgZmlsZXMpXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSwgLy8g0KLQsNC6IGpRdWVyeSDRgdC60LDQttC10YIg0YHQtdGA0LLQtdGA0YMg0YfRgtC+INGN0YLQviDRgdGC0YDQvtC60L7QstC+0Lkg0LfQsNC/0YDQvtGBXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25kLCB0ZXh0U3RhdHVzLCBqcVhIUikge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINCV0YHQu9C4INCy0YHQtSDQntCaXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXNwb25kLmVycm9yID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfRhNCw0LnQu9GLINC30LDQs9GA0YPQttC10L3RiycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZEJhY2tncm91bmQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQntCo0JjQkdCa0Jgg0J7QotCS0JXQotCQINGB0LXRgNCy0LXRgNCwOiAnICsgcmVzcG9uZC5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn0J7QqNCY0JHQmtCYIEFKQVgg0LfQsNC/0YDQvtGB0LA6ICcgKyB0ZXh0U3RhdHVzLCBlcnJvclRocm93bik7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZnVuY3Rpb24gYWRkQmFja2dyb3VuZCgpIHtcclxuICAgICAgICAgICAgcmVhbFRoaXMuYXBwU2VydmljZS5iYWNrZ3JvdW5kTGlzdC5wdXNoKHsgaW1hZ2U6IGZpbGVzWzBdLm5hbWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25DbGlja1NlbmRDYXJkKCkge1xyXG5cclxuICAgICAgICB0aGlzLnN0cmluZ0hUTUwgPSBgXHJcbiAgICAgICAgICAgIDxib2R5PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIiBpZD1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9yYXZrb3Zza2l5LmdpdGh1Yi5pby9pbWFnZS9gKyB0aGlzLmNoZWNrQmFja2dyb3VuZC5pbWFnZSArIGBcIiBpZD1cImltZ0NhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkLWlucHV0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5gKyB0aGlzLm5hbWUgKyBgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+YCsgdGhpcy5waG9uZSArIGA8L2RpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PmArIHRoaXMuYWRyZXNzICsgYDwvZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+YCsgdGhpcy5lbWFpbCArIGA8L2RpdlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDI1cHggYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkLWlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6YCsgdGhpcy5pbWdIZWlnaHQgKyBgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAzMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2FyZC1pbnB1dCBkaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2FyZC1pbnB1dCBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkLWlucHV0IGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkLWlucHV0IGRpdjpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvYm9keT5cclxuYDtcclxuXHJcbiAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGZpbGU6IHRoaXMuc3RyaW5nSFRNTCxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5jaGVja0JhY2tncm91bmQuaW1hZ2Uuc2xpY2UoMCwgdGhpcy5jaGVja0JhY2tncm91bmQuaW1hZ2UuaW5kZXhPZignLicpKSArICcucGRmJ1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVhbFRoaXMgPSB0aGlzO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJy9wZGYnLFxyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcblxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uZCwgdGV4dFN0YXR1cywganFYSFIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQldGB0LvQuCDQstGB0LUg0J7QmlxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzcG9uZC5lcnJvciA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn0YTQsNC50Lsg0L7RgtC/0YDQsNCy0LvQtdC9Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVhbFRoaXMuc2VuZEZpbGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQntCo0JjQkdCa0Jgg0J7QotCS0JXQotCQINGB0LXRgNCy0LXRgNCwOiAnICsgcmVzcG9uZC5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn0J7QqNCY0JHQmtCYIEFKQVgg0LfQsNC/0YDQvtGB0LA6ICcgKyB0ZXh0U3RhdHVzLCBlcnJvclRocm93bik7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZEZpbGUoKSB7XHJcbiAgICAgICAgdmFyIHJlYWxDaGVja0JhY2tncm91bmQgPSB0aGlzLmNoZWNrQmFja2dyb3VuZDtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9zZW5kRW1haWwnLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogeyBuYW1lOiByZWFsQ2hlY2tCYWNrZ3JvdW5kLmltYWdlLnNsaWNlKDAsIHJlYWxDaGVja0JhY2tncm91bmQuaW1hZ2UuaW5kZXhPZignLicpKSArICcucGRmJyB9LFxyXG5cclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25kLCB0ZXh0U3RhdHVzLCBqcVhIUikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyDQldGB0LvQuCDQstGB0LUg0J7QmlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc3BvbmQuZXJyb3IgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfRhNCw0LnQuyDQvtGC0L/RgNCw0LLQu9C10L0nKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ9Ce0KjQmNCR0JrQmCDQntCi0JLQldCi0JAg0YHQtdGA0LLQtdGA0LA6ICcgKyByZXNwb25kLmVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn0J7QqNCY0JHQmtCYIEFKQVgg0LfQsNC/0YDQvtGB0LA6ICcgKyB0ZXh0U3RhdHVzLCBlcnJvclRocm93bik7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCAyMDAwMCk7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
