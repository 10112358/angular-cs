import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PaginationModule } from 'ng2-bootstrap';

import { DaohangComponent } from './daohang.component';
//import { daohangRoutes } from './daohang.routes';

@NgModule({
    imports: [
        SharedModule,
        RouterModule,
        // PaginationModule.forRoot(),
        // RouterModule.forChild( daohangRoutes )
],
    exports: [],
    declarations: [DaohangComponent],
    providers: [],
})
export class DaohangModule { }
