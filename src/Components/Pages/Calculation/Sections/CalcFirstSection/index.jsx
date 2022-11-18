import React, {useRef} from 'react';
import Container from "../../../../Common/Container";
import { Select } from 'antd';
import { Checkbox, Col, Row } from 'antd';
import {CalcFirstWrapper} from "./CalcFirstSection.style";

const CalcFirstSection = () => {
  const selectRef=useRef(null)

  console.log(selectRef)

  const onChangeSelect = (e) => {
    console.log(e);
    const val=e;
  };

  const onSearch = (value) => {
    console.log('search:', value);
  };

  const onChangeCheckbox = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };

  return (
    <CalcFirstWrapper>
      <Container>
        <h2>Calculate the price</h2>
        <div className="wrapper">
          <div className="left">
            <Select
              ref={selectRef}
              showSearch
              placeholder="Model"
              style={{ width: "90%", marginBottom: 30 }}
              onChange={onChangeSelect}
              onSearch={onSearch}
              filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
              }
              options={[
                {
                  value: 'jack',
                  label: 'Jack',
                },
                {
                  value: 'lucy',
                  label: 'Lucy',
                },
                {
                  value: 'Yiminghe',
                  label: 'yiminghe',
                },
              ]}
            />
            <div className="res">
              <img src="images/gas.jpg" alt=""/>
            </div>
            <div className="price">
              <h4>Price: <span>300$</span></h4>
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
                <Col span={24} className="col">
                  <Checkbox className="checkbox" value="A">A</Checkbox>
                </Col>
                <Col span={24} className="col">
                  <Checkbox className="checkbox" value="B">B</Checkbox>
                </Col>
                <Col span={24} className="col">
                  <Checkbox className="checkbox" value="C">C</Checkbox>
                </Col>
                <Col span={24} className="col">
                  <Checkbox className="checkbox" value="D">D</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </div>
        </div>


      </Container>
    </CalcFirstWrapper>
  );
};

export default CalcFirstSection;