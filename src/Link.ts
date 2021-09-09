export class Link {
  constructor(
    public id: string,
    public title: string,
    public url: string,
    public iconUrl: string,
    public description: string,
    public pinned: boolean,
  ) {
  }
}
