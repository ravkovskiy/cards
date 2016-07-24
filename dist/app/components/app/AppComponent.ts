import { Component } from 'angular2/core';
import {AppService} from "../app/app.service";


@Component({
    selector: 'my-app',
    templateUrl: 'app/components/app/app.template.html'
})
export class AppComponent {
    constructor(public appService: AppService) {

    }

    checkBackground = this.appService.backgroundList[0];
    name: String='';
    phone: String='';
    adress: String='';
    email: String='';
    stringHTML: String='';
    imgHeight: String = '-154px';
    onClickBackgroundItem(clickItem) {
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

    }
    onUploadFile(files) {
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
            processData: false, // Не обрабатываем файлы (Don't process the files)
            contentType: false, // Так jQuery скажет серверу что это строковой запрос
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
    }
    onClickSendCard() {

        this.stringHTML = `
            <body>
                <div class="card" id="card">
                    <img src="http://ravkovskiy.github.io/image/`+ this.checkBackground.image + `" id="imgCard">
                    <div class='card-input'>
                        <div>`+ this.name + `</div>
                        <div>`+ this.phone + `</div
                        <div>`+ this.adress + `</div
                        <div>`+ this.email + `</div
                    </div>
                </div>
                <style type="text/css">
                    .card { 
                        width: 500px;
                        height: 400px;
                        margin: 25px auto;
                    }
                    .card img {
                        width: 100%;
                    }
                    .card-input {
                        position: relative;
                        top:`+ this.imgHeight + `;
                        z-index: 30;
                        padding-left: 50px;
                    }
                    .card-input div{
                        margin-bottom: 20px;
                        height: 20px;
                        color: white;
                    }
                    .card-input div:first-child {
                        font-size: 25px;
                    }
                    .card-input div:nth-child(2) {
                        font-size: 20px;
                    }
                    .card-input div:nth-child(3) {
                        margin-bottom: 16px;
                    }
                </style>
            </body>
`;

        var data = {
            file: this.stringHTML,
            name: this.checkBackground.image.slice(0, this.checkBackground.image.indexOf('.')) + '.pdf'
        }
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
    }

    sendFile() {
        var realCheckBackground = this.checkBackground;
        setTimeout(function () {
            $.ajax({
                url: '/sendEmail',
                type: 'POST',
                data: { name: realCheckBackground.image.slice(0, realCheckBackground.image.indexOf('.')) + '.pdf' },

                success: function (respond, textStatus, jqXHR) {

                    // Если все ОК

                    if (typeof respond.error === 'undefined') {
                        console.log('файл отправлен')
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
    }

}