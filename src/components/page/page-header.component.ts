import { Component, Input } from '@angular/core'

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css'],
})

export default class PageHeader {
  @Input() title: string
}
