import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Checkbox, Row, Col, Form, Input, InputNumber, Button, Select } from "antd";

import { fetchSymptoms, createBooking } from "../services/doctor/actions";

const { Option } = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const Patient = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { symptoms } = useSelector((state) => state.doctor);
    useEffect(() => {
        dispatch(fetchSymptoms());
    }, []);
    const onFinish = (values) => {
        dispatch(createBooking(values)).then(() =>
            history.push("/patient-status")
        );
    };

    return (
        <div className="mt-50">
            <section>
                <div className="container">
                    <Form
                        {...layout}
                        name="nest-messages"
                        onFinish={onFinish}
                        // validateMessages={validateMessages}
                    >
                        <Form.Item label="Name" style={{ marginBottom: 0 }}>
                            <Form.Item
                                name="first_name"
                                rules={[{ required: true }]}
                                style={{
                                    display: "inline-block",
                                    width: "calc(50% - 8px)",
                                }}
                            >
                                <Input placeholder="Enter First Name" />
                            </Form.Item>
                            <Form.Item
                                name="last_name"
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
                            name="email"
                            label="Email"
                            rules={[{ type: "email" }]}
                        >
                            <Input placeholder="Enter Email" />
                        </Form.Item>
                        <Form.Item name="gender" label="Gender">
                            <Select
                                placeholder="Select a option and change input text above"
                                // onChange={onGenderChange}
                                allowClear
                            >
                                <Option value="M">male</Option>
                                <Option value="F">female</Option>
                                <Option value="O">other</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="age"
                            label="Age"
                            rules={[{ type: "number", min: 0, max: 99 }]}
                        >
                            <InputNumber placeholder="Enter Age" />
                        </Form.Item>

                        <Form.Item name="symptoms" label="Symptoms">
                            <Checkbox.Group>
                                <Row>
                                    {symptoms.map((symptom) => (
                                        <Col key={symptom.id} span={8}>
                                            <Checkbox
                                                value={symptom.id}
                                                style={{ lineHeight: "32px" }}
                                            >
                                                {symptom.name}
                                            </Checkbox>
                                        </Col>
                                    ))}
                                </Row>
                            </Checkbox.Group>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </section>
        </div>
    );
};

export default Patient;
