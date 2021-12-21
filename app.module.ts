import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppComponent } from "./app.component";
import "./app.js";
import { FooterComponent } from "./components2/footer.component";
import { ReportComponent } from "./components2/report/report.component";
import { ChangelogComponent } from "./components2/changelog/changelog.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentLayoutModule, CovalentStepsModule} from '@covalent/core';
import { CovalentDataTableModule } from '@covalent/core';
import { TranslateLoader, TranslateModule} from "@ngx-translate/core";
import { TranslateHttpLoader} from "@ngx-translate/http-loader";
import { RouterModule} from "@angular/router";
import { MarkdownModule } from 'angular2-markdown';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './app-material.module';
import { AvAutocompleteModule } from '@molteni/av-components';


import {
    ConfirmDialog,
    KatalogcustompropertyComponent
} from "./components2/katalogcustomproperty/katalogcustomproperty.component";
import { CustompropertyselectComponent } from "./components2/custompropertyselect/custompropertyselect.component";
import { VkleafdetailComponent } from "./components2/katalogtree/vkleafdetail/vkleafdetail.component";
import { StandardactionComponent } from "./components2/common/component/standardaction/standardaction.component";
import { InfolineComponent } from "./components2/infoline/infoline.component";
import { NotificationService } from "./components2/common/service/notification.service";
import { Produktei18nComponent } from "./components2/produktei18n/produktei18n.component";
import { AnzeigezeitComponent } from "./components2/vm/component/anzeigezeit/anzeigezeit.component";

import { WeekDaysInput } from "./components2/vm/component/weekdays/weekdays.component";

import { ProduktdetailComponent } from "./components2/vm/component/produktdetailcard/produktdetail.component";
import { ProductComponent } from "./components2/product/product.component";
import { AutocompleteAvgComponent } from "./components2/common/component/autocomplete/autocomplete-avg.component";
import { KategorieComponent } from "./components2/kategorie/kategorie.component";
import { KategorieformComponent } from "./components2/kategorie/form/kategorieform.component";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) { 
    return new TranslateHttpLoader(http);
}

@NgModule({ 
    imports: [
        BrowserModule,
        UpgradeModule,
        HttpModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        CovalentDataTableModule,
        CovalentLayoutModule,
        CovalentStepsModule,
        FormsModule,
        ReactiveFormsModule,
        AppMaterialModule,
        AvAutocompleteModule,

        MarkdownModule.forRoot(),
        RouterModule.forRoot(
            [{ 
                path: 'report/:produktNr',
                component: ReportComponent
            }]
        ),
        TranslateModule.forRoot(
            { 
                loader: { 
                    provide: TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [HttpClient]
                }
            }
        )
    ],
    providers: [
      NotificationService
    ],
    declarations: [
        AppComponent,
        FooterComponent,
        ReportComponent,
        ChangelogComponent,
        KatalogcustompropertyComponent,
        ConfirmDialog,
        CustompropertyselectComponent,
        VkleafdetailComponent,
        StandardactionComponent,
        InfolineComponent,
        Produktei18nComponent,
        AnzeigezeitComponent,
        WeekDaysInput,
        ProduktdetailComponent,
        ProductComponent,
        AutocompleteAvgComponent,
        KategorieComponent,
        KategorieformComponent,
    ],
    entryComponents: [
        FooterComponent,
        ReportComponent,
        ChangelogComponent,
        KatalogcustompropertyComponent,
        ConfirmDialog,
        CustompropertyselectComponent,
        VkleafdetailComponent,
        StandardactionComponent,
        InfolineComponent,
        Produktei18nComponent,
        AnzeigezeitComponent,
        WeekDaysInput,
        ProduktdetailComponent,
        ProductComponent,
        KategorieComponent,
        KategorieformComponent,
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { 
    constructor(private upgrade: UpgradeModule) { }
}
