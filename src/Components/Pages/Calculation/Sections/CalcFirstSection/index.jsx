import React, {useRef, useState} from 'react';
import Container from "../../../../Common/Container";
import {Radio, Select} from 'antd';
import {Checkbox, Col, Row} from 'antd';
import {CalcFirstWrapper} from "./CalcFirstSection.style";

const itemList = [
  {
    value: 'GEFEST 3200-08',
    img: 'images/plita1.webp',
    types: [
      {
        name: "Lorem Ipsum is simply dummy text ",
        price: "4 500 000"
      },
      {
        name: "Lorem Ipsum is simply dummy text ",
        price: "1 500 000"
      },
      {
        name: "Lorem Ipsum is simply dummy text ",
        price: "2 000 000"
      },
    ]
  },
  {
    value: 'DARINA B GM441 005 Vt',
    img: 'images/plita2.webp',
    types: [
      {
        name: "Lorem Ipsum is simply dummy text ",
        price: "4 500 000"
      },
      {
        name: "Lorem Ipsum is simply dummy text ",
        price: "2 500 000"
      },
      {
        name: "Lorem Ipsum is simply dummy text ",
        price: "2 000 000"
      },
    ]
  },
  {
    value: 'Gorenje K 53',
    img: 'images/plita3.webp',
    types: [
      {
        name: "Lorem Ipsum is simply dummy text ",
        price: "2 500 000"
      },
      {
        name: "Lorem Ipsum is simply dummy text ",
        price: "1 500 000"
      },
      {
        name: "Lorem Ipsum is simply dummy text ",
        price: "2 000 000"
      },
    ]
  },
  {
    value: 'De Luxe 5040,38 g',
    img: 'images/plita4.webp',
    types: [
      {
        name: "Lorem Ipsum is simply dummy text ",
        price: "3 500 000"
      },
      {
        name: "Lorem Ipsum is simply dummy text ",
        price: "1 500 000"
      },
      {
        name: "Lorem Ipsum is simply dummy text ",
        price: "3 000 000"
      },
    ]
  },
  {
    value: 'Flama FG2426-B',
    img: 'images/plita5.webp',
    types: [
      {
        name: "Lorem Ipsum is simply dummy text ",
        price: "1 500 000"
      },
      {
        name: "Lorem Ipsum is simply dummy text ",
        price: "1 500 000"
      },
      {
        name: "Lorem Ipsum is simply dummy text ",
        price: "2 500 000"
      },
    ]
  },
  {
    value: 'Hansa FCGW51001',
    img: 'images/plita6.webp',
    types: [
      {
        name: "Lorem Ipsum is simply dummy text ",
        price: "4 500 000"
      },
      {
        name: "Lorem Ipsum is simply dummy text ",
        price: "3 500 000"
      },
      {
        name: "Lorem Ipsum is simply dummy text ",
        price: "1 000 000"
      },
    ]
  },
  {
    value: 'Bosch HGD645150',
    img: 'images/plita7.webp',
    types: [
      {
        name: "Lorem Ipsum is simply dummy text ",
        price: "5 500 000"
      },
      {
        name: "Lorem Ipsum is simply dummy text ",
        price: "4 500 000"
      },
      {
        name: "Lorem Ipsum is simply dummy text ",
        price: "4 000 000"
      },
    ]
  },
]

const selectData = [
  {
    value: 'GEFEST 3200-08',
    label: 'GEFEST 3200-08',
  },
  {
    value: 'DARINA B GM441 005 Vt',
    label: 'DARINA B GM441 005 Vt',
  },
  {
    value: 'Gorenje K 53',
    label: 'Gorenje K 53',
  },
  {
    value: 'De Luxe 5040,38 g',
    label: 'De Luxe 5040,38 g',
  },
  {
    value: 'Flama FG2426-B',
    label: 'Flama FG2426-B',
  },
  {
    value: 'Hansa FCGW51001',
    label: 'Hansa FCGW51001',
  },
  {
    value: 'Bosch HGD645150',
    label: 'Bosch HGD645150',
  },
]

const CalcFirstSection = () => {
  const [activeSelect, setActiveSelect] = useState(selectData[0].value)
  const [position, setPosition] = useState(0)


  const onChangeSelect = (value) => {
    setPosition(0)
    setActiveSelect(value)
  };

  const onSearch = (value) => {
    // console.log('search:', value);
  };

  const onChangeCheckbox = (checkedValues) => {
    // console.log('checked = ', checkedValues);
  };

  const model = itemList.find((item) => {
    return item.value === activeSelect
  })

  return (
    <CalcFirstWrapper>
      <Container>
        <h2>Calculate the price</h2>
        <div className="wrapper">
          <div className="left">
            <Select
              showSearch
              placeholder="Model"
              style={{width: "90%", marginBottom: 30}}
              onChange={onChangeSelect}
              onSearch={onSearch}
              filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
              }
              options={selectData}
              value={activeSelect}
            />
            <div className="res">
              <h3 className="name">{model.value}</h3>
              <img src={model.img} alt=""/>
            </div>
            <div className="price">
              <h4>Price: <span>{model.types[position].price} so'm</span></h4>
            </div>
          </div>

          <div className="right">
            <Checkbox.Group
              className="checkboxGroup"
              style={{
                width: '100%',
              }}
              onChange={onChangeCheckbox}
            >
              <Row>
                {model.types.map((item, index) => (
                  <Col key={index} span={24} className="col">
                    <Radio
                      name="radio"
                      className="checkbox"
                      checked={index === position}
                      onChange={()=>setPosition(index)}>
                      <p>{item.name}</p>
                      <span>Price: {item.price} so'm</span>
                    </Radio>
                  </Col>
                ))}
              </Row>
            </Checkbox.Group>
          </div>
        </div>


      </Container>
    </CalcFirstWrapper>
  );
};

export default CalcFirstSection;