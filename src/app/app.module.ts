import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './component/hello/hello.component';
import { ComponentToViewComponent } from './component/component-to-view/component-to-view.component';
import { ViewToComponentComponent } from './component/view-to-component/view-to-component.component';
import { TwoWayBindingComponent } from './component/two-way-binding/two-way-binding.component';
import { from } from 'rxjs';
import { StucturalComponent } from './stuctural/stuctural.component';
import { AttributeComponent } from './attribute/attribute.component';
import { ChildComponent } from './child/child.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ComponentToViewComponent,
    ViewToComponentComponent,
    TwoWayBindingComponent,
    StucturalComponent,
    AttributeComponent,
    ChildComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
