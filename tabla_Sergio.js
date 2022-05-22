window.addEventListener('load', () => {

  //Con esto, le añadimos a la sección principal lo que tenemos de la función creartabla.
  document.getElementById('createTabla').addEventListener('click', () => {
    document.getElementById('seccionPrincipal').appendChild(crearTabla(numero1, numero2));
  });

  //Con esto, quitamos el último hijo del cuerpo de la tabla.
  document.getElementById('deleteFila').addEventListener('click', () => {
    let tbody = document.getElementById('tbody');
    tbody.lastChild.remove();
  });

  //Con esto, añadimos, mediante un bucle, el contenido al párrafo, el párrafo al td, el td al tr, y por último, el tr a tbody.
  document.getElementById('addFila').addEventListener('click', () => {
    let tbody = document.getElementById('tbody');
    let tr = document.createElement('tr');
    tbody.appendChild(tr);
    for (let i = 1; i <= numero2; i++) {
      let td = document.createElement('td');
      let parrafo = document.createElement('p');
      let contenido = document.createTextNode(
        `Fila ${tbody.childElementCount} || Columna: ${i} `
      );
      parrafo.appendChild(contenido);
      td.appendChild(parrafo);
      tr.appendChild(td);
      tbody.append(tr);
    }
  });

  //La función crearTabla, con numero1 como número de filas, y numero2 como número de columnas. Y añade, a la tabla, como hijos, el thead, el tbody y el tfoot. Por último, devuelve la tabla.
  function crearTabla = (numero1, numero2) => {
    let tabla = document.createElement('table');
    tabla.setAttribute('class', 'claseTabla');
    tabla.appendChild(crearThead(numero2));
    tabla.appendChild(crearTbody(numero2, numero1));
    tabla.appendChild(crearTfoot(numero2));
    return tabla;
  };

  function crearThead = (numero2) => {
    let thead = document.createElement('thead');
    thead.setAttribute('id', 'tHead');
    let tr = document.createElement('tr');
    let i;
    for (i = 0; i < numero2; i++) {
      let th = document.createElement('th');
      let parrafo = document.createElement('p');
      let contenido = document.createTextNode('Columna nº: ' + (i + 1));
      parrafo.appendChild(contenido);
      th.setAttribute('class', 'claseTh');
      th.appendChild(parrafo);
      tr.appendChild(th);
    }
    thead.appendChild(tr);
    return thead;
  };

  function crearTbody = (numero2, numero1) => {
    let tbody = document.createElement('tbody');
    tbody.setAttribute('id', 'tbody');

    for (let i = 0; i < fila; i++) {
      let tr = document.createElement('tr');
      tr.setAttribute('class', 'claseTr');
      tbody.append(tr);
    }
    [...tbody.childNodes].forEach((elemento, tr) => {
      for (let j = 1; j <= numero2; j++) {
        let td = document.createElement('td');
        let parrafo = document.createElement('p');
        let contenido = document.createTextNode('Fila ' + (tr + 1) + 'Columna: ' + (j + 1));
        parrafo.appendChild(contenido);
        td.setAttribute('class', 'claseTd');
        td.appendChild(parrafo);
        elemento.appendChild(td);
      }
    });
    return tbody;
  };

  function crearTfoot = (numero2) => {
    let tfoot = document.createElement('tfoot');
    tfoot.setAttribute('id', 'tFoot');
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    let p = document.createElement('p');
    let contenido = document.createTextNode('Ejemplo de tabla');
    td.setAttribute('colspan', numero2);
    p.appendChild(contenido);
    td.appendChild(p);
    tr.appendChild(td);
    tfoot.appendChild(tr);
    return tfoot;
  };
});
