module.exports = (req, res, next) => {
    if (req.method === "POST" && req.path === "/login") {
        if (req.body.username === "123" && req.body.password === "123") {
            return res.status(200).json({
                user: {
                    token: "123",
                },
            });
        } else {
            return res.status(400).json({ message: "用户名或者密码错误" });
        }
    }
    if (req.method === "POST" && req.path === "/register") {
        if (req.body.username === "1234" && req.body.password === "123") {
            return res.status(200).json({
                user: {
                    token: "123",
                },
            });
        } else {
            return res.status(400).json({ message: "注册失败" });
        }
    }
    next();
};