import { useAuth } from '@/context/app-context';
import { Button, Form, Input } from 'antd';

export const LoginForm = () => {
    const { login } = useAuth();
    const handleSubmit = (values: { username: string; password: string }) => {
        login(values);
    };
    return (
        <Form onFinish={handleSubmit}>
            <Form.Item label="用户名" name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
                <Input />
            </Form.Item>
            <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码!' }]}>
                <Input.Password />
            </Form.Item>
            <Button type="primary" htmlType="submit">
                登录
            </Button>
        </Form>
    );
};
