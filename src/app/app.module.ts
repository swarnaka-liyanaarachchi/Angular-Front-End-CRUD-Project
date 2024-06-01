import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreateItemComponent } from './create-item/create-item.component';

import { FormsModule } from '@angular/forms';
import { UpdateItemComponent } from './update-item/update-item.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { CreateInventoryComponent } from './create-inventory/create-inventory.component';
import { UpdateInventoryComponent } from './update-inventory/update-inventory.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    CreateItemComponent,
    UpdateItemComponent,
    ItemDetailsComponent,
    InventoryListComponent,
    CreateInventoryComponent,
    UpdateInventoryComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
