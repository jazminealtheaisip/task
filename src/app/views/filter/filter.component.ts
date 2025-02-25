import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  selectedFilter: string = "All";
  selectedCategory: string = "Todo";
  categories: string[] = ['Todo','Pending','Ongoing','Completed',];
  uniqueCategories: string[] = [];

  constructor() { }
  ngOnInit(): void {}


  /* ngOnInit(): void {  this.uniqueCategories = [...new Set(this.categories)];
  }

  getCategoryColor(category: string): string {
    switch (category) {
      case 'Todo':
        return '#dcceb3';
      case 'Pending':
        return '#f1c159';
      case 'Ongoing':
        return '#a3bdff';
      case 'Completed':
        return '#8de79e';
      default:
        return '#e7e0cf';
    }
  } */

  filterTasks() {
    
    
  }
}
