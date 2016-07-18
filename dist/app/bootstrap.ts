import {bootstrap}    from 'angular2/platform/browser'
import {provide}    from 'angular2/core'
import {CORE_DIRECTIVES} from 'angular2/common'
import {ROUTER_BINDINGS, ROUTER_PROVIDERS, LocationStrategy, PathLocationStrategy} from 'angular2/router'
declare var $:JQueryStatic;
import {PriceService} from "./components/price/price.service";
import {AppService} from "./components/app/app.service";

import {AppComponent} from './components/app/AppComponent'

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    CORE_DIRECTIVES,
    PriceService,
    AppService,
    provide(LocationStrategy, {useClass: PathLocationStrategy})
]);

