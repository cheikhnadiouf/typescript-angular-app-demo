export class UserModel {
  public id: number;
  public name: string;
  constructor(d: any) {
    this.id = d.id;
    this.name = d.name;
  }
}


