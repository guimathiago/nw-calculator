import * as React from "react"
import * as style from './style.module.css'
import { Col } from "react-bootstrap"

const ResourceResult = ({ data }) => {


  return (

    <Col lg={3} md={6}>
      <div className={style.box_item_result}>
        <div className={style.box_icon}>
          <img src={`${data.image}`} alt="" className="img-fluid" />
        </div>
        <div className={style.box_info}>
          <h3>{data.name}:</h3>
          <h5>x {data.quantity}</h5>
        </div>
      </div>
    </Col>
  )
}

export default ResourceResult
