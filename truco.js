const mazo = [{
	palo: 'espada',
	numero: 1,
	poder: 14,
},{
	palo: 'basto',
	numero: 1,
	poder: 13,
},{
  palo: 'espada',
  numero: 7,
  poder: 12,
},{
  palo: 'oro',
  numero: 7,
  poder: 12,
},{
  palo: 'basto',
  numero: 3,
  poder: 11,
},{
  palo: 'oro',
  numero: 3,
  poder: 11,
}]

let yaSalieron = Array()
let mano1 = Array()
let mano2 = Array()

function nombre(numeroDeMazo){
  let numero = mazo[numeroDeMazo].numero
  let palo = mazo[numeroDeMazo].palo
  let nombre = numero + ' de ' + palo
  return nombre
}

function nombreMano(mano){
  for(i = 0; i< mano.length; i++){
      console.log(nombre(mano[i]))
  }
}

function repartir(){
    for(let i = 0; i < 3; i++){ // reparto para mano 1
      let aleatorio = Math.floor(Math.random()*6)
      if(!yaSalieron.includes(aleatorio)){
        mano1.push(aleatorio)
        yaSalieron.push(aleatorio)
				console.log('bien: i = '+ i)
      } else{
        i = i-1
				console.log('i = '+ i)
      }
    }

    for(let i = 0; i < 3; i++){ //reparto para mano 2
      let aleatorio = Math.floor(Math.random()*6)
      if(!yaSalieron.includes(aleatorio)){
        mano2.push(aleatorio)
        yaSalieron.push(aleatorio)
      } else{
        i = i-1
      }
    }
}

let botonRepartir = document.getElementById('repartir')
botonRepartir.addEventListener('click', function(){


console.log('Reparto')

repartir()
console.log('Ya reparti, mira: ')
console.log(yaSalieron)
nombreMano(mano1)
nombreMano(mano2)

// Se viene la parte html

let carta1 = document.getElementById('carta1')
let carta2 = document.getElementById('carta2')
let carta3 = document.getElementById('carta3')

carta1.innerHTML = nombre(mano1[0])
carta2.innerHTML = nombre(mano1[1])
carta3.innerHTML = nombre(mano1[2])

console.log('listo')

// Por ahora solo estamos mostrando cartas en HTML. Por eso reinicio los valores después.
// Si queremos jugar, necesito seguir sabiendo los valores de mano1 y mano2 para usar
// mazo[mano1].poder para ver quién gana cada vuelta

yaSalieron = Array()
mano1 = Array()
mano2 = Array()

})
