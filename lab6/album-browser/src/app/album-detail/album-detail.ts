import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AlbumService } from '../services/album';
import { Album } from '../models/album.model';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [FormsModule, RouterLink],
  template: `
    @if (album(); as a) {
      <div class="detail-view">
        <button (click)="goBack()" class="back-btn">← Back</button>
        <h3>Album #{{ a.id }}</h3>
        <p><strong>User ID:</strong> {{ a.userId }}</p>
        
        <div class="edit-area">
          <label>Title:</label>
          <input [(ngModel)]="a.title" class="edit-input">
          <button (click)="saveTitle()" class="save-btn">Save</button>
        </div>

        <button [routerLink]="['/albums', a.id, 'photos']" class="view-photos">View Photos</button>
      </div>
    }
  `
})
export class AlbumDetailComponent implements OnInit {
  album = signal<Album | null>(null);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe(data => this.album.set(data));
  }

  saveTitle() {
    const a = this.album();
    if (a) {
      this.albumService.updateAlbum(a).subscribe(updated => {
        alert('Title updated successfully!');
        this.album.set(updated);
      });
    }
  }

  goBack() { this.router.navigate(['/albums']); }
}