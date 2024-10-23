import Tabela from "./Tabela"

const App = () =>{
    const Dados = [
        {nome: 'Caio', idade: 18},
        {nome: 'Melissa', idade: 18},
        {nome: 'Sônia', idade: 22}
    ]

    return (
        <>
        <h1>Lista de pessoas</h1>
        <Tabela dados = {Dados}/>
        </>
    )
}
export default  App;