import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PaginationModule } from 'ng2-bootstrap';

import { SearchtestComponent} from './searchtest.component';
import {searchtestRoutes} from './searchtest.routes';
import { SearchService } from './searchtest.service';

import { KeyValuePipe } from '../utils/keyvalue-pipe';

@NgModule({
    imports: [
        SharedModule,
        RouterModule,
        PaginationModule.forRoot(),
        RouterModule.forChild(searchtestRoutes)
    ],
    exports: [KeyValuePipe],
    declarations: [
        SearchtestComponent,
        KeyValuePipe
    ],
    providers: [
        SearchService
    ]
})
export class SearchtestModule { }
