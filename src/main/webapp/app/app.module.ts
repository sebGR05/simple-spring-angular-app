import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { SimpleSpringAngularAppSharedModule } from 'app/shared/shared.module';
import { SimpleSpringAngularAppCoreModule } from 'app/core/core.module';
import { SimpleSpringAngularAppAppRoutingModule } from './app-routing.module';
import { SimpleSpringAngularAppHomeModule } from './home/home.module';
import { SimpleSpringAngularAppEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    SimpleSpringAngularAppSharedModule,
    SimpleSpringAngularAppCoreModule,
    SimpleSpringAngularAppHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    SimpleSpringAngularAppEntityModule,
    SimpleSpringAngularAppAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class SimpleSpringAngularAppAppModule {}
