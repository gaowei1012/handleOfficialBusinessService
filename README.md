### CRM 系统

### 环境要求
```
    1、 Linux & Mac & Window 
    
    2、Mysql 版本5.7

    3、Nodejs 环境不低于 v8.0.0及以上版本

```

### 概述

- 此项目基于 `koajs & mysql` 搭建，用于app商城商品管理

### 数据库

 1、创建数据库
```
create database gourmet;
```


## 数据表设计
- askleave

```
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| id        | int(11)      | NO   | PRI | NULL    | auto_increment |
| username  | varchar(100) | NO   |     | NULL    |                |
| date      | varchar(100) | NO   |     | NULL    |                |
| address   | varchar(100) | NO   |     | NULL    |                |
| reason    | varchar(100) | NO   |     | NULL    |                |
| remarks   | varchar(255) | NO   |     | NULL    |                |
| create_at | varchar(100) | NO   |     | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+
```

- users 用户表

```
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| id        | int(11)      | NO   | PRI | NULL    | auto_increment |
| username  | varchar(100) | NO   |     | NULL    |                |
| password  | varchar(100) | NO   |     | NULL    |                |
| create_at | varchar(100) | NO   |     | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+
```

- resign 

```
+------------+--------------+------+-----+---------+----------------+
| Field      | Type         | Null | Key | Default | Extra          |
+------------+--------------+------+-----+---------+----------------+
| id         | int(11)      | NO   | PRI | NULL    | auto_increment |
| username   | varchar(100) | NO   |     | NULL    |                |
| start_time | varchar(100) | NO   |     | NULL    |                |
| end_time   | varchar(100) | NO   |     | NULL    |                |
| reason     | varchar(100) | NO   |     | NULL    |                |
| remarks    | varchar(255) | NO   |     | NULL    |                |
| create_at  | varchar(100) | NO   |     | NULL    |                |
+------------+--------------+------+-----+---------+----------------+
```

- overtime
```
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| id        | int(11)      | NO   | PRI | NULL    | auto_increment |
| username  | varchar(100) | NO   |     | NULL    |                |
| date      | varchar(100) | NO   |     | NULL    |                |
| address   | varchar(100) | NO   |     | NULL    |                |
| reason    | varchar(100) | NO   |     | NULL    |                |
| remarks   | varchar(255) | NO   |     | NULL    |                |
| create_at | varchar(100) | NO   |     | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+
```

- clock
```
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| id        | int(11)      | NO   | PRI | NULL    | auto_increment |
| username  | varchar(100) | NO   |     | NULL    |                |
| address   | varchar(100) | NO   |     | NULL    |                |
| create_at | varchar(100) | NO   |     | NULL    |                |
| update_at | varchar(100) | NO   |     | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+
```

- message

```
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| id        | int(11)      | NO   | PRI | NULL    | auto_increment |
| title     | varchar(100) | NO   |     | NULL    |                |
| content   | varchar(100) | NO   |     | NULL    |                |
| status    | varchar(100) | NO   |     | NULL    |                |
| create_at | varchar(100) | NO   |     | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+
```
