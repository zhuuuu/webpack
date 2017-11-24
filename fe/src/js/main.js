console.log(1)
import React from 'react';
import ReactDOM from 'react-dom';
// let a={a:1,b:2}
// console.log({...a,c:3});//...展开符
// import a from './a';
// import b from './b';
// a();
// b();
// import '../css/main.css';//路径
// import style from '../css/main.css';
// import aa from '../css/aa.css';//style 用于接收对象
// import h from '../img/1.jpg';//手动引入
// import hh from '../img/2.jpg';
// import hhh from '../img/4.png';
import 'font-awesome/css/font-awesome.css'//引入font-awesome/
// import S from '../css/main.scss'//模块化
// import '../css/main.scss'
ReactDOM.render(
    // <div className="fa fa-taxi">HH22111dekfhe//字体
    //     {/* <img src={h} alt=""/>//图片
    //     <img src={hh} alt=""/>
    //     <img src={hhh} alt=""/>
    //     <img src={require('../img/3.jpg')} alt=""/> 变量使用一次，可以不引入 */}
    // </div>,
    // <div className={style.ot}>
    //     <span className={aa.ot}>zhuhuanhuan</span>
    //     </div>,
    // <div className='fa fa-address-book'>//字体相关
    //     <span className=''>zhuhuanhuan</span>
    //     </div>,
    //  <div className='ot'>//scss相关
    //     <span className=''>zhuhuanhuan</span>
    //     </div>,
    <div className='ot'>
         <img src={require('../img/3.jpg')} alt=""/>
         <i className="fa fa-taxi"></i>
        </div>,
    document.getElementById("root"),
)
