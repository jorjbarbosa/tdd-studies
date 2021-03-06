export class Dollar {
  amount: number

  constructor(amount: number) {
    this.amount = amount
  }

  times(multiplier: number) : Dollar {
    return new Dollar(this.amount * multiplier)
  }

  equals(object: any) {
    const dollar: Dollar = object
    return this.amount === dollar.amount
  }

}