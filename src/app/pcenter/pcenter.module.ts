import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PaginationModule } from 'ng2-bootstrap';

import { PCenterComponent } from './pcenter.component';
//import { pcenterRoutes } from './pcenter.routes';

@NgModule({
    imports: [
        SharedModule,
        RouterModule,
        // PaginationModule.forRoot(),
        // RouterModule.forChild( pcenterRoutes )
],
    exports: [],
    declarations: [PCenterComponent],
    providers: [],
})
export class PCenterModule { }
