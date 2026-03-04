import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../services/album';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  template: `
    <button (click)="goBack()" class="back-btn">← Back to Details</button>
    <h2>Gallery</h2>
    <div class="photo-grid">
      @for (photo of photos(); track photo.id) {
        <div class="photo-item">
          <img [src]="photo.thumbnailUrl" [alt]="photo.title">
          <span class="photo-title">{{ photo.title }}</span>
        </div>
      }
    </div>
  `,
  styleUrls: ['./album-photos.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos = signal<Photo[]>([]);

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(id).subscribe(data => this.photos.set(data));
  }

  goBack() {
    const id = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['/albums', id]);
  }
}