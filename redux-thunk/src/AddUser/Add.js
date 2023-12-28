import React from 'react';
import { Modal, Form, Input, Button } from 'antd';
import { addUser, updateUser } from '../actions/userActions';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';


const Add = ({ AddUserModal, setAddUserModal, userToUpdate,onCancel }) => {
    const dispatch = useDispatch();
    const onFinish = (values) => {
        const userWithId = {
          ...values,
          userId: uuidv4(),
        };
    
        if (userToUpdate) {
          dispatch(updateUser({ ...userToUpdate, ...values }));
        } else {
          dispatch(addUser(userWithId));
        }
    
        onCancel();
      };
    const validateName = (_, value) => {
        if (!value) {
            return Promise.reject('Please enter a valid Name');
        }
        return Promise.resolve();
    };

    return (
        <div>
            <Modal
        title={userToUpdate ? 'Update User' : 'Add User'}
        visible={AddUserModal}
                onCancel={() => setAddUserModal(false)}
                footer={null}
            >
                <Form onFinish={onFinish} initialValues={userToUpdate} >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                validator: validateName,
                            },
                        ]}
                    >
                        <Input placeholder="Enter Name" />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                type: 'email',
                                message: 'Please enter a valid email address',
                            },
                        ]}
                    >
                        <Input placeholder="Enter email" />
                    </Form.Item>

                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                type: 'string',
                                message: 'Please enter a valid Phone Number',
                            },
                        ]}
                    >
                        <Input placeholder="Enter Phone" />
                    </Form.Item>

                    <Form.Item
                        label="City"
                        name="city"
                        rules={[
                            {
                                required: true,
                                type: 'string',
                                message: 'Please enter city',
                            },
                        ]}
                    >
                        <Input placeholder="Enter city" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default Add;
