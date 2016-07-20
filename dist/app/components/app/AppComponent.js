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
                    this.imgHeight = '226';
                }
                AppComponent.prototype.onClickBackgroundItem = function (clickItem) {
                    this.checkBackground = clickItem;
                    var elem = document.getElementsByClassName('card-input')[0];
                    //we are using setTimeout after refreshing card's image
                    setTimeout(function () {
                        var card = document.getElementById('imgCard');
                        elem.style.top = this.imgHeight = -card.clientHeight / 2 - 70 + 'px';
                    }, 0);
                };
                AppComponent.prototype.onUploadFile = function (files) {
                    // Создадим данные формы и добавим в них данные файлов из files
                    var data = new FormData();
                    $.each(files, function (key, value) {
                        data.append(key, value);
                    });
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
                            }
                            else {
                                console.log('ОШИБКИ ОТВЕТА сервера: ' + respond.error);
                            }
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            console.log('ОШИБКИ AJAX запроса: ' + textStatus, errorThrown);
                        }
                    });
                    this.appService.backgroundList.push({ image: files[0].name });
                };
                AppComponent.prototype.onClickSendCard = function () {
                    this.stringHTML = "\n            <body>\n                <div class=\"card\" id=\"card\">\n                    <img src=\"http://ravkovskiy.github.io/image/" + this.checkBackground.image + "\" id=\"imgCard\">\n                    <div class='card-input'>\n                        <div>" + this.name + "</div>\n                        <div>" + this.phone + "</div\n                        <div>" + this.adress + "</div\n                        <div>" + this.email + "</div\n                    </div>\n                </div>\n                <style type=\"text/css\">\n                    .card { \n                        width: 500px;\n                        height: 400px;\n                        margin: 25px auto;\n                    }\n                    .card img {\n                        width: 100%;\n                    }\n                    .card-input {\n                        position: relative;\n                        top: -154px;\n                        z-index: 30;\n                        padding-left: 50px;\n                    }\n                    .card-input div{\n                        margin-bottom: 20px;\n                        height: 20px;\n                        color: white;\n                    }\n                    .card-input div:first-child {\n                        font-size: 25px;\n                    }\n                    .card-input div:nth-child(2) {\n                        font-size: 20px;\n                    }\n                    .card-input div:nth-child(3) {\n                        margin-bottom: 16px;\n                    }\n                </style>\n                <script>\n                    var elem = document.getElementsByClassName('card-input')[0];\n                    var card = document.getElementById('imgCard');\n                    elem.style.top=-" + this.imgHeight + "+'px';\n                </script>\n            </body>\n";
                    var form = $(this);
                    $('.error', form).html('');
                    $(':submit', form).button('loading');
                    $.ajax({
                        url: '/pdf',
                        method: 'POST',
                        data: { "hhtml": this.stringHTML },
                        complete: function () {
                            $(':submit', form).button('reset');
                        },
                        statusCode: {
                            200: function () {
                                window.location.href = '/pdf';
                            },
                            403: function (jqXHR) {
                                var error = JSON.parse(jqXHR.responseText);
                                $('.error', form).html(error.message);
                            }
                        }
                    });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC9BcHBDb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQXBwQ29tcG9uZW50Lm9uQ2xpY2tCYWNrZ3JvdW5kSXRlbSIsIkFwcENvbXBvbmVudC5vblVwbG9hZEZpbGUiLCJBcHBDb21wb25lbnQub25DbGlja1NlbmRDYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFLSUEsc0JBQW1CQSxVQUFxQkE7b0JBQXJCQyxlQUFVQSxHQUFWQSxVQUFVQSxDQUFXQTtvQkFJeENBLG9CQUFlQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxjQUFjQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFNcERBLGNBQVNBLEdBQVFBLEtBQUtBLENBQUNBO2dCQVJ2QkEsQ0FBQ0E7Z0JBU0RELDRDQUFxQkEsR0FBckJBLFVBQXNCQSxTQUFTQTtvQkFDM0JFLElBQUlBLENBQUNBLGVBQWVBLEdBQUNBLFNBQVNBLENBQUNBO29CQUMvQkEsSUFBSUEsSUFBSUEsR0FBR0EsUUFBUUEsQ0FBQ0Esc0JBQXNCQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDNURBLHVEQUF1REE7b0JBQ3ZEQSxVQUFVQSxDQUFDQTt3QkFDUCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsU0FBUyxHQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBQyxDQUFDLEdBQUMsRUFBRSxHQUFDLElBQUksQ0FBQztvQkFDL0QsQ0FBQyxFQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDVEEsQ0FBQ0E7Z0JBQ0RGLG1DQUFZQSxHQUFaQSxVQUFhQSxLQUFLQTtvQkFDZEcsK0RBQStEQTtvQkFFL0RBLElB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QUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7NEJBQ2xDLENBQUM7NEJBQ0RBLEdBQUdBLEVBQUVBLFVBQVNBLEtBQUtBO2dDQUNmLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dDQUMzQyxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7NEJBQzFDLENBQUM7eUJBQ0pBO3FCQUNKQSxDQUFDQSxDQUFDQTtnQkFDUEEsQ0FBQ0E7Z0JBdElMSjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxRQUFRQTt3QkFDbEJBLFdBQVdBLEVBQUVBLHNDQUFzQ0E7cUJBQ3REQSxDQUFDQTs7aUNBb0lEQTtnQkFBREEsbUJBQUNBO1lBQURBLENBdklBLEFBdUlDQSxJQUFBO1lBdklELHVDQXVJQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FwcC9BcHBDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtBcHBTZXJ2aWNlfSBmcm9tIFwiLi4vYXBwL2FwcC5zZXJ2aWNlXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2FwcC9hcHAudGVtcGxhdGUuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBwU2VydmljZTpBcHBTZXJ2aWNlKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNoZWNrQmFja2dyb3VuZCA9IHRoaXMuYXBwU2VydmljZS5iYWNrZ3JvdW5kTGlzdFswXTtcclxuICAgIG5hbWU6U3RyaW5nO1xyXG4gICAgcGhvbmU6U3RyaW5nO1xyXG4gICAgYWRyZXNzOlN0cmluZztcclxuICAgIGVtYWlsOlN0cmluZztcclxuICAgIHN0cmluZ0hUTUw6U3RyaW5nO1xyXG4gICAgaW1nSGVpZ2h0OlN0cmluZz0nMjI2JztcclxuICAgIG9uQ2xpY2tCYWNrZ3JvdW5kSXRlbShjbGlja0l0ZW0pIHtcclxuICAgICAgICB0aGlzLmNoZWNrQmFja2dyb3VuZD1jbGlja0l0ZW07XHJcbiAgICAgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJkLWlucHV0JylbMF07XHJcbiAgICAgICAgLy93ZSBhcmUgdXNpbmcgc2V0VGltZW91dCBhZnRlciByZWZyZXNoaW5nIGNhcmQncyBpbWFnZVxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBjYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZ0NhcmQnKTtcclxuICAgICAgICAgICAgZWxlbS5zdHlsZS50b3A9dGhpcy5pbWdIZWlnaHQ9LWNhcmQuY2xpZW50SGVpZ2h0LzItNzArJ3B4JztcclxuICAgICAgICB9LDApO1xyXG4gICAgfVxyXG4gICAgb25VcGxvYWRGaWxlKGZpbGVzKSB7XHJcbiAgICAgICAgLy8g0KHQvtC30LTQsNC00LjQvCDQtNCw0L3QvdGL0LUg0YTQvtGA0LzRiyDQuCDQtNC+0LHQsNCy0LjQvCDQsiDQvdC40YUg0LTQsNC90L3Ri9C1INGE0LDQudC70L7QsiDQuNC3IGZpbGVzXHJcbiBcclxuICAgICAgICB2YXIgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICQuZWFjaCggZmlsZXMsIGZ1bmN0aW9uKCBrZXksIHZhbHVlICl7XHJcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKCBrZXksIHZhbHVlICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAvLyDQntGC0L/RgNCw0LLQu9GP0LXQvCDQt9Cw0L/RgNC+0YFcclxuICAgIFxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJy91cGxvYWQnLFxyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLCAvLyDQndC1INC+0LHRgNCw0LHQsNGC0YvQstCw0LXQvCDRhNCw0LnQu9GLIChEb24ndCBwcm9jZXNzIHRoZSBmaWxlcylcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLCAvLyDQotCw0LogalF1ZXJ5INGB0LrQsNC20LXRgiDRgdC10YDQstC10YDRgyDRh9GC0L4g0Y3RgtC+INGB0YLRgNC+0LrQvtCy0L7QuSDQt9Cw0L/RgNC+0YFcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oIHJlc3BvbmQsIHRleHRTdGF0dXMsIGpxWEhSICl7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC8vINCV0YHQu9C4INCy0YHQtSDQntCaXHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGlmKCB0eXBlb2YgcmVzcG9uZC5lcnJvciA9PT0gJ3VuZGVmaW5lZCcgKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn0YTQsNC50LvRiyDQt9Cw0LPRgNGD0LbQtdC90YsnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn0J7QqNCY0JHQmtCYINCe0KLQktCV0KLQkCDRgdC10YDQstC10YDQsDogJyArIHJlc3BvbmQuZXJyb3IgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKCBqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24gKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQntCo0JjQkdCa0JggQUpBWCDQt9Cw0L/RgNC+0YHQsDogJyArIHRleHRTdGF0dXMsIGVycm9yVGhyb3duICk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYXBwU2VydmljZS5iYWNrZ3JvdW5kTGlzdC5wdXNoKHtpbWFnZTogZmlsZXNbMF0ubmFtZX0pO1xyXG4gICAgfVxyXG4gICAgb25DbGlja1NlbmRDYXJkKCkge1xyXG5cclxuICAgICAgICB0aGlzLnN0cmluZ0hUTUwgPSBgXHJcbiAgICAgICAgICAgIDxib2R5PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIiBpZD1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9yYXZrb3Zza2l5LmdpdGh1Yi5pby9pbWFnZS9gK3RoaXMuY2hlY2tCYWNrZ3JvdW5kLmltYWdlK2BcIiBpZD1cImltZ0NhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkLWlucHV0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5gK3RoaXMubmFtZStgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+YCt0aGlzLnBob25lK2A8L2RpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PmArdGhpcy5hZHJlc3MrYDwvZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+YCt0aGlzLmVtYWlsK2A8L2RpdlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDI1cHggYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkLWlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0xNTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMzA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQtaW5wdXQgZGl2e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQtaW5wdXQgZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2FyZC1pbnB1dCBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2FyZC1pbnB1dCBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdD5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhcmQtaW5wdXQnKVswXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWdDYXJkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5zdHlsZS50b3A9LWArdGhpcy5pbWdIZWlnaHQrYCsncHgnO1xyXG4gICAgICAgICAgICAgICAgPC9zY3JpcHQ+XHJcbiAgICAgICAgICAgIDwvYm9keT5cclxuYDtcclxuXHJcbiAgICAgICAgdmFyIGZvcm0gPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAkKCcuZXJyb3InLCBmb3JtKS5odG1sKCcnKTtcclxuICAgICAgICAkKCc6c3VibWl0JywgZm9ybSkuYnV0dG9uKCdsb2FkaW5nJyk7XHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJy9wZGYnLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgZGF0YToge1wiaGh0bWxcIjogdGhpcy5zdHJpbmdIVE1MfSxcclxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJCgnOnN1Ym1pdCcsIGZvcm0pLmJ1dHRvbigncmVzZXQnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3RhdHVzQ29kZToge1xyXG4gICAgICAgICAgICAgICAgMjAwOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcGRmJztcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICA0MDM6IGZ1bmN0aW9uKGpxWEhSKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9yID0gSlNPTi5wYXJzZShqcVhIUi5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5lcnJvcicsIGZvcm0pLmh0bWwoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTsgXHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
