# 1、将大数组拆分两项小数组  分别对应已经能完成  和 未完成 
- 使用计算属性
- 定义象函数 使用像属性 
- 核心方法 filter 返回值是一个数组   数组里面放着 每一次回调函数返回值为真的项
```javascript
      computed: {
            todos() {
                return this.todolist.filter(item => item.isCheck)
            },
            process() {
                return this.todolist.filter(item => !item.isCheck)
            }
    },

```

# 2、input回车添加数据
- @keyup。enter 添加
- 注意：添加数据不能直接到小数组，添加到大数据，计算属性是不允许修改值  isCheck = false

```javascript
    // HTML
    <!--  <input type="text" v-model="val" @keyup.enter="submit">  -->
    // 核心
    submit() {
        // 推入数据  注意：是大数据  状态 false 正在完成   不要忘记id
             this.todolist.push({
                    title: this.val,
                    isCheck: false,
                    id: id++,
            })
            // 清空input内容
            this.val = "";
    },
```
# 3。删除
- 通过 id 找到 对应的下表
- 数组的方法splice(下表,1)

```javascript
            // HTML
            // 添加点击事件
            <!--  <b @click="del(item.id)">X</b>  -->
            
            // 删除函数
            del(id) {
                    // 关键  寻找 id 所在的下标
                    let ind = this.todolist.findIndex(function (item) {
                        return item.id === id
                    })
                    // 删除
                    this.todolist.splice(ind, 1)
            },

```

# 4、切换状态
- 核心  通过 id 找到 对应的下表  使用findIndex核心函数
- isCheck 状态  自身取反 

```javascript
    // HTML
    <!--    <input type="checkbox" checked @click="change(item.id)">  -->


    // 核心
     change(id) {
            // 关键  寻找 id 所在的下标
            let ind = this.todolist.findIndex(function (item) {
                 return item.id === id
            })
            // 切换状态 自身取反
            this.todolist[ind].isCheck = !this.todolist[ind].isCheck
    }

```


# 5、注意
- 因为vue将相同的数据进行复用，一般情况下，需要绑定key值  保证其唯一性

```javascript
    // HTML
    <!--    <li v-for="(item,index) in todos" :key="item.id">  -->
   
```


# webpack  1-4
# vue基本语法 5-7
# vue组件化 8-10  单文件组件
# vue路由 11-13
# vue状态管理 14-16



# 组件
## 注册
- 全局 Vue.component("组件名称",组件对象)

- 局部


# 使用 
- 标签形式
```HTML
    <组件名称></组件名称>
```

# 注意
- 1、组件上 data必须是一个函数  函数返回出来一个对象
- 2、组件上只可以用自己的数据 
- 3、组件的template必须有一个根元素