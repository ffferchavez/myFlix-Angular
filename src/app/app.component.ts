import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

/**
 * Root component of the application that manages the display of the header based on the current route.
 * 
 * @component
 * @example
 * <app-root></app-root>
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  /** Indicates whether the header should be displayed. */
  showHeader: boolean = true;

  /**
   * Creates an instance of AppComponent.
   * 
   * @param router Service for navigating and listening to route events.
   */
  constructor(private router: Router) {}

  /**
   * Lifecycle hook that is called after the component has been initialized.
   * 
   * Subscribes to router events to update the `showHeader` property based on the current route.
   */
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Update this condition based on your route configuration
        this.showHeader = event.url !== '/welcome';
      }
    });
  }
}
