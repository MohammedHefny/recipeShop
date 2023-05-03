import { trainingModel } from "./training.module"
export class trainingService {
private products: trainingModel[] = [
new trainingModel('banana',10,'Egypt'),
new trainingModel('Apple',20,'Syria'),
new trainingModel('Orange',30,'Iraq'),
]

getProducts() {
  return this.products
}
}
