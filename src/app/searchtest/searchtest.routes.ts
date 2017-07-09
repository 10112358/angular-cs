import { RouterModule } from '@angular/router';

import { SearchtestComponent } from './searchtest.component';



export const searchtestRoutes = [
  	
	    	{ path: '', redirectTo:'searchtest',pathMatch:'full'},
	    	{ path: 'searchtest', component: SearchtestComponent }
	    
];