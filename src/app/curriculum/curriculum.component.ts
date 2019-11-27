import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {

  constructor() { }
  public pdfSrc: string = "/assets/curriculum/curriculumvitae_blaise_vandyck.pdf";
  ngOnInit() {
  }

}
