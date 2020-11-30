import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-introbox',
  templateUrl: './introbox.component.html',
  styleUrls: ['./introbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IntroboxComponent implements OnInit {
  linkID;

  @Input() showVideo = false;
  hidePlay = true;
  showExit = false;

  safeUrl: SafeResourceUrl;
  videoUrl = 'https://www.youtube.com/embed/';

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.linkID = this.route.snapshot.paramMap.get("linkID");
    this.safeUrl = this.videoUrl + this.linkID;
    console.log("safeUrl:" + this.safeUrl);
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
    console.log("sanitized:" + this.safeUrl);
  }

  public toggleVideo(isClose = false) {
    if(isClose){

      setTimeout(() => {
        this.hidePlay = !this.hidePlay;
        this.showExit = !this.showExit;
      }, 500)
    } else{
      this.hidePlay = !this.hidePlay;
      this.showExit = !this.showExit;
    }
    this.showVideo = !this.showVideo;
  }

  ngOnDestroy(): void {
    this.linkID.unsubscribe();
  }
}
