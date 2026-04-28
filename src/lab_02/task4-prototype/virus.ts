export class Virus {
  constructor(
    public weight: number,
    public age: number,
    public name: string,
    public type: string,
    public children: Virus[] = [],
  ) {}

  clone(): Virus {
    const clonedChildren = this.children.map((child) => child.clone());

    return new Virus(
      this.weight,
      this.age,
      this.name,
      this.type,
      clonedChildren,
    );
  }

  describe(): string {
    return `${this.name} (${this.type}), age=${this.age}, weight=${this.weight}, children=${this.children.length}`;
  }
}
