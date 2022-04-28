import { Container } from './styles';

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de aplicação com ReactJS</td>
            <td className='deposit'>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel de apartamento em Blumenau, SC</td>
            <td className='withdraw'>-R$3.000</td>
            <td>Casa</td>
            <td>22/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
