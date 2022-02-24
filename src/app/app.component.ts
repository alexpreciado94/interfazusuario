import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interfazusuario';

  mostrarMenu(): void {
    let menu: any = document.querySelector('nav ul');
    if(menu.style.display == 'flex'){
      menu.style.display = 'none'
    }
    menu.style.display = 'flex'
  }
}
