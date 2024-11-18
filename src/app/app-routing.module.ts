import { Routes } from "@angular/router";

const routes:Routes({
 { path: 'connexion', component: ConnexionComponent}
  { path: 'acceuil', component: AcceuilComponent}
 { path: 'inscription', component: InscriptionComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

})
