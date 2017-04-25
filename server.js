/**
 * Created by Administrator on 2017/4/25.
 */
const express=require('express');
let dataArr=[
    {
        title:'a',
        imgUrl:'',
        test:'1',
        id:1
    },
    {
        title:'b',
        imgUrl:'',
        test:'2',
        id:2
    }
];
let goodsId=1;
const app=express();
app.get('/good/:id',function (req,res) {
    console.log(req.params);
    let id=req.params.id;
    res.send(dataArr[parseInt(id)-1]);
});
app.listen(8080);