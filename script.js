class Carro{
  constructor (marca){
  this.marca = marca
  this.velocidade = 0
}

  acelerar(){
    if(this.velocidade >= 100) return
    this.velocidade++
  }

  freiar(){
    if(this.velocidade <= 0) return
    this.velocidade--
  }

}

let c1 = new Carro ('Gol')

for(let i = 0; i < 90; i++){
  c1.acelerar()
}

console.log(c1)