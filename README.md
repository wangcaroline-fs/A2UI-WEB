## 项目介绍

实现一个A2UI-playground，用户可通过应用生成UI界面

## 项目架构

项目使用monorepo组织代码
包含以下模块：

packages

- a2ui-core：包含UI组件库和渲染引擎
  - parser，用来解析a2ui协议
  - vNode，用来映射管理a2ui协议生成的组件
  - treeBuilder，用来根据a2ui协议生成调用a2ui渲染器，并生成最终的渲染树
- a2ui-react：包含React组件库，用于在React项目中使用A2UI组件

package
主要职责：维护a2ui相关的sdk，并支持生产对应的npm包

web

- a2ui-playground：包含A2UI-playground的web应用

主要职责及详细功能

- 可以通过对话的方式让AI Agent 生成对应的UI界面
- 可以预览对应的AI界面
- 可以支持多轮对话生成的UI进行调整
- 可以预览a2ui-react定义的基础a2ui组件
- 可以支持协议调试

server

- a2ui-playground-server：包含A2UI-playground的server端应用

  1.基于openAI实现a2ui agent 2.实现a2ui server，支持a2ui协议的生成及缓存

## 基础依赖

所有的项目需要支持typescript

web: 使用vite构建playground

server:

- 使用koa实现服务接口
- agent使用openAI建连
- 使用ts-node运行
