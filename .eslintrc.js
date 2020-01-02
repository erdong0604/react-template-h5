module.exports = {
    // 环境里定义了一组预定义的全局变量
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    // extends属性表示启用一系列核心规则，若有plugins属性表示同时启用插件的核心规则
    "extends": [
        "eslint:recommended",
        'plugin:react/recommended'
    ],
      "globals": {
          "styles": true,
          "process":true
      },
    // 设置解析器
    "parser": "babel-eslint",
    // 解析器选项
    "parserOptions": {
        // 表示一些附加特性的对象, 支持JSX
        "ecmaFeatures": {
            "jsx": true
        },
        // ECMAScript的版本
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    // 支持使用的第三方插件，在使用插件之前，你必须使用 npm 安装它。
    "plugins": [
        "react"
    ],
    // 规则配置
    "rules": {
        "comma-spacing": [1, { "before": false, "after": true }], //逗号后要有空格    
        "no-alert": 0,//禁止使用alert confirm prompt
        "no-else-return": 2,//如果if语句里面有return,后面不能跟else语句
        "no-empty": 2,//块语句中的内容不能为空
        "no-eq-null": 2,//禁止对null使用==或!=运算符
        "no-extra-parens": 2,//禁止非必要的括号
        "no-extra-semi": 2,//禁止多余的冒号
        "no-func-assign": 2,//禁止重复的函数声明
        "no-irregular-whitespace": 2,//不能有不规则的空格
        "no-multiple-empty-lines": [1, {"max": 2}],//空行最多不能超过2行
        "no-redeclare": 2,//禁止重复声明变量
        "no-return-assign": 1,//return 语句中不能有赋值表达式
        "no-self-compare": 2,//不能比较自身
        "no-var": 2,//禁用var，用let和const代替
        "indent": [2, 4],//缩进风格
        "quotes": [2, "double"], //双引号
        "no-console": 0, //不禁用console
        "no-debugger": 2, //禁用debugger
        "semi": 1, //分号要警告
        "no-irregular-whitespace": 1, //不规则的空白不允许
        "no-trailing-spaces": 1, //一行结束后面有空格就发出警告
        "no-unused-vars": [0, {"vars": "all", "args": "after-used"}], //不能有声明后未被使用的变量或参数
        "no-underscore-dangle": 1, //标识符不能以_开头或结尾
        "no-lone-blocks": 0, //禁止不必要的嵌套块
        "no-class-assign": 2, //禁止给类赋值
        "camelcase": 0, //强制驼峰法命名
        "no-undef": 2, //不能有未定义的变量
        "no-this-before-super": 0, //在调用super()之前不能使用this或super
        "func-call-spacing": 0, //禁止函数名与()之间有空格
        "react/jsx-indent-props": [2, 4], //验证JSX中的props缩进
        "react/jsx-key": 2, //在数组或迭代器中验证JSX具有key属性
        "react/jsx-max-props-per-line": [1, {"maximum": 1}], // 限制JSX中单行上的props的最大数量
        "react/jsx-no-bind": 0, //JSX中不允许使用箭头函数和bind
        "react/jsx-no-duplicate-props": 2, //防止在JSX中重复的props
        "react/jsx-no-undef":2, //在JSX中禁止未声明的变量
        "react/jsx-sort-props": 1, //强化props按字母排序
        "react/no-direct-mutation-state": 2, //防止this.state的直接变异
        "react/no-did-mount-set-state": 0, //防止在componentDidMount中使用setState
        "react/no-did-update-set-state": 0, //防止在componentDidUpdate中使用setState
        "react/jsx-equals-spacing": 2, //在JSX属性中强制或禁止等号周围的空格
        "react/prop-types":0,
        "react/display-name":0,
        "no-unreachable": 1, //不能有无法执行的代码
        "eqeqeq": 2,//必须使用全等
        'object-curly-spacing': [2, 'always', {
                'objectsInObjects': false
            }],
        // 禁止或强制在括号内使用空格
        'array-bracket-spacing': [2, 'always'],
        // 强制要求在对象字面量的属性中键和值之间使用一致的间距
        'key-spacing': [2, {
            'beforeColon': false,
            'afterColon' : true
        }],
     
    }
  };
  