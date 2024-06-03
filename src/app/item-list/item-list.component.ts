import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']  // Corrected here
})

export class ItemListComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService, private router: Router) {}

  ngOnInit() {
    this.getItems();
  }

  private getItems(){
    this.itemService.getItemList().subscribe(data => {
      this.items = data;
    });
  }

  itemDetails(id: string){
    this.router.navigate(['item-details', id]);
  }


  updateItem(id: string){
    this.router.navigate(['update-item', id]);
  }

  deleteItem(id: string){
    this.itemService.deleteItem(id).subscribe( data => {
      console.log(data);
      this.getItems();
    } )
  }

  viewInventory(itemId: string) {
    this.router.navigate(['inventory', itemId]);
  }

  navigateToAddItem() {
    this.router.navigate(['create-item']);
  }

  navigateToHome() {
    this.router.navigate(['home']);
  }

}
