const users = `
    create table if not exists users(
        id INT NOT NULL AUTO_INCREMENT,
        username VARCHAR(100) NOT NULL COMMENT '用户名',
        password VARCHAR(100) NOT NULL COMMENT '用户密码',
        create_at VARCHAR(100) NOT NULL COMMENT '用户创建时间',
        PRIMARY KEY(id)
    ) character set = utf8;
`

const order = `
    create table if not exists order(
        id INT NOT NULL AUTO_INCREMENT,
        username VARCHAR(100) NOT NULL COMMENT '用户名',
        password VARCHAR(100) NOT NULL COMMENT '用户密码',
        mobile VARCHAR(100) NOT NULL COMMENT '手机号',
        avatar VARCHAR(100) NOT NULL COMMENT '用户头像',
        create_at VARCHAR(100) NOT NULL COMMENT '用户创建时间',
        PRIMARY KEY(id)
    ) character set = utf8;   
`

const clock = `
    create table if not exists clock(
        id INT NOT NULL AUTO_INCREMENT,
        username VARCHAR(100) NOT NULL COMMENT '用户名',
        address VARCHAR(100) NOT NULL COMMENT '定位地址',
        create_at VARCHAR(100) NOT NULL COMMENT '用户上班时间',
        update_at VARCHAR(100) NOT NULL COMMENT '用户下班时间',
        PRIMARY KEY(id)
    ) character set = utf8;
`

module.exports = {
    users,
    clock,
}
