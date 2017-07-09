import { Component, HostListener, ElementRef, Renderer, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { TranslateService } from 'ng2-translate';
import 'rxjs/add/operator/merge';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    //moduleId: module.id,
    selector: 'pcenter',
    templateUrl: './pcenter.component.html',
    styleUrls:['../../assets/css/pcenter.scss','../../assets/css/toolbar.scss']
})

export class PCenterComponent {
    constructor(
        public elementRef: ElementRef,
		public renderer: Renderer,
		public router: Router,
		public activatedRoute: ActivatedRoute,
		public translate: TranslateService,
		public toastr: ToastsManager,
		public vcr: ViewContainerRef
) {
    	this.toastr.setRootViewContainerRef(vcr);
		console.log("什么也没有...");
 }

    ngOnInit() { }

	toggle(button: any) {
		console.log(button);
	}
s}
