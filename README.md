# [尚硅谷-Vue.js从入门到精通(B站)-学习记录](https://www.bilibili.com/video/BV1Zy4y1K7SH/?spm_id_from=333.999.0.0&vd_source=8eab7402e9d77f02c15aaa5314543110)

## 目录说明

* 00_html 文件夹,为非脚手架环境代码
* xx_src_xxx 文件夹,为脚手架环境下的 src 文件夹,修改为 src 即可使用

##  2. ref指令

    1.id 的替代
    2.在标签上,获得的是 dom 元素;在组件上,获得的是 VueComponent 对象实例.
    3.使用方式:
        标记: <h1 ref="xxx" ></h1>
        获取: this.#refs.xxx

## 3. props : 让组件接收外部传入的数据

    1.传递数据
        <Demo name="xxxx"/>
        注: number 类型, 用 ' :age="18" '
    2.接收数据
        // 简单接收
        props:['name','address','amount'] 
        // 限制类型
        props:{
            name: String
        }
        // 限制类型 和 必要性
        props:{
            name: {
                type: String,
                required: true  // 必传
            }
            amount: {
                type: String,
                default: 0 // 默认值, 和 required 不同时出现
            }
        }
        注: props 只读

## 4. mixin : 把多个组件共用的配置提前到一个混合对象

    定义:
        {
            data(){...},
            methods:{...},
            ...
        }
    使用:
        全局:Vue.mixin(mixin)
        局部:
          import {mixin} from '../mixin.js';
            export default {
                mixins: [mixin],
            }

## 5. plugin : 增强 vue

    本质: 包含 install 方法的一个对象, install(vue,插件使用者传染地的数据)
    定义:
        obj.install = function (Vue, options){
           
            Vue.filter(...) // 全局过滤器
            
            Vue.directive(...)  // 定义全局指令
            
            Vue.mixin(...)  // 定义混入
            
            Vue.prototype.hello = xxx   // 给 vue 原型上添加方法
        }
    使用: Vue.use(plugin)

## 6. scoped : 让样式局部生效,防止冲突

    <style scoped></style>

## 7. TODOLIST 案例

    1.组件化编码流程:
        1).拆分静态组件: 按照功能点拆分, 命名不要与 html 元素冲突
        2).实现动态组件: 通用数据放在父组件中(状态提升), 非通用数据放在组件自身中
        3).实现交互: 从绑定事件监听开始

    2.props 适用于:
        1)父组件 ==> 子组件 通信
        2)子组件 ==> 父组件 通信 (父给子一个函数)

    3.使用 v-modal 时, 不能绑定 props
    
    4.props 是对象类型时, 修改对象中的属性, vue 不会报错, 不建议修改

## 9. 自定义事件 : 组件间通信方式, 适用于 子 ===> 父

    1.事件回调在 父组件 中
    2.绑定方式: 
            方式一: 父组件 中使用 v-on 或 @
            <Student v-on:getStudentName="getStudentName" @event1="hendleEvent1"></Student>

            方式二: 父组件 中使用 $ref.xxx.$on
            <Student ref="student"></Student>

            注: 若只触发一次,使用 once 或 $once 修饰符
    3.触发: this.$emit('event',param1,param2,param3)
    4.解绑: this.$off() / this.$off('event') / this.$off(['event1', 'event2', 'event3'])
    5.组件上绑定原生事件, 需要使用 native 修饰符
    注: 使用 this.$refs.xxx.$on 时, 回调函数的作用域, 建议回调卸载 methods中, 使用匿名函数写成箭头函数