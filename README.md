# throttle

节流函数，懂的都懂

## 安装

```
npm i @lllllxt/throttle
```

## 使用

`throttle(fn:, [wait=500], [option])`

| 参数            | 类型/默认     | 描述                 |
| --------------- | ------------- | -------------------- |
| fn              | function      | 要节流的函数         |
| wait            | number，500   | 需要节流的毫秒数     |
| option          | object, {}    | 选项                 |
| option.leading  | boolean，true | 是否在节流开始前调用 |
| option.trailing | boolean，true | 是否在节流结束后调用 |

参数和 [Loadsh.throttle](https://lodash.com/docs/4.17.15#throttle) 的完全一样, 但是自我感觉我实现得好一点 :joy:



> 也不知道是不是我得问题, 在使用 `Loadsh.throttle` ( v4.17.15 ) 时 `leading` , `trailing` 同时 `false` 时调用 `fn` 的时间间隔并不是 `wait` 所设定的时间
