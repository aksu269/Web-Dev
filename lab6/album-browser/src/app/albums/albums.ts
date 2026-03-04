import { Component, OnInit, signal } from '@angular/core';
import { Album } from '../models/album.model';
import { AlbumService } from '../services/album';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-albums',
  imports: [RouterLink],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class AlbumsComponent implements OnInit {
  albums = signal<Album[]>([]);
  isLoading = signal(true);
  constructor(private albumService: AlbumService) {}
  ngOnInit() {
    this.albumService.getAlbums().subscribe((data) => {
      this.albums.set(data);
      this.isLoading.set(false);
    })
  } 
  onDelete(id: number) {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums.update(list => list.filter(album => album.id !== id));
    })
  }
}
