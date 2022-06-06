-- 主键自增id从1开始
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
-- 中国大陆地区时间需要加8个小时
SET time_zone = "+08:00";

--
-- Database: `monitor`
--

-- 清空数据库

DROP TABLE IF EXISTS `tb_script_log`;
DROP TABLE IF EXISTS `tb_script`;
DROP TABLE IF EXISTS `tb_debug_log`;
DROP TABLE IF EXISTS `tb_debug`;
DROP TABLE IF EXISTS `tb_project`;



-- 表的结构 `tb_project`
CREATE TABLE IF NOT EXISTS `tb_project` (
  `id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '项目id',
  `name` VARCHAR(30) NOT NULL COMMENT '项目名称',
  `description` VARCHAR(200) DEFAULT NULL COMMENT '项目描述',
  `createTime` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updateTime` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',

  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='项目表';

-- 表的数据 `tb_project`
INSERT INTO `tb_project` (`id`, `name`, `description`) VALUES
(1, '错误监控系统', '错误监控系统'),
(2, '博客系统', '博客系统');



-- 表的结构 `tb_script`
CREATE TABLE IF NOT EXISTS `tb_script` (
  `id` VARCHAR(32) NOT NULL COMMENT '事件唯一id, 由md5生成',
  `projectId` INT(11) NOT NULL COMMENT '项目id',
  `level` CHAR(1) NOT NULL DEFAULT '3' COMMENT '错误等级:1-严重,2-中等,3-一般,默认3',
  `status` CHAR(1) NOT NULL DEFAULT '2' COMMENT '错误状态:1-已解决,2-待解决,3-解决中,4-不予解决,5-暂不解决,默认2',
  `remark` VARCHAR(200) DEFAULT NULL COMMENT '备注',
  `errorMeta` TEXT DEFAULT NULL COMMENT 'JSON格式的错误元信息: 错误消息，行列号,文件名',
  `createTime` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updateTime` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',

  PRIMARY KEY (`id`),
  FOREIGN KEY (`projectId`) REFERENCES `tb_project`(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='脚本错误列表';

-- 表的结构 `tb_script_log`;
CREATE TABLE IF NOT EXISTS `tb_script_log` (
  `id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '记录id',
  `eventId` VARCHAR(32) NOT NULL COMMENT '事件唯一id, 由md5生成',
  `projectId` INT(11) NOT NULL COMMENT '项目id',
  `version` VARCHAR(20) NOT NULL COMMENT '被监控系统的版本',
  `userAgent` VARCHAR(300) DEFAULT NULL COMMENT '错误所在的环境信息,JSON格式,需包含os,ua,device字段',
  `extras` TEXT DEFAULT NULL COMMENT '错误发生时附带的一些额外信息',
  `createTime` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updateTime` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',

  PRIMARY KEY (`id`),
  FOREIGN KEY (`eventId`) REFERENCES `tb_script`(`id`),
  FOREIGN KEY (`projectId`) REFERENCES `tb_project`(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='脚本错误日志列表';



-- 表的结构 `tb_debug`
CREATE TABLE IF NOT EXISTS `tb_debug` (
  `id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '调试id',
  `debugId` VARCHAR(40) NOT NULL COMMENT '调试名称,由英文,数字,下划线组成',
  `projectId` INT(11) NOT NULL COMMENT '项目id',
  `enabled` CHAR(1) NOT NULL DEFAULT '0' COMMENT '是否启用: 1-启用, 0-禁用, 默认0',
  `description` VARCHAR(200) DEFAULT null COMMENT '调试内容描述',
  `createTime` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updateTime` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',

  PRIMARY KEY (`id`),
  UNIQUE KEY (`debugId`),
  FOREIGN KEY (`projectId`) REFERENCES `tb_project`(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='跟踪列表';

-- 表的结构 `tb_debug_log`
CREATE TABLE IF NOT EXISTS `tb_debug_log` (
  `id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '日志id',
  `projectId` INT(11) NOT NULL COMMENT '项目id',
  `debugId` INT(11) NOT NULL COMMENT '调试名称,由英文,数字,下划线组成',
  `content` TEXT NOT NULL COMMENT '日志内容',
  `userAgent` VARCHAR(300) DEFAULT NULL COMMENT '调试时所在的环境信息,JSON格式,需包含os,ua,device字段',
  `createTime` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updateTime` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  
  PRIMARY KEY (`id`),
  FOREIGN KEY (`projectId`) REFERENCES `tb_project`(`id`),
  FOREIGN KEY (`debugId`) REFERENCES `tb_debug`(`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='调试日志表';