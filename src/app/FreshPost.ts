export class FreshPost {
  loveIts: number;
  created_at: Date;
  constructor(public title: string, public content: string) {
    this.loveIts = 0;
    this.created_at = new Date();
  }
  getSucess() {
    if (this.loveIts >= 0) {
      return true;
    } else {
      return false;
    }
  }
  like() {
    this.loveIts++;
  }
  dislike() {
    this.loveIts--;
  }
}
