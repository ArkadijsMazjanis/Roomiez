import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common' ;
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule, } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TasklistComponent } from './tasklist/tasklist.component';


@NgModule({
    declarations: [
        SidebarComponent,
        HeaderComponent,
        TasklistComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,

    ],
    exports: [
        SidebarComponent,
        HeaderComponent,
        TasklistComponent,
    ]
})

export class SharedModule {}