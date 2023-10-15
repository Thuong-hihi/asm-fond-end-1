import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './component/product/product.component';

import { HomeComponent } from './component/home/home.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';

import { ContentComponent } from './component/content/content.component'
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ListComponent } from './admin/list/list.component';
import { AddComponent } from './admin/add/add.component';
import { UpdateComponent } from './admin/update/update.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ListAccountComponent } from './account/list-account/list-account.component';
import { AddAccountComponent } from './account/add-account/add-account.component';
import { UpdateAccountComponent } from './account/update-account/update-account.component';
import { adminGuard } from './guard/admin.guard';

const routes: Routes = [
  {
    path: "", component: ClientLayoutComponent, children: [
      {path: '' , component:HomeComponent},
      {path: 'products' , component:ProductComponent},
      {path: 'signin', component:SigninComponent},
      {path: 'signup', component:SignupComponent},
      {path: 'content', component:ContentComponent},
      { path: 'product-detail/:id', component: ProductDetailComponent },
    ]
  },
  {
    path: "admin", component: AdminLayoutComponent, canActivate: [adminGuard] ,children: [
      {path: '', component:ListComponent },
      {path: 'add' ,component:AddComponent},
      {path: 'update/:id', component:UpdateComponent},
      {path:'account/list', component: ListAccountComponent},
      {path:'account/add', component: AddAccountComponent},
      {path:'account/update/:id', component: UpdateAccountComponent},
    
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 