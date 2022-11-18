import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: '',
                items: [
                    { label: 'หน้าหลัก', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                    {label:'Profile',  icon: 'pi pi-fw pi-user', routerLink: ['/person/profile']},
                    { label: 'join match', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                    { label: 'สถิติ', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                ]
            },
            {
                label: 'ก๊วน',
                items: [ 
                    {label:'สร้าง',  icon: 'pi pi-fw pi-user', routerLink: ['/clubs/create']} ,    
                    {label:'สร้างวันตี',  icon: 'pi pi-fw pi-user', routerLink: ['/clubs/creatematch']}   
                       ]
            }
          
        ];
    }
}
