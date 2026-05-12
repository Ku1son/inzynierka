import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Sidebar } from '../../components/sidebar/sidebar';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home-page',
  imports: [Navbar, Sidebar, CommonModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  standalone: true,
})
export class HomePage {

}
