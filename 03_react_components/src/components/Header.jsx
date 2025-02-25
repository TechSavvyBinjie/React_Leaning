import { Layout, Menu } from "antd";
import { HomeOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Navigation = () => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Layout>
        <Header style={{ background: "#f4c7e7" }}>
          {" "}
          {/* 粉色背景 */}
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ background: "#f4c7e7" }}
          >
            <Menu.Item
              key="1"
              icon={<HomeOutlined />}
              style={{ color: "#ff66b2" }}
            >
              {" "}
              {/* 粉色图标 */}
              首页
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<MailOutlined />}
              style={{ color: "#ff66b2" }}
            >
              邮件
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<SettingOutlined />}
              style={{ color: "#ff66b2" }}
            >
              设置
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </div>
  );
};

export default Navigation;
