import React, { useState } from "react";
import { Button, Input, Popconfirm, Space, Table, Tag, Typography } from 'antd';
import { Col, Row } from 'antd';
import Add from "../AddUser/Add";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../actions/userActions";

const Users = () => {
    const dispatch = useDispatch();
    const [AddUserModal, setAddUserModal] = useState(false)
    const [userToUpdate, setUserToUpdate] = useState(null);
    const [filters, setFilters] = useState({});
    const data = useSelector((state) => state?.users?.users || []);
    console.log("🚀 ~ file: Users.js:42 ~ Users ~ data:", data)

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
        console.log("🚀 ~ file: Users.js:45 ~ handleDelete ~ id:", id)
    }

    const handleUpdate = (user) => {
        setAddUserModal(true);
        setUserToUpdate(user);
    };
    const handleTableChange = (pagination, filters, sorter) => {
        setFilters(filters);
    };

    const filteredData = data.filter((record) => {
        return Object.keys(filters).every((key) => {
            const filterValue = filters[key];
            if (!filterValue || filterValue.length === 0) {
                return true;
            }
    
            const recordValue = Array.isArray(record[key]) ? record[key].join(', ') : record[key];
            
            if (Array.isArray(filterValue)) {
                return filterValue.includes(recordValue);
            } else {
                return String(recordValue).includes(String(filterValue));
            }
        });
    });
    
    
    console.log("🚀 ~ file: Users.js:40 ~ filteredData ~ filteredData:", filteredData)
    
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: '1',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: '2',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: '3',
        },
        {
            title: 'City',
            key: '4',
            dataIndex: 'city',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: (_, record, index) =>
                data?.length >= 1 ? (
                    <Space size="middle">
                        <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.userId)}>
                            <a>Delete</a>
                            {console.log(record.userId, 'record')}
                        </Popconfirm>

                        <a onClick={() => handleUpdate(record)} >
                            Update
                        </a>
                    </Space>
                ) : null,
        },
    ];
    return (
        <div className="container" style={{ marginTop: '20px' }}>
            <div>
                {AddUserModal &&
                    <Add
                        AddUserModal={AddUserModal}
                        setAddUserModal={setAddUserModal}
                        userToUpdate={userToUpdate}
                        onCancel={() => setAddUserModal(false)}
                    />
                }
            </div>
            <Row gutter={[16, 16]}>
                <Col>
                    <Button onClick={() => setAddUserModal(true)}>Add</Button>
                </Col>
                <Col>
                    <Input.Search
                        placeholder="Search by Name"
                        onSearch={(value) => setFilters({ name: value })}
                        style={{ width: 200 }}
                    />
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Table
                        columns={columns}
                        dataSource={filteredData}
                        onChange={handleTableChange}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default Users;