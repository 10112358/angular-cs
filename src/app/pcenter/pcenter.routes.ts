import { RouterModule } from '@angular/router';

import { PCenterComponent } from './pcenter.component';



export const pcenterRoutes = [
  	
	    	{ path: '', redirectTo:'pcenter',pathMatch:'full'},
	    	{ path: 'pcenter', component: PCenterComponent }
	    
];