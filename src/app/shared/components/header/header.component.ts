import { Component, Input, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title = '';

  constructor(
    private authService: AuthService
  ) { 
    console.log('CONSTRUTOR ');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  logout() {
    this.authService.logout();
  }
}
