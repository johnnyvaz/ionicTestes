import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-filmes',
  templateUrl: 'filmes.html',
})
export class FilmesPage {


  private url:string = 'https://api.themoviedb.org/3/movie/upcoming?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR&page=1'
  public results: Array<{}>;


constructor(public navCtrl: NavController,
  public http: Http
) {
  //console.log(this.results);
  this.getDados();
}

getDados() {
  this.http.get(this.url)
  .map(res => res.json())
  .subscribe(data => {
      this.results = data;
      console.log(data);
    //return data;
});
}
}

