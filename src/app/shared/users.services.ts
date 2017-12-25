import { InMemoryDbService } from 'angular-in-memory-web-api';

export class UsersData implements InMemoryDbService {
  createDb() {
    let users = [
      { id: 1, username: 'admin', password: "admin" },
      { id: 2, username: 'root', password: "root" },
      { id: 3, username: 'andrew', password: "andrew" }
    ];
    return {users};
  }
} 