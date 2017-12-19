import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toilet',
  templateUrl: './toilet.component.html',
  styleUrls: ['./toilet.component.css']
})
export class ToiletComponent implements OnInit {
  // libero 0 occupato 1 prenotato 2
  status = 0;
  labelSwitchStatus = 'Occupa';

  constructor() { }

  ngOnInit() {
  }

  swichStatus(ev){
    console.log("setbusy");
    if(this.status==1){
      this.status=0;
    }else{
      this.status=1;
    } 
  }

  statusBusy(){
    if(this.status==1) return true;
    return false;
  }

  statusFree(){
    if(this.status==0) return true;
    return false;
  }


  getStatus(){
    return this.status;
  }

  allowGoing(){
    if(this.status==1) return false;
    return true;
  }

  getLabelSwitchStatus(){
    if(this.status==0){
      this.labelSwitchStatus = "Occupa";
    }else{
      this.labelSwitchStatus = "Libera";      
    }
    return this.labelSwitchStatus;
  }
  
}
