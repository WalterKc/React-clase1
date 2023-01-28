import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; //class Square extends React.Component {

/*  
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  */
//  render() {
//    return (
//      <button
//        className="square"
//        onClick={() => {
//          this.props.onClick();
//        }}
//      >
//        {this.props.value}
//      </button>
//    );
//  }
//}

function Square(props) {
  return /*#__PURE__*/React.createElement("button", {
    className: "square",
    onClick: props.onClick
  }, props.value);
} // esto no es complicado, solo es diferente, voy a descansar un poco y caundo baje un poco la temp, seguimos


let x = "A";

class Board extends React.Component {
  /*
  constructor(props) {
    super(props);
    this.state = {
      cuadros: Array(9).fill(null),
      TurnoX: true,
      contador: 0,
      Gano: false,
    };
  }
  */

  /*
  LogicaDelClick(i) {
    const squares = this.state.cuadros.slice();
    //revisa si hay algo
    console.log(squares[i]);
    this;
      if (this.state.Gano) {
      return;
    }
    if (squares[i]) {
      console.log(squares[i]);
      return;
    }
      //nota this=self
    if (this.state.TurnoX) {
      squares[i] = "X";
    } else {
      squares[i] = "O";
    }
    console.log(squares[i]);
    //squares[i] = "X";
    //esto es un setter(creo)
    this.setState({ cuadros: squares, TurnoX: !this.state.TurnoX });
    this.state.contador += 1;
    console.log(this.state.contador);
  }
  */
  // ACA ESTABA la funcion "GANADOR"
  //
  //
  //.
  renderSquare(i) {
    //return <Square />;
    return /*#__PURE__*/React.createElement(Square, {
      value: this.props.cuadros[i],
      onClick: () => this.props.onClick(i) //onClick2={() => this.ganador()}

    });
  }

  render() {
    console.log(this.props.test);
    console.log(this.props.test2);
    /*
    var status = "Next player: X";
    if (this.state.TurnoX) {
      var status = "Next player: X";
    } else {
      var status = "Next player: 0";
    }
    //GUARDA CON EL ORDEN
    //console.log(cuadros);
      if (this.state.contador > 4) {
      console.log("LISTO");
      const winner = this.ganador(this.state.cuadros);
      var status = "Winner: " + winner;
    }
    console.log(this.state.Gano);
    */

    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "status"
    }, status), /*#__PURE__*/React.createElement("div", {
      className: "board-row"
    }, this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)), /*#__PURE__*/React.createElement("div", {
      className: "board-row"
    }, this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)), /*#__PURE__*/React.createElement("div", {
      className: "board-row"
    }, this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)));
  }

} //PARA, ANTES DE CONTINUA, VAMOS A EXPLICAR ESTO BIEN, ES IMPORTANTE QUE SE ENTIENDA
//Bueno, esto funciona basicamente, con clases y heredar, como que con algunas diferencias,
//voy a explicar como funciona hasta ahora y voy a poner las diferencias en un dettalle mas abajo
//ignorando los import a react iniciales(no es importante en este caso, ni los entiendo)

/**
 * tenemos la clase "Game", este objeto/clase, se encarga de darles/heredar , las caracterisiticas
 * a los otros 2 elementos del juego, board y square, vamos esplicar primero lo que hace Game
 * y luego como su elementos hijos usan lo que se les envia.------------------------------------
 * primero, lo que hace game, es llamar a un costructor, en estos van a estar los datos mas relevantes
 * del juego, estos datos se llaman , como si fueran un "self" de python (con . y nombre) y estan dentro
 * de un registo(algo:"otra cosa"). por lo que hay que usar doble punto(a.b.c)
 * los datos que se guardan son, cuadros(los cuadros de tateti VACIOS (null)), de quien es el turno
 * "TurnoX", un contador, y si alguien gano el juego, estos datos siempre se heredan, y siempre
 * son iguales por cada elemento hijo , cualquier declaracion/objetos de esta clase y sus hijos
 * siempre y cuando, no se modifiquen en un elemento hijo, siempre van aa arrancar igual y sus estados
 * NO SE COMPARTEN entre elementos diferente(sea hijo o no), pero si es posible leerlos desde otros
 * elementos.
 * estos elementos, estan encerrados en el array/registro de historial, esto es por que se va a
 * hacer un boton de "volver" y que se muestren los movimientos hechos en el futuro, mas tarde se hablara
 * de como funciona esto
 * luego tenemos la funcion "ganador()",esta pide como argumento, unos cuadros
 * la version nueva de esta funcion hace algo muy simple, esta tiene unos patrones, y los compara
 * con los patrones que recibe como argumentos, y si estos son iguales a algunos de los que se considera
 * "ganadores", cambia el flag de ganar de los estado y retorna que tipo de cuadro gano, el "X" o el "O"
 * luego tenemos la funcion "logica del click", en esta esta lo que pasa cuanod se clickea un cuadro
 * tiene como argumento, el cuadro que se clickea, que es a su ves, parte del array de cuadros
 * (por eso el i).
 * en esta funcion creamos una copia del historial(para que funcione el historial, es necesario un estado
 * pasado y uno actual al menos), y comprobamos si alguien gano, o el turno, si alguien gano, no deja
 * poner mas inputs a el tateti, y si ese cuadro del tateti esta ocupado, tampoco permite sobreescibirlo
 * luego, tambien decide de quien es el turno, si tenemos el flag de TurnoX en True, es el de "X", en
 * caso contrario, el de "O", luego, si nadie gana ni tocamos otra ves el mismo cuadro
 * settea los estados para el siguiente turno , y los agraga al array de historial
 * el "reder ()" es algo de react, no se inventa ni se escribe, y es lo que decide que se dibuja, como
 * y quien es el padre y quien el hijo, es muy importante entenderlo asi que voy a explicarlo con detalle
 * el render se divide en 2 partes, la logica del programa , y el renderizado en si, el render lo podemo
 * entender como el update o un bucle while abierto que usabamos para renderizar cosas en python antes
 * pero esta esta dentro de la clase/objeto game, por lo que tiene acceso a todos sus datos y no es
 * necesario declararlo o llamarlos en paricular, y es el que se encarga de dibujar todo
 * por lo que siempre va a ser (despues del contructor) lo primero que se llama, por lo que seria
 * asi Game--> constructor--> render(while o uptade)--> logica del render y sus llamadas--> hijos y su logica
 * en la logica del renderer tenemos tambien una copia del historial, y el estado actual(o mas bien
 * un renombre, para que sea mas comodo su uso ), la barra de estatus, esta solo escribe de quien es
 * el turno, basandose en el flag de turno , luego tenemos la llamada a la funcion "ganador"
 * esta , despues de 5 turnos(lo minimo para ganar), llama a la funcion ganador (pasandole como arg los cuadros actuales)
 * y verifica si alguien gano, en caso de que si , cambia el status, pone el nobre del ganador
 * y cambia el flag de ganador en el estado actual asi se impide seguir clickeando, caso contrario, continua
 * luego esta el react en si, este funciona asi, crea ,un objeto /codigo html, lo importante aca
 * es el "Board" a este se le pasan datos/agumentos, estos argnumentos, se pueden usar como si
 * fueran del contructor mismo del board, estos datos son "heredados" del "Game"(le podes pasar
 * cualquier cosa en realidad ), pero primero vamos a decir lo que hace el board asi queda claro y
 * explicamos de paso para que sirven estos datos
 * buneo, la claso/objeto "Board" basicamente es un setter general(por asi desirlo), se dedica a pasar
 * datos que recibe, y al escribir un pequeño codigo de react que represeta el tateti
 * la funcion "renderSquare(i)" del board, es similar a la del render dentro del "Game", pasa datos
 * en espesifico, pasa/entrega lo siguiente, el valor de el cuadro("X" o "O"), y una funcion onClick
 * en base a que cuadro se toque, luego el render, crea un html con todos los elementos del cuadro
 * finalmente, square, es una funcion idependiente,, esta lo unico que hace es crear un html
 * y recibe un par de datos(aunque NO SEAN ARGs,)por medio de react, un valor(el del cuadro)
 * y un onClick
 * Eso es todo por ahora
 * Ahora, mas tarde, cuando tengas ispiracion, vamos a explicar lo ultimo que falta
 */


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      historial: [{
        cuadros: Array(9).fill(null),
        TurnoX: true,
        Gano: false
      }],
      contador: 0
    };
  }

  ganador(cuadros) {
    //console.log(x);
    //vamor a mejorarla, no me gusta como esta, se ve muy sucia
    // si quiero dejararla fuera, tengo que quitar cualquier referencia a algo de la clase
    //caso contrario, tengo que meterla adentro........
    //como es algo que no se va a usar para nada mas, lo voy a mover adentro
    //esto de abajo, es un asco, hay que hacer que sea pequeño, aunque funcione, se ve muy tercermundista
    //asi que lo vamos a hacer mas chico, por suerte, no es dificil ,por que hace siempre lo mismo
    //solo vamos a tener que cambiar algunas cositas y ya
    // que vemos en comun aca? vemos que verifica un patron y si este se cumple, da un resultado
    //caso contrario no, esto es para un bucle, por que , aunque el patro cambie, siempre hace lo mismo
    //a los patrones, tengo que guardarlos en algun array, luego, leerlos y compararlos con el array de actual
    //creo que es todo
    const patrones = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]]; //los cuadros, los recibo del slice actual, asi que , hay que importalos
    //voy a hacer trampa aca, voy a asignar todas al mismo tiempo

    for (let x = 0; x < 8; x++) {
      let [a, b, c] = patrones[x]; //console.log(a, b, c);
      //console.log(a, b, c);
      //ahora vamos a poner las condiciones

      if (cuadros[a] === cuadros[b] && cuadros[a] === cuadros[c] && cuadros[a] !== null) {
        console.log(a, b, c);
        console.log("ES IGUAL");
        console.log(cuadros); //console.log("Gano? " + this.state.historial.Gano);

        this.state.historial.Gano = true;
        return cuadros[a]; //this.state.historial.Gano = true;

        break;
      }
    } //LISTO LA NUEVA VERSION

    /*
    if (
      cuadros[0] &&
      cuadros[3] &&
      cuadros[6] &&
      cuadros[0] === cuadros[3] &&
      cuadros[0] === cuadros[6]
    ) {
      console.log("GANO");
      console.log(cuadros[0], cuadros[3], cuadros[6]);
      this.state.Gano = true;
      return cuadros[0];
    } else if (
      cuadros[1] &&
      cuadros[4] &&
      cuadros[7] &&
      cuadros[1] === cuadros[4] &&
      cuadros[1] === cuadros[7]
    ) {
      console.log("GANO");
      console.log(cuadros[1], cuadros[4], cuadros[7]);
      this.state.Gano = true;
      return cuadros[1];
    } else if (
      cuadros[2] &&
      cuadros[5] &&
      cuadros[8] &&
      cuadros[2] === cuadros[5] &&
      cuadros[2] === cuadros[8]
    ) {
      console.log("GANO");
      console.log(cuadros[2], cuadros[5], cuadros[8]);
      this.state.Gano = true;
      return cuadros[2];
    } else if (
      cuadros[0] &&
      cuadros[1] &&
      cuadros[2] &&
      cuadros[0] === cuadros[1] &&
      cuadros[0] === cuadros[2]
    ) {
      console.log("GANO");
      console.log(cuadros[0], cuadros[1], cuadros[2]);
      this.state.Gano = true;
      return cuadros[0];
    } else if (
      cuadros[4] &&
      cuadros[5] &&
      cuadros[6] &&
      cuadros[4] === cuadros[5] &&
      cuadros[4] === cuadros[6]
    ) {
      console.log("GANO");
      console.log(cuadros[0], cuadros[1], cuadros[2]);
      this.state.Gano = true;
      return cuadros[4];
    } else if (
      cuadros[6] &&
      cuadros[7] &&
      cuadros[8] &&
      cuadros[6] === cuadros[7] &&
      cuadros[6] === cuadros[8]
    ) {
      console.log("GANO");
      console.log(cuadros[6], cuadros[7], cuadros[8]);
      this.state.Gano = true;
      return cuadros[6];
    } else if (
      cuadros[0] &&
      cuadros[4] &&
      cuadros[8] &&
      cuadros[0] === cuadros[4] &&
      cuadros[0] === cuadros[8]
    ) {
      console.log("GANO");
      console.log(cuadros[0], cuadros[4], cuadros[8]);
      this.state.Gano = true;
      return cuadros[0];
    } else if (
      cuadros[2] &&
      cuadros[4] &&
      cuadros[6] &&
      cuadros[2] === cuadros[4] &&
      cuadros[2] === cuadros[6]
    ) {
      console.log("GANO");
      console.log(cuadros[2], cuadros[4], cuadros[6]);
      this.state.Gano = true;
      return cuadros[2];
    } else {
      console.log("NO GANO");
      this.state.Gano = false;
    }
    if (
      cuadros[0] &&
      cuadros[4] &&
      cuadros[5] &&
      cuadros[6] &&
      cuadros[0] === cuadros[4] &&
      cuadros[0] === cuadros[5] &&
      cuadros[0] === cuadros[6]
    ) {
      console.log("NO GANO");
      console.log(cuadros[2], cuadros[4], cuadros[6]);
      this.state.Gano = false;
    }
    */

  }

  LogicaDelClick(i) {
    const historial = this.state.historial.slice(0, this.state.contador + 1);
    const actual = historial[historial.length - 1];
    console.log("actual");
    console.log(actual);
    const squares = actual.cuadros.slice(); //revisa si hay algo

    console.log(squares[i]);

    if (actual.Gano) {
      return;
    }

    if (squares[i]) {
      console.log(squares[i]);
      return;
    } //nota this=self


    if (actual.TurnoX) {
      squares[i] = "X";
    } else {
      squares[i] = "O";
    }

    console.log(squares[i]); //squares[i] = "X";
    //esto es un setter(creo)

    this.setState({
      historial: historial.concat([{
        cuadros: squares,
        TurnoX: !actual.TurnoX,
        Gano: actual.Gano
      }]),
      contador: historial.length //TurnoX: !actual.TurnoX,

    }); //actual.contador += 1;

    console.log(this.state.contador);
  }

  saltarA(indice) {
    this.state.contador = indice;

    if (indice % 2 === 0) {
      this.state.historial.TurnoX = true;
    } //this.render();

  }

  render() {
    console.log("contador");
    console.log(this.state.contador);
    const historial = this.state.historial;
    const actual = historial[this.state.contador]; //const ganador = "";

    /*test map
    var numbers = [1, 2, 3];
    var doubles = numbers.map(function(x) {
    return x * 2;})
      es igual a 
        const numbers = [1, 2, 3];
    const doubled = numbers.map(x => x * 2);
      y tambien a 
    function map(numbers){
      return array*2
    }
    ... odio esta funciones fecha, son idesifrables 
      */
    //a modificar

    const movimientos = historial.map((estadoActual, indiceMovActual) => {
      //esto es un asco, pero lo voy a explicar, esto es un operador ternario
      //es basicamente, una forma horrible de decir if else, no se entinde , es confusa
      //y lo peor de todo, asume cosas al aire/es automatica, asi que la voy a cambiar
      //por que odio las cosas asi

      /*
      const desc = indiceMovActual
        ? "Go to move #" + indiceMovActual
        : "Go to game start";
      */
      //traduccion
      let mensaje; //aca toma como valor, si tiene algo en el indice , cualquier cosa diferente de null y false
      //acordate que es un indice ("x"), solo va a devolver eso, un numero, nada mas

      if (indiceMovActual) {
        console.log("indiceMovActual ");
        console.log(indiceMovActual);
        mensaje = "Ir al movimiento #" + indiceMovActual;
      } else {
        mensaje = "Ir al inicio del juego";
      }

      return /*#__PURE__*/React.createElement("li", {
        key: indiceMovActual
      }, /*#__PURE__*/React.createElement("button", {
        onClick: () => this.saltarA(indiceMovActual)
      }, mensaje));
    });
    var status;

    if (actual.TurnoX) {
      var status = "Next player: X";
    } else {
      var status = "Next player: 0";
    } //GUARDA CON EL ORDEN
    //console.log(cuadros);


    if (actual.contador > 4) {
      console.log("LISTO");
      const winner = this.ganador(actual.cuadros);

      if (this.state.historial.Gano) {
        actual.Gano = true;
        var status = "Winner: " + winner;
      }
    }

    console.log(this.state.Gano);
    console.log(this.state.historial[0].TurnoX);
    console.log(actual.TurnoX);
    console.log(actual);
    return /*#__PURE__*/React.createElement("div", {
      className: "game"
    }, /*#__PURE__*/React.createElement("div", {
      className: "game-board"
    }, /*#__PURE__*/React.createElement(Board, {
      cuadros: actual.cuadros //TurnoX= {actual.TurnoX}
      //contador= {actual.contador}
      //Gano= {actual.Gano}
      ,
      onClick: i => this.LogicaDelClick(i),
      test: "hola",
      test2: [1, 2, 3, 4, 5]
    })), /*#__PURE__*/React.createElement("div", {
      className: "game-info"
    }, /*#__PURE__*/React.createElement("div", null, status), /*#__PURE__*/React.createElement("ol", null, movimientos)));
  }

} // ========================================


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(Game, null));