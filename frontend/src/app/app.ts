import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({  //glowny komponent aplikacji
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
