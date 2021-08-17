import React, {Component} from 'react';
import data from '../data/data.json';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker,GeoJSON } from 'react-leaflet';
import "./MyMap.css";
import data2 from '../data/data2.json';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {setState} from 'react';

class MyMap extends Component {

  color =  ["green","blue","yellow","orange","grey"];



  componentDidMount() {
    console.log(data);
  }

countryStyle={
fillColor: "green",
fillOpacity: 0.5,
color:"black",
  }

printMessagetoConsole = (event) =>{
  console.log("clicked");
}

changeCountryColor= (event) => {
  event.target.setStyle({
    color:"green",
    fillColor:"yellow",
    fillOpacity:1
  });
}



onEachSuprafata=(Ocol_s,layer) => {


console.log(Ocol_s.properties.Ocol_s);

layer.bindPopup("Nume: " + Ocol_s.properties.Ocol_s + "<br>" + "Suprafata: " + Ocol_s.properties.suprafata + "<br>" +'<button class="trigger" onClick=sayHello()>Copy Location<button/>');

layer.options.fillOpacity = Math.random();

layer.on({
  click:this.changeCountryColor,
})  

}

colorChange = (event) => {
this.setState({color:event.target.value})
}

constructor(props) {
  super(props);
  this.state={copySuccess:''};
}



 sayHello() {
  alert('Hello!');
}


  render() {


    
    return(
    <div>
      <h1 style={{textAlign: "center"}}>MyMap</h1>
      <MapContainer style={{height:"80vh"}} zoom={3} center={[44.4268,26.1025]}>
<GeoJSON style={this.countryStyle} data={data.features} data={data2.features} onEachFeature={this.onEachSuprafata}/>
</MapContainer>
<button onClick={this.sayHello}>
      Click me!
    </button>
     
    </div>
    )
  };
}
export default MyMap;