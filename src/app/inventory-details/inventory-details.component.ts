import { Component, OnInit } from '@angular/core';
import { Inventory } from '../inventory';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-inventory-details',
  templateUrl: './inventory-details.component.html',
  styleUrl: './inventory-details.component.css'
})
export class InventoryDetailsComponent implements OnInit {

  id: string = '';
  inventory?: Inventory;

  constructor(private route: ActivatedRoute, private inventoryService: InventoryService){
  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id']
    this.inventory = new Inventory();
    this.inventoryService.getInventoryById(this.id).subscribe(data => {
      this.inventory = data;
    })
    
  }

}
