import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, DatePicker } from "antd";
import moment from "moment";

import CenteredLayout from "../containers/CenteredLayout";
import { register } from "../services/user/actions";

const validateMessages = {
    required: "${label} is required!",
    types: {
        email: "${label} is not validate email!",
        number: "${label} is not a validate number!",
    },
    number: {
        range: "${label} must be between ${min} and ${max}",
    },
};

const RegistrationPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const onFinish = (values) => {
        const {
            name,
            email,
            password,
            registration_number,
            profession,
            registration_expiry_date,
        } = values.user;
        dispatch(register({
            name,
            email,
            password,
            registration_number,
            profession,
            registration_expiry_date,
        })).then(() => history.push("/login"));
    };

    return (
        <CenteredLayout>
            <Form
                layout="vertical"
                name="nest-messages"
                onFinish={onFinish}
                validateMessages={validateMessages}
            >
                <Form.Item
                    name={["user", "name"]}
                    label="Name"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={["user", "email"]}
                    label="Email"
                    rules={[{ type: "email" }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name={["user", "password"]} label="Password">
                    <Input type="password" />
                </Form.Item>
                <Form.Item name={["user", "profession"]} label="Profession">
                    <Input />
                </Form.Item>
                <Form.Item
                    name={["user", "registration_number"]}
                    label="Registration Number"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={["user", "registration_expiry_date"]}
                    label="Expiry date"
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </CenteredLayout>
    );
};

export default RegistrationPage;
