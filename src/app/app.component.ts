import { Component } from '@angular/core';
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch('YPF7PDTRVF', '275c996aaeec7bff9a29c427915ee68c');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  config = {
    indexName: 'wine_company',
    searchClient,
  };
}
