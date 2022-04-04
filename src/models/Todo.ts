export class Todo {
  id: string;
  title: string;
  constructor(t: string) {
    this.title = t;
    this.id = Date.now().toString();
  }
}
