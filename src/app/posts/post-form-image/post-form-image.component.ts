import {
  Component,
  ViewChild,
  Output,
  EventEmitter,
  Renderer2,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-post-form-image',
  templateUrl: './post-form-image.component.html',
  styleUrls: ['./post-form-image.component.scss']
})
export class PostFormImageComponent implements OnChanges {

  @Input() image: string = '';
  @Output() imageChange = new EventEmitter();
  @ViewChild('uploader') fileInput: any;
  @ViewChild('preview') thumbnail: any;

  // constructor(private renderer :Renderer2) { }


  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['image'].currentValue) {
      this.image = 'http://siamvip.com/managefiles/fileUploads/thatoomsaoadmin/imgUploads/%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%87.jpg'
    }
  }
  // triggerFileUpload() {
  //   this.renderer.insertBefore(
  //     this.fileInput.nativeElement,
  //     'dispatchEvent',
  //     [new MouseEvent('click', { bubbles: true })]
  //   )
  // }

  uploadImage(event: any) {
    const reader = new FileReader();
    const image = event.target.files[0];

    reader.onload = () => {
      const result = reader.result;

      this.thumbnail.nativeElement.src = result;
      this.imageChange.emit(result);
    }
    reader.readAsDataURL(image);
  }


}
