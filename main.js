import './style.css'

const usuarios = [{
  nome: "Danilo",
  idade: 31,
  profissao: "Estudante"
},{
  nome: "Fabio",
  idade: 25,
  profissao: "Programador"
},{
  nome: "Julia",
  idade: 22,
  profissao: "Enfermeira"
}];

/*const names = usuarios.map((usuario) => usuario.profissao)
console.log(names)*/

const usuarioFiltrado = usuarios.filter((usuario)=> usuario.profissao === "Estudante")
console.log(usuarioFiltrado)

function dadosAluno ( nome, idade, sexo){
  alert(`Meu nome é ${nome} tenho ${idade} anos e sou do sexo ${sexo}`)
}

/*dadosAluno("Karpgianny", 40, "Masculino")*/