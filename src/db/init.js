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

const askleave = `
    create table if not exists askleave(
        id INT NOT NULL AUTO_INCREMENT,
        username VARCHAR(100) NOT NULL COMMENT '用户名',
        date VARCHAR(100) NOT NULL COMMENT '起始时间',
        address VARCHAR(100) NOT NULL COMMENT '目的地',
        reason VARCHAR(100) NOT NULL COMMENT '事项',
        remarks VARCHAR(255) NOT NULL COMMENT '备注',
        create_at VARCHAR(100) NOT NULL COMMENT '创建时间',
        PRIMARY KEY(id)
    ) character set = utf8;
`

const buiness = `
    create table if not exists buiness(
        id INT NOT NULL AUTO_INCREMENT,
        username VARCHAR(100) NOT NULL COMMENT '用户名',
        date VARCHAR(100) NOT NULL COMMENT '起始时间',
        address VARCHAR(100) NOT NULL COMMENT '目的地',
        reason VARCHAR(100) NOT NULL COMMENT '事项',
        remarks VARCHAR(255) NOT NULL COMMENT '备注',
        create_at VARCHAR(100) NOT NULL COMMENT '创建时间',
        PRIMARY KEY(id)
    ) character set = utf8;
`

const overtime = `
    create table if not exists overtime(
        id INT NOT NULL AUTO_INCREMENT,
        username VARCHAR(100) NOT NULL COMMENT '用户名',
        date VARCHAR(100) NOT NULL COMMENT '起始时间',
        address VARCHAR(100) NOT NULL COMMENT '目的地',
        reason VARCHAR(100) NOT NULL COMMENT '事项',
        remarks VARCHAR(255) NOT NULL COMMENT '备注',
        create_at VARCHAR(100) NOT NULL COMMENT '创建时间',
        PRIMARY KEY(id)
    ) character set = utf8;
`

const message = `
    create table if not exists message(
        id INT NOT NULL AUTO_INCREMENT,
        title VARCHAR(100) NOT NULL COMMENT '用户名',
        content VARCHAR(100) NOT NULL COMMENT '起始时间',
        status VARCHAR(100) NOT NULL COMMENT '状态',
        create_at VARCHAR(100) NOT NULL COMMENT '创建时间',
        PRIMARY KEY(id)
    ) character set = utf8;
`

module.exports = {
    users,
    clock,
    askleave,
    buiness,
    overtime,
    message
}
