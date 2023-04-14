export class FiboIterable {
  private a = 0;
  private b = 1;

  public constructor(private readonly n: number) {}

  [Symbol.iterator](): Iterator<number> {
    return {
      next: (): IteratorResult<number> => {
        if (this.n === 0) {
          return { done: true, value: undefined };
        }

        const value = this.a;
        this.b = this.b + this.a;
        this.a = this.b - this.a;

        return { done: false, value };
      },
    };
  }
}
