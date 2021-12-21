/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2015.
 */


import jQuery from 'jquery';
let $=require("jquery");
require('jquery');
global.jQuery = require('jquery');
global.$ = jQuery;
window.$ = $;
window.jQuery = $;
import 'jquery-ui-bundle';

// Vendor-Imports
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngResource from 'angular-resource';
import ngCookies from 'angular-cookies';
import ngSanitize from 'angular-sanitize';
import ngTranslate from 'angular-translate';
import ngTranslateStaticFilesLoader from 'angular-translate-loader-static-files';
import uiBootstrap from 'angular-ui-bootstrap';
import 'angular-drag-and-drop-lists';
import { downgradeComponent, downgradeInjectable } from '@angular/upgrade/static';

// Style Imports
import 'esta-webjs-style/build/css/style.css';
import 'angular-tree-control/css/tree-control-attribute.css';
import 'flag-icon-css/css/flag-icon.min.css';

// Interne Modul-Imports
import Components from './components/components';
import AppComponent from './app.component_old';

// Language file import
import langDe from './languages/lang-de.json';

// Angular components
import { FooterComponent } from "./components2/footer.component";
import { ReportComponent } from "./components2/report/report.component";
import { ChangelogComponent } from "./components2/changelog/changelog.component";
import { KatalogcustompropertyComponent } from "./components2/katalogcustomproperty/katalogcustomproperty.component";
import { CustompropertyselectComponent } from "./components2/custompropertyselect/custompropertyselect.component";
import { VkleafdetailComponent } from "./components2/katalogtree/vkleafdetail/vkleafdetail.component";
import { InfolineComponent } from "./components2/infoline/infoline.component";
import { Produktei18nComponent } from "./components2/produktei18n/produktei18n.component";
import { AnzeigezeitComponent } from "./components2/vm/component/anzeigezeit/anzeigezeit.component";
import { ProduktdetailComponent } from "./components2/vm/component/produktdetailcard/produktdetail.component";
import { ParameterLoaderService } from "./components2/vm/service/ParameterLoaderService";
import { ProductComponent } from "./components2/product/product.component";
import { KategorieComponent } from "./components2/kategorie/kategorie.component";


angular.module('app', [
    uiRouter, ngTranslate, ngTranslateStaticFilesLoader, ngCookies, ngResource, ngSanitize,
    uiBootstrap, 'dndLists', Components.name
])
    .config(["$translateProvider", "$httpProvider", "$stateProvider", function($translateProvider, $httpProvider, $stateProvider) {

        // Translation settings
        $translateProvider.translations('de', langDe);
        $translateProvider.preferredLanguage('de').useSanitizeValueStrategy('escape');

        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        $httpProvider.interceptors.push('oAuthInterceptorService');

        $stateProvider.state('appfooter',
        {url: '/appfooter', template: '<appfooter></appfooter>'});

        let info = {
            name:'info',
            url:'/info',
            component: ChangelogComponent
        };
        $stateProvider.state(info);

    }])
    // Globale Konfigurationeinstellungen
    .constant('config', {
        authServerUrl: 'http://auth-server-esta-cloud-test.app.ose.sbb-cloud.net/',
        authRedirectUrl: window.location.origin + '#!/logincallback?type=antwort',
        authLoginUrl: 'oauth/authorize?response_type=token&client_id=acme&redirect_uri=',
        authClientId: 'acme',
        authClientSecret: 'acmesecret',
        authStorageAccessToken: 'access_token',
        authUserName: 'user_name',
        backendUrl: window.location.origin === 'http://localhost:3001' ? 'http://localhost:8080/' : window.location.origin + '/',
        defaultKanal: 41,
        distributionKanaele: [41, 42, 43, 44, 45, 46, 47, 50, 51, 53, 927],
        whitelistKanaele: [43, 44, 53]
    })
    .constant('sbbConstants', {
            anbieter: ['GUS','HERMES','NOVA','TKT','WDI','UNDEFINIERT']})
    .directive('app', AppComponent)
    .directive('appfooter', downgradeComponent({component: FooterComponent}))
    .directive('appreport', downgradeComponent({component: ReportComponent}))
    .directive('appchangelog', downgradeComponent({component: ChangelogComponent}))
    .directive('appkatalogcustomproperty', downgradeComponent({component: KatalogcustompropertyComponent}))
    .directive('appcustompropertyselect', downgradeComponent({component: CustompropertyselectComponent}))
    .directive('appvkleafdetail', downgradeComponent({component: VkleafdetailComponent}))
    .directive('appinfoline', downgradeComponent({component: InfolineComponent}))
    .directive('appi18n', downgradeComponent({component: Produktei18nComponent}))
    .directive('appanzeigezeit', downgradeComponent({component: AnzeigezeitComponent}))
    .directive('appproduktdetail', downgradeComponent({component: ProduktdetailComponent}))
    .factory('appconfigservice', downgradeInjectable(ParameterLoaderService))
    .directive('appprodukt', downgradeComponent({component: ProductComponent}))
    .directive('appkategorie', downgradeComponent({component: KategorieComponent}))

;


