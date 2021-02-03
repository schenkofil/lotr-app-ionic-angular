import { Component } from '@angular/core';
import {LotrService} from '../api/lotr.service';
import { LoadingController } from '@ionic/angular';
import { HistoryRecord } from '../models/history-record.model';
import { HistoryService } from '../api/history.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listType: String
  response: any
  loadingDialog: any  

  constructor(private lotrService: LotrService, public loadingController: LoadingController, private historyService: HistoryService) 
  {
    
  }if (condition) {
    
  }

  public btnClicked():void
  {

      this.presentLoading();
      this.lotrService.getLotr(this.listType).subscribe( (data) => 
      {
        console.log(data);
        this.response = data['docs'];
        console.log(this.response);
        //let record = new HistoryRecord(this.myinput, this.myoutput);
        //this.historyService.saveRecord(record);
        this.loadingDialog.dismiss();
      });
  }

  public addToFavourites(name: String)
  {
    let record = new HistoryRecord(this.listType, name);
    this.historyService.saveRecord(record);
  }

  async presentLoading() 
  {
    this.loadingDialog = await this.loadingController.create(
    {
      message: 'Loading ...', 
    });
    await this.loadingDialog.present();
  }

}
