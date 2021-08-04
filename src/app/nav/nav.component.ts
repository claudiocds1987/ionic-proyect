import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  constructor(private menuctrl: MenuController) { }

  ngOnInit() {}

  toggleMenu(){
    this.menuctrl.toggle()
  }

}
