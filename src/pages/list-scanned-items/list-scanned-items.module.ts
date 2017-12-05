import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListScannedItemsPage } from './list-scanned-items';

@NgModule({
  declarations: [
    ListScannedItemsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListScannedItemsPage),
  ],
})
export class ListScannedItemsPageModule {}
