const Dados = [
    {nome: 'Caio', idade: 18},
    {nome: 'Melissa', idade: 18},
    {nome: 'Sônia', idade: 22}
]

const Tabela = ({dados}) => {
    return(
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Idade</th>
                </tr>
            </thead>
            <tbody>
                {dados.map((item) => (
                    <tr key={item.nome}>
                        <td>{item.nome} </td>
                        <td>{item.idade} </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default Tabela