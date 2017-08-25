import * as _ from 'lodash';
import { Component, OnInit, Output, Input, EventEmitter, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgxAhoyConfigModel } from '../../../core/models/ngx-ahoy-config.model'

@Component({
    selector: 'ac-pageheader',
    templateUrl: './ac-pageheader.component.html',
    styleUrls: ['./ac-pageheader.component.css']
})
export class AcPageheaderComponent implements OnInit {
    @Input() title: string = '';
    data: string[] = [];

    constructor(
        private router: Router,
        @Inject('config') private config: NgxAhoyConfigModel
    ) { }

    ngOnInit(): void {
        if (this.router.url.indexOf('/add') != -1 || this.router.url.indexOf('/search') != -1 || this.router.url.indexOf('/edit') != -1) {
            let routeUrl: string = '';
            let tempData: string[];

            if (this.router.url.indexOf('/edit') != -1) {
                routeUrl = this.router.url.replace(/\/\d+/, '');
                tempData = routeUrl.split('/');
                tempData[tempData.length - 1] = 'edit/:id';
            } else {
                routeUrl = this.router.url;
                tempData = routeUrl.split('/');
            }

            let indexLimit = tempData.length;

            for (var i = 0; i < indexLimit; i++) {
                let currentDescription = this.getNameForRoute(tempData[i]);

                if (i == indexLimit - 2 && (!currentDescription || currentDescription.length < 1)) {
                    if (tempData[i + 1] == 'add' || tempData[i + 1] == 'edit')
                        this.data.push(this.getNameForRoute(`${tempData[i]}/search`));

                    this.data.push(this.getNameForRoute(`${tempData[i]}/${tempData[i + 1]}`));
                    --indexLimit;
                }
                else
                    this.data.push(currentDescription);
            }
        } else {
            this.data = this.router.url.split('/');
        }

        this.data.splice(0, 1);
    }

    getNameForRoute(routeName: string): string {
        let routes = this.config.routes.filter(r => r.path == routeName) || [];

        this.config.routes.filter(r => r.children)
            .forEach(r => r.children.forEach(c => {
                if (c.path == routeName)
                    routes.push(c);
            }));

        if (routes && routes.length == 1)
            return routes[0].data[0].linkName;

        return '';
    }
}
