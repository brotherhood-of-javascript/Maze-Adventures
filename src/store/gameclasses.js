export class Items {
  constructor(name, weight, clas, info) {
    this.name = name
    this.weight = weight
    this.class = clas
    this.info = info
  }
}
export class Dialog extends Items {
  constructor(dialog) {
    super()
    this.dialog = dialog
  }
}
