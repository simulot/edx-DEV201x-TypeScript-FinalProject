module famousPainters.Render {
  import Painters = famousPainters.Painters

  export class Renderer {
    renderPainterList(painterList: Painters.Collection<Painters.Painter>) {
      var selectElement = document.getElementById('PainterSelector')
      painterList.items.forEach((painter) => {
        var option = document.createElement('option')
        option.innerHTML = painter.name
        selectElement.appendChild(option)
      })
    }


    renderExamples(examples: Painters.PainterExamples) {
      var divElement = <HTMLDivElement>document.getElementById('examples');
      var html: string
      if (examples.items.length) {
        html = '<h3>Examples of artwork</h3>'
        examples.items.forEach(example => {
          html += `<p><b>${example.title}</b><br/>
          <img src="${example.urlImage}" alt="${example.title}"/><br/>
          Year: ${example.date}<br/>
          Location: ${example.place}<br/>
          </p>
          `
        });
      }
      divElement.innerHTML = html
    }


    renderPainter(painter: Painters.Painter) {
      var divElement = <HTMLDivElement>document.getElementById('content');
      var html = `<h2>${painter.name}</h2>
      <h3>Informations</h3>
      <b>Style:</b> ${painter.style}<br/>
      <b>Nationality:</b> ${painter.information.nationality}<br/>
      <b>Birth place:</b> ${painter.information.birthPlace}<br/>
      <b>Birth date:</b> ${painter.information.birthDate}<br>
      `
      divElement.innerHTML = html
      this.renderExamples(painter.examples)
    }

    renderError(message: string) {
      var divElement = <HTMLDivElement>document.getElementById('content');
      divElement.innerHTML = "Unable to load data (" + message + ")";
    }

  }

}
