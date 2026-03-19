export type VirusSnapshot = {
  name: string;
  type: string;
  age: number;
  weight: number;
  children: VirusSnapshot[];
};

export class Virus {
  public readonly children: Virus[];

  constructor(
    public name: string,
    public type: string,
    public age: number,
    public weight: number,
    children: Virus[] = [],
  ) {
    this.children = [...children];
  }

  public addChild(child: Virus): this {
    this.children.push(child);
    return this;
  }

  public clone(visited: WeakMap<Virus, Virus> = new WeakMap()): Virus {
    const existingClone = visited.get(this);
    if (existingClone) {
      return existingClone;
    }

    const clonedVirus = new Virus(
      this.name,
      this.type,
      this.age,
      this.weight,
      [],
    );

    visited.set(this, clonedVirus);

    this.children.forEach((child) => {
      clonedVirus.addChild(child.clone(visited));
    });

    return clonedVirus;
  }

  public toSnapshot(): VirusSnapshot {
    return {
      name: this.name,
      type: this.type,
      age: this.age,
      weight: this.weight,
      children: this.children.map((child) => child.toSnapshot()),
    };
  }
}
