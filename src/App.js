/* eslint-disable */ 

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  let post = '강남 우동 맛집';

   // a는 state 보관 값, b는 state 변경 도움 함수
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);


  
  return (
    <div className="App">
        <div className="black-nav">
          <h4>ReactBlog</h4>
        </div>
        {/* state가 array 자료이면 복사부터 하고 진행! */}
        {
          글제목.map(function(a, i){
            return ( 
              <div className="list">
                <h4>{글제목[i]} <span onClick={()=>{
                  let copy = [...따봉];
                  copy[i] == 0 ? copy[i]++ : copy[i]--;
                  따봉변경(copy)
                }}>👍</span> {따봉[i]}</h4>
                <p>2월 17일 발행</p>
              </div>
            )
          })

        }
      
     





        {/* 초기 모달의 값이 false 니깐 버튼을 눌렀을 때 반대인 true 로 값이 바뀌고,
        모달 값이 true로 바뀌었으니깐 다시 버튼을 누르면 false 로 바뀐다.*/}
        <button onClick={()=>{setModal(!modal)}}>Modal</button>
        {
          modal == true ? <Modal 모달제목={글제목[0]}/> : null
        }
    </div>
    
    
  );
}

function Modal(props){
  return(
    <div className="modal">
      <h4>{props.모달제목}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}


export default App;
