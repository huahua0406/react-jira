import { useAuth } from '@/context/app-context';
import { Button, Form, Input } from 'antd';

export const RegisterForm = () => {
    const { register } = useAuth();
    const handleSubmit = (values: { username: string; password: string }) => {
        register(values);
    };
    return (
        <Form onFinish={handleSubmit}>
            <Form.Item label="用户名" name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
                <Input />
            </Form.Item>

            <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码!' }]}>
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    注册
                </Button>
            </Form.Item>
        </Form>
    );
};
