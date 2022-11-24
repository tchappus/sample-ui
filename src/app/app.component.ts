import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  data = [""]

  async ngOnInit() {
    console.log("foo")

    let results = await (await fetch("https://xms-api-xms-api.azuremicroservices.io/msgs")).text()
    // let results = await (await fetch("")).text()https://xms-api-xms-api.azuremicroservices.io/msgs
    // console.log(results)http://localhost:8080
    this.data = results.split("\n")
    console.log(this.data)
  }

}
