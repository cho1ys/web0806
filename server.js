const express = require('express')
const app = express()
const port =3002
const path = require('path'), async = require('async'), fs = require('fs')


const user = [
    {name : 'kim', email: 'kim@naver.ocm'},
    {name : 'lee', email: 'lee@gmail.com'},
    {name : 'park', email: 'park@daum.net'}
]

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'))
})
app.get('/name', (req,res)=>{
    res.send(JSON.stringify({message: "제 이름은 최윤성입니다"}))
})

app.get('/user',(req,res)=>{
    res.json(user)
})

app.listen(port, ()=>{
    console.log(`서버 실행 http://localhost:${port}`)
})
