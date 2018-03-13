#!/bin/bash
export LC_CTYPE=C
export LANG=C
#获取随机数
tr -cd '[:digit:]' < /dev/urandom | fold -w5 | head -n1
tr -cd '[:alnum:]' < /dev/urandom | fold -w12 | head -n1
#获取当前时间
date +%Y%m%d%H%M%S
#获取当前外网IP
curl ip.cn
