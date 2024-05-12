import { Component } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrl: './create-item.component.css'
})
export class CreateItemComponent {

  item: Item = new Item();
  constructor(private itemService: ItemService,
    private router: Router ){
  }

  saveItem(){
    this.itemService.createItem(this.item).subscribe(data => {
      console.log(data);
      this.goToItemList();
    },
  error => console.log(error)); 
  }

  goToItemList(){
    this.router.navigate(['/items']);
  }

  onSubmit(){
    console.log(this.item);
    this.saveItem();
  }

}
