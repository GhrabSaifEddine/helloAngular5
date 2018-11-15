import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TableBasicComponent} from './util/data-table/table-basic';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {DataService} from './services/data.service';
import {DeveloperComponent} from './developers/developer.component';
import {LangageComponent} from './langages/langage.component';
import {MaterialModule} from './util/material/material.module';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {SidenavComponent} from './util/sidenav/sidenav.container-component';

const appRoutes: Routes = [
  { path: '', component: DeveloperComponent, data: { title: 'Développeurs' } },
  { path: 'developers', component: DeveloperComponent, data: { title: 'Développeurs' } },
  { path: 'langages', component: LangageComponent, data: { title: 'Langages' } }
];
@NgModule({
  declarations: [
    AppComponent,
    TableBasicComponent,
    DeveloperComponent,
    LangageComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    )
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
