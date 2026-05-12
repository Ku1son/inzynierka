import { Component, signal } from '@angular/core';
import { HomePage } from './pages/home-page/home-page';



@Component({  //glowny komponent aplikacji
  selector: 'app-root',
  imports: [HomePage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  protected readonly title = signal('frontend');
}
