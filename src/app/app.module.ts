import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import AppRoutingModule from './app-routing.module'

import { App } from './app.component'

import Home from '../home/home.component'

import ComponentsModule from '../components/components.module'

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
  ],
  declarations: [
    App,
    Home,
  ],
  providers: [
  ],
  bootstrap: [
    App,
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
  ],
})

export default class AppModule { }
