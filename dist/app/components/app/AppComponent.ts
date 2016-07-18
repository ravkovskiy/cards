import { Component } from 'angular2/core';
import {AppService} from "../app/app.service";


@Component({
    selector: 'my-app',
    templateUrl: 'app/components/app/app.template.html'
})
export class AppComponent {
    constructor(public appService:AppService) {
        
    }
    
    checkBackground = this.appService.backgroundList[0];
    name:String;
    phone:String;
    adress:String;
    email:String;
    stringHTML:String;
    imgHeight:String='226';
    onClickBackgroundItem(clickItem) {
        this.checkBackground=clickItem;
        var elem = document.getElementsByClassName('card-input')[0];
        //we are using setTimeout after refreshing card's image
        setTimeout(function() {
            var card = document.getElementById('imgCard');
            elem.style.top=this.imgHeight=-card.clientHeight/2-70+'px';
        },0);
    }
    onClickSendCard() {

        this.stringHTML = `
            <body>
                <div class="card" id="card">
                    <img src="http://ravkovskiy.github.io/image/`+this.checkBackground.image+`" id="imgCard">
                    <div class='card-input'>
                        <div>`+this.name+`</div>
                        <div>`+this.phone+`</div
                        <div>`+this.adress+`</div
                        <div>`+this.email+`</div
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
                        top: -154px;
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
                <script>
                    var elem = document.getElementsByClassName('card-input')[0];
                    var card = document.getElementById('imgCard');
                    elem.style.top=-`+this.imgHeight+`+'px';
                </script>
            </body>
`;

        var form = $(this);

        $('.error', form).html('');
        $(':submit', form).button('loading');

        $.ajax({
            url: '/pdf',
            method: 'POST',
            data: {"hhtml": this.stringHTML},
            complete: function() {
                $(':submit', form).button('reset');
            },
            statusCode: {
                200: function() {
                    window.location.href = '/pdf';
                },
                403: function(jqXHR) {
                    var error = JSON.parse(jqXHR.responseText);
                    $('.error', form).html(error.message);
                }
            }
        }); 
    }
}
