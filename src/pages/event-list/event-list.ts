import { Component } from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {EventModel} from "./EventModel";
import {SqliteService} from "../../providers/sqlite";

/*
  Generated class for the EventList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-event-list',
  templateUrl: 'event-list.html'
})
export class EventListPage {
 title:string ="事件列表";
 pepole:Array<Object>;
  myEvents:any=new Array<EventModel>();
  constructor(public navCtrl: NavController, public navParams: NavParams,public  dbServie:SqliteService,public alertCtl:AlertController) {
    this.myEvents.push({theme:"测试1",iconName:"home",checked:false} as EventModel);
    this.myEvents.push({theme:"测试2",iconName:"home",checked:false} as EventModel);
    this.myEvents.push({theme:"测试3",iconName:"home",checked:false} as EventModel);
    this.myEvents.push({theme:"测试4",iconName:"home",checked:false} as EventModel);
    this.myEvents.push({theme:"测试5",iconName:"home",checked:false} as EventModel);
  }
  insertData(){
    this.dbServie.queryPepole().then((data)=>{
      this.pepole=data;
    });
    this.alertCtl.create({
      title:"red",
      subTitle:"fdfdf",
      message:this.pepole.length.toString()
    });
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad EventListPage');
  }

}