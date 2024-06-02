import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { CreateInventoryComponent } from './create-inventory/create-inventory.component';
import { UpdateInventoryComponent } from './update-inventory/update-inventory.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'items', component: ItemListComponent},
  {path: 'create-item', component: CreateItemComponent },
  {path: 'update-item/:id', component: UpdateItemComponent},
  {path: 'item-details/:id', component: ItemDetailsComponent},
  {path: 'inventory', component: InventoryListComponent},
  {path: 'create-inventory', component:CreateInventoryComponent},
  {path:'update-inventory/:id', component:UpdateInventoryComponent},

  { path: 'inventory/:itemId', component: InventoryListComponent },
  { path: 'create-inventory/:itemId', component: CreateInventoryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/home' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
