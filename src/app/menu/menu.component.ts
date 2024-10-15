// import { Component } from '@angular/core';
// import { MenubarModule } from 'primeng/menubar';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenubarModule,RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Manufacturing',
              icon: 'pi pi-home',
            
              items: [
                {
                    label: 'REC',
                    icon: 'pi pi-bolt',
                    items: [
                      {
                          label: 'Production',
                          icon: 'pi pi-palette'
                      },
                      {
                          label: 'Quality',
                          icon: 'pi pi-palette'
                      },
                      {
                        label: 'Cost',
                        icon: 'pi pi-palette'
                    },
                    {
                      label: 'Delivery',
                      icon: 'pi pi-palette'
                  }
                  ]
                },
                {
                    label: 'Vbelt',
                    icon: 'pi pi-server',
                    items: [
                      {
                          label: 'Production',
                          icon: 'pi pi-palette'
                      },
                      {
                          label: 'Quality',
                          icon: 'pi pi-palette'
                      },
                      {
                        label: 'Cost',
                        icon: 'pi pi-palette'
                    },
                    {
                      label: 'Delivery',
                      icon: 'pi pi-palette'
                  }
                  ]
                },
                {
                    label: 'Automotive Hose',
                    icon: 'pi pi-pencil',
                    items: [
                      {
                          label: 'Production',
                          icon: 'pi pi-palette'
                      },
                      {
                          label: 'Quality',
                          icon: 'pi pi-palette'
                      },
                      {
                        label: 'Cost',
                        icon: 'pi pi-palette'
                    },
                    {
                      label: 'Delivery',
                      icon: 'pi pi-palette'
                  }
                  ]

                },
                
            ]
          },
          {
              label: 'Quality',
              icon: 'pi pi-star',
              routerLink:'/graphpage'
          },
          {
              label: 'Maintainence',
              icon: 'pi pi-search',
          },
          {
              label: 'HR',
              icon: 'pi pi-envelope'
          },
          {
            label:'ESG',
            icon:'pi pi-envelope'
          }
      ]
  }

}
