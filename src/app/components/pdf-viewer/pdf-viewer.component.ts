import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { PdfServiceService } from 'src/app/services/pdf-service.service';
import * as printJs from "print-js";


@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})



export class PdfViewerComponent implements OnInit {
  document: string = "";
  base64:string = "";
  constructor(
    private pdfService : PdfServiceService
  ) { }

  ngOnInit(): void {
    this.pdfService.getPdf().subscribe((response:any) =>{
      const { data } = response;
      this.base64 = data;
      this.document = this.base64toPDF(data)+'#toolbar=0&navpanes=0&scrollbar=0';
    });
  }



  base64toPDF(base64:any) {
    var bufferArray = this.base64ToArrayBuffer(base64);
    var blobStore = new Blob([bufferArray], { type: "application/pdf" });
    var data = window.URL.createObjectURL(blobStore);
    return data;
  }

  base64ToArrayBuffer(data:any) {
    var bString = window.atob(data);
    var bLength = bString.length;
    var bytes = new Uint8Array(bLength);
    for (var i = 0; i < bLength; i++) {
        var ascii = bString.charCodeAt(i);
        bytes[i] = ascii;
    }
    return bytes;
  }



  print(){
    printJs(
      {
        printable: this.base64, 
        type: 'pdf', 
        base64: true,
        showModal:false
      }
    ); 
  }

}
