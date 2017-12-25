import { InMemoryDbService } from 'angular-in-memory-web-api';

export class UsersData implements InMemoryDbService {
  createDb() {
    let posts = [
      { id: 1, name: 'admin', content: "adminadminadminadminadminadmin" },
      { id: 2, name: 'root', content: "rootrootrootrootrootroot" },
      { id: 3, name: 'andrew', content: "andrewandrewandrewandrewandrewandrewandrew" }
    ];
    return {posts};
  }
} 