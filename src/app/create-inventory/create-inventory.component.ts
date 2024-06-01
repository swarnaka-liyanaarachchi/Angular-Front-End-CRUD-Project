import { Component,OnInit  } from '@angular/core';
import { Inventory } from '../inventory';
import { InventoryService } from '../inventory.service';
import { error } from 'console';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-create-inventory',
  templateUrl: './create-inventory.component.html',
  styleUrl: './create-inventory.component.css'
})
export class CreateInventoryComponent implements OnInit {

  itemId: string = '';
  inventory: Inventory = new Inventory();

  constructor(private inventoryService: InventoryService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.itemId = this.route.snapshot.params['itemId'];
    this.inventory.itemId = this.itemId;
  }

  // ngOnInit(): void {
  // }

  saveInventory(){
    this.inventoryService.CreateInventory(this.inventory).subscribe(data =>{
      console.log(data);
      this.gotoInventoryList();
    },
  error   => console.log(error));
  }

  gotoInventoryList() {
    this.router.navigate(['/inventory', this.itemId]);
  }

  onSubmit() {
    console.log(this.inventory);
    this.saveInventory();
  }

}
