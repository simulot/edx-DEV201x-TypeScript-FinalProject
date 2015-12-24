module famousPainters.Painters {

  export class Collection<T> {
    items: T[] = [];
  }


  export interface IPainter {
    style: string
    name: string

  }

  export interface IPainterExample {
    title: string
    date: string
    place: string
    urlImage: string
  }

  export interface IPainterInformation {
    birthDate: string
    birthPlace: string
    nationality: string
  }

  export type PainterExamples = Collection<IPainterExample>

  export class Painter implements IPainter{
    name: string
    style: string
    information: IPainterInformation
    examples: PainterExamples

    constructor (painter: IPainter, information: IPainterInformation, examples: IPainterExample[]) {
        this.name = painter.name
        this.style = painter.style
        this.information = information
        this.examples= new Collection<IPainterExample>()
        examples.forEach( example => {
          this.examples.items.push({
            title: example.title,
            date: example.date,
            place: example.place,
            urlImage: example.urlImage
           })
        })
    }
  }

  export class PainterInformation implements IPainterInformation {
    birthDate: string
    birthPlace: string
    nationality: string
    constructor(information: IPainterInformation) {
      this.birthDate = information.birthDate
      this.birthPlace = information.birthPlace
      this.nationality = information.nationality
    }
  }



}
