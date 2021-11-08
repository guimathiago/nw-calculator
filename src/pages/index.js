import * as React from "react"
import { Container, Row, Col } from "react-bootstrap"
import * as style from '../../static/css/Main.module.css'
import ResourceResult from "../components/resource_result"

const IndexPage = () => {

  const [resultsData, setResultsData] = React.useState([]);

  const calculateResource = (infusedLeather) => {

    // Quantidade de couros infusos e Calculada a quantidade de pele de ferro necessaria
    const quantityIronHide = infusedLeather * 8

    // Calculada a quantidade de couro reforçado e pele grossa
    const quantityLayeredLeather = infusedLeather * 2
    const quantityThickHide = quantityLayeredLeather * 6

    // Numero de couros rusticos calculado
    const quantityRuggedLeather = quantityLayeredLeather * 2

    // Numero de couro grosseiro calculado
    const quantityCoarseLeather = quantityRuggedLeather * 4

    // Numero de couros cru calculado
    const quantityRawhide = quantityCoarseLeather * 4

    // Objeto com os valores definidos
    const data = [
      {
        name: 'Couro Cru',
        quantity: quantityRawhide,
        image: '../../../images/cru.png'
      },
      {
        name: 'Couro Grosseiro',
        quantity: quantityCoarseLeather,
        image: '../../../images/grosseiro.png'
      },
      {
        name: 'Couro Rústico',
        quantity: quantityRuggedLeather,
        image: '../../../images/rustico.png'
      },
      {
        name: 'Couro Reforçado',
        quantity: quantityLayeredLeather,
        image: '../../../images/reforcado.png'
      },
      {
        name: 'Pele Grossa',
        quantity: quantityThickHide,
        image: '../../../images/pele_grossa.png'
      },
      {
        name: 'Pele de Ferro',
        quantity: quantityIronHide,
        image: '../../../images/pele_de_ferro.png'
      }
    ]

    // Armazenando o objeto em um state
    setResultsData(data)

  }

  return (
    <main>
      <Container>
        <Row className="pt-4 pb-4">
          <Col lg={4}>
            <img src={'../../images/nw-logo.png'} alt="New World Logo" className="img-fluid" />
          </Col>
        </Row>

        <div className={style.box_item}>
          <Row className="w-100 align-items-center">
            <Col lg={2} className="text-center">
              <div className={style.box_icon}>
                <img src="../../../images/infused_leather.png" alt="Couro infuso New World" className="img-fluid" />
              </div>
            </Col>
            <Col lg={10}>
              <div className={style.box_info}>
                <h3>Quantidade de Couro Infuso necessária:</h3>
                <input type="number" onChange={e => calculateResource(e.target.value)} />
              </div>
            </Col>
          </Row>
        </div>

        <hr className="mt-4 text-white" />

        <Row>
          {resultsData.map(item => (
            <ResourceResult data={item} />
          ))}
        </Row>

      </Container>
    </main>
  )
}

export default IndexPage
