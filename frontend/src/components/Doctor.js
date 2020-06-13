import React, { Component } from "react";
import { Checkbox, Row, Col, Form, Input, InputNumber, Button } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

class Doctor extends Component {
  render() {
    return (
      <div className="mt-50">
        <section>
          <div className="container">
            <Form
              {...layout}
              name="nest-messages"
              // onFinish={onFinish}
              // validateMessages={validateMessages}
            >
              <Form.Item label="Name" style={{ marginBottom: 0 }}>
                <Form.Item
                  name="firstName"
                  rules={[{ required: true }]}
                  style={{ display: "inline-block", width: "calc(50% - 8px)" }}
                >
                  <Input placeholder="Enter First Name" />
                </Form.Item>
                <Form.Item
                  name="lastName"
                  rules={[{ required: true }]}
                  style={{
                    display: "inline-block",
                    width: "calc(50% - 8px)",
                    margin: "0 8px",
                  }}
                >
                  <Input placeholder="Enter Last Name" />
                </Form.Item>
              </Form.Item>
              <Form.Item
                name={["user", "email"]}
                label="Email"
                rules={[{ type: "email" }]}
              >
                <Input placeholder="Enter Email" />
              </Form.Item>
              <Form.Item
                name={["user", "age"]}
                label="Age"
                rules={[{ type: "number", min: 0, max: 99 }]}
              >
                <InputNumber placeholder="Enter Age" />
              </Form.Item>

              <Form.Item name="checkbox-group" label="Checkbox.Group">
                <Checkbox.Group>
                  <Row>
                    <Col span={8}>
                      <Checkbox value="A" style={{ lineHeight: "32px" }}>
                        A
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="B" style={{ lineHeight: "32px" }}>
                        B
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="C" style={{ lineHeight: "32px" }}>
                        C
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="D" style={{ lineHeight: "32px" }}>
                        D
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="E" style={{ lineHeight: "32px" }}>
                        E
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="F" style={{ lineHeight: "32px" }}>
                        F
                      </Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Form.Item>

              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={(event) => (window.location.href = "/PatientStatus")}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </section>
      </div>
    );
  }
}

export default Doctor;
