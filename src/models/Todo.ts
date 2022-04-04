export class Todo {
  id: string;
  isChecked: boolean;
  title: string;
  constructor(t: string, isChecked: boolean) {
    this.title = t;
    this.isChecked = isChecked;
    this.id = Date.now().toString();
  }
}
