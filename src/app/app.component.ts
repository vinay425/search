import { Component } from '@angular/core';

interface AxisItem {
  value: number;
  viewValue: {
    measureName: string;
    measureLabel: string;
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  preselectedSeries:  any[] = [];
  yAxis = [
    { value: 1, viewValue: { measureName: "Length", measureLabel: "meters" } },
    { value: 2, viewValue: { measureName: "Weight", measureLabel: "kilograms" } },
    { value: 3, viewValue: { measureName: "Volume", measureLabel: "liters" } },
    { value: 4, viewValue: { measureName: "Temperature", measureLabel: "degrees Celsius" } },
    { value: 5, viewValue: { measureName: "Time", measureLabel: "seconds" } },
    { value: 6, viewValue: { measureName: "Area", measureLabel: "square meters" } },
    { value: 7, viewValue: { measureName: "Speed", measureLabel: "meters per second" } },
    { value: 8, viewValue: { measureName: "Power", measureLabel: "watts" } },
    { value: 9, viewValue: { measureName: "Electric Current", measureLabel: "amperes" } },
    { value: 10, viewValue: { measureName: "Electric Charge", measureLabel: "coulombs" } },
    { value: 11, viewValue: { measureName: "Energy", measureLabel: "joules" } },
    { value: 12, viewValue: { measureName: "Frequency", measureLabel: "hertz" } },
    { value: 13, viewValue: { measureName: "Pressure", measureLabel: "pascals" } },
    { value: 14, viewValue: { measureName: "Angle", measureLabel: "radians" } },
    //{ value: 15, viewValue: { measureName: "Force", measureLabel: "newtons" } },
    { value: 1, viewValue: { measureName: "Length", measureLabel: "meters" } },
    { value: 2, viewValue: { measureName: "Weight", measureLabel: "kilograms" } },
    { value: 3, viewValue: { measureName: "Volume", measureLabel: "liters" } },
    { value: 4, viewValue: { measureName: "Temperature", measureLabel: "degrees Celsius" } },
    { value: 5, viewValue: { measureName: "Time", measureLabel: "seconds" } },
    { value: 6, viewValue: { measureName: "Area", measureLabel: "square meters" } },
    { value: 7, viewValue: { measureName: "Speed", measureLabel: "meters per second" } },
    { value: 8, viewValue: { measureName: "Power", measureLabel: "watts" } },
    { value: 9, viewValue: { measureName: "Electric Current", measureLabel: "amperes" } },
    { value: 10, viewValue: { measureName: "Electric Charge", measureLabel: "coulombs" } },
    { value: 11, viewValue: { measureName: "Energy", measureLabel: "joules" } },
    { value: 12, viewValue: { measureName: "Frequency", measureLabel: "hertz" } },
    { value: 13, viewValue: { measureName: "Pressure", measureLabel: "pascals" } },
    { value: 14, viewValue: { measureName: "Angle", measureLabel: "radians" } },
    { value: 15, viewValue: { measureName: "Force", measureLabel: "newtons" } },
  ];
  ngOnInit() {
    // this.preselectedSeries.push(this.yAxis.find(item => item.viewValue.measureLabel === "meters"));
    // this.preselectedSeries.push(this.yAxis.find(item => item.viewValue.measureLabel === "kilograms"));
    // this.preselectedSeries.push(this.yAxis.find(item => item.viewValue.measureLabel === "liters"));
    // this.preselectedSeries.push(this.yAxis.find(item => item.viewValue.measureLabel === "degrees Celsius"));
    
    
  }
  

 //selectedCountry:  any[] = [];
  searchText = '';

  
  countries = [ "Gentle",
  
  "New Information 1",
   
 "Affinity",
   "Affinity: 1 to 10/n aa &#13; Aa \\x0D abc <br> xyz",
  "New Information 2",
  "New Information 3",
   "New Information 4",
 "Affinity: 51 to 60-test",
     "Affinity: 61 to 70",
   "New Information: +5",
   "Affinity: 11 to 20",
   "Affinity: 71 to 80",
  "Affinity: 81 to 90",
 "Affinity: 91 to 100",
   "Affinity: 31 to 40",
   "Brand Appeal: +1",
 "Brand Appeal",
   "Brand Appeal: +2",
    "Affinity: 21 to 30",
    "Brand Appeal: +3",
     " Boring-test",
     "Brand Appeal: +4",
   "Brand Appeal: +5",
   "Brand Communication Awareness-submeasure1",
 "Brand Communication Awareness-submeasure2"];

  

 

}
