import React, { Component } from "react";
import { Card, Table, Tag, Tooltip, message, Button } from "antd";
import { EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import moment from "moment";
import AvatarStatus from "components/shared-components/AvatarStatus";
import reqwest from "reqwest";
import { Link } from "react-router-dom";

const fakeDataUrl = "https://jsonplaceholder.typicode.com/users";

export class UserList extends Component {
  state = {
    users: [],
    loading: true,
    userProfileVisible: false,
    selectedUser: null,
  };

  componentDidMount() {
    this.fetchData((res) => {
      this.setState({
        users: res,
        loading: false,
      });
    });
  }

  fetchData = (callback) => {
    reqwest({
      url: fakeDataUrl,
      type: "json",
      method: "get",
      contentType: "application/json",
      success: (res) => {
        const editedData = [];
        res.map(
          (item, index) =>
            (editedData[index] = {
              ...item,
              status: "active",
              company: item.company.name,
              lastOnline: Math.floor(Math.random() * 10000 * 10000 * 40),
            })
        );
        callback(editedData);
      },
    });
  };

  deleteUser = (userId) => {
    this.setState({
      users: this.state.users.filter((item) => item.id !== userId),
    });
    message.success({ content: `Deleted user ${userId}`, duration: 2 });
  };

  render() {
    const { users, loading } = this.state;
    const tableColumns = [
      {
        title: "User",
        dataIndex: "name",
        render: (_, record) => (
          <div className="d-flex">
            <AvatarStatus
              src={record.img}
              name={record.name}
              subTitle={record.email}
            />
          </div>
        ),
        sorter: {
          compare: (a, b) => {
            a = a.name.toLowerCase();
            b = b.name.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: "Company",
        dataIndex: "company",
        sorter: (a, b) => {
          if (a.company.toLowerCase() < b.company.toLowerCase()) {
            return -1;
          }
          if (a.company.toLowerCase() > b.company.toLowerCase()) {
            return 1;
          }
          return 0;
        },
      },
      {
        title: "Last online",
        dataIndex: "lastOnline",
        render: (date) => (
          <span>{moment.unix(date).format("MM/DD/YYYY")} </span>
        ),
        sorter: (a, b) =>
          moment(a.lastOnline).unix() - moment(b.lastOnline).unix(),
      },
      {
        title: "Status",
        dataIndex: "status",
        render: (status) => (
          <Tag
            className="text-capitalize"
            color={status === "active" ? "cyan" : "red"}
          >
            {status}
          </Tag>
        ),
        sorter: {
          compare: (a, b) => a.status.length - b.status.length,
        },
      },
      {
        title: "",
        dataIndex: "actions",
        render: (_, elm) => (
          <div className="text-right">
            <Link to={`${elm.id}`}>
              <Tooltip title="View">
                <Button
                  type="primary"
                  className="mr-2"
                  icon={<EyeOutlined />}
                  size="small"
                />
              </Tooltip>
            </Link>
            <Tooltip title="Delete">
              <Button
                danger
                icon={<DeleteOutlined />}
                onClick={() => {
                  this.deleteUser(elm.id);
                }}
                size="small"
              />
            </Tooltip>
          </div>
        ),
      },
    ];

    return (
      <Card bodyStyle={{ padding: "0px" }}>
        {!loading && (
          <Table columns={tableColumns} dataSource={users} rowKey="id" />
        )}
      </Card>
    );
  }
}

export default UserList;
