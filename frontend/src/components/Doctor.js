<<<<<<< HEAD
import React, { Component } from "react";
import { Checkbox, Row, Col, Form, Input, InputNumber, Button } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
=======
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Row, Col } from "antd";
>>>>>>> 881fbdbcd3621f141bec3c5ed05bd1a5065f3757

import { logout } from "../services/auth/actions";
import { fetchMe } from "../services/user/actions";

const Doctor = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { bookingevent_set } = useSelector((state) => state.user.me);

    useEffect(() => {
        dispatch(fetchMe());
    }, []);

    const handleLogout = () => {
        dispatch(logout());
        history.push("/");
    };
    
    return (
<<<<<<< HEAD
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
=======
        <div className="mt-50">
            <h1>
                <Button type="primary" onClick={handleLogout}>
                    Logout
                </Button>
            </h1>
            <Row>
                {bookingevent_set.map((event) => (
                    <Col key={event.id} xs={2} sm={4} md={6} lg={8} xl={10}>
                        {event.request}
                    </Col>
                ))}
            </Row>
        </div>
>>>>>>> 881fbdbcd3621f141bec3c5ed05bd1a5065f3757
    );
};

export default Doctor;
