import { Component, ContentChildren, AfterContentInit, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.css']
})
export class TabContainerComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> = new QueryList();
  private activeTabs: TabComponent[] = [];

  constructor() { }

  ngAfterContentInit(): void {
    //this.tabs.forEach(id => console.log(id))
    this.activeTabs = this.tabs.filter(
      tab => tab.active === true
    );

    if(!this.activeTabs || this.activeTabs.length === 0) {
      this.setActiveTab(this.tabs!.first);// ! or dang operator tells compiler not to worry if the property first exists on the tabs
    }
  }

  setActiveTab(tab: TabComponent): boolean {
    //set all other tabs except the tab passed as argument to inactive
    this.tabs.forEach(
      tab => tab.active = false 
    );

    tab.active = true;

    return false;//to prevent default behavior of anchor on click event
  }

}
