/**
 * Created by Administrator on 2016/7/27 0027.
 */
const exp = require('express'),
    template = require('art-template'),
    app = exp()

// 是否开启换成，默认情况是true（开发阶段使用，上线时把此处去掉）
template.config('cache', false)

// 指定以.html结尾的文件使用的解析引擎
app.engine(".html",template.__express)
// 指定使用html视图引擎
app.set('view engine', 'html');
// 把默认的视图所在文件改成www
// app.set('views' , 'www')

// 总结： 在使用express模块，渲染的页面默认情况下会在一个叫views文件夹中找

app.get("/", function (req, res) {
    // template第一个参数指的是视图文件的名称（不带文件名后缀）
    var html = template('index',{
        title: '服务器端模板数据',
        books: [{
            name: '重构'
        }, {
            name: '大话设计模式'
        }]
    })


    res.end(html)

}).get('/engine',function (req, res) {
    
    var data = {
        title: '服务器端模板数据2',
        books: [{
            name: '重构2'
        }, {
            name: '大话设计模式2'
        }]
    }
    
    //渲染，呈现视图，第一个参数指定视图文件名，第二参数是携带的数据
    res.render('page',data)
    
}).listen(3000, function () {
    console.log('Service Running!')
})