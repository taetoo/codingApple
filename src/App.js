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
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');


  
  return (
    <div className="App">
        <div className="black-nav">
          <h4>ReactBlog</h4>
        </div>
        {
          modal == true ? <Modal title={title} 글제목={글제목} 글제목변경={글제목변경}/> : null
        }
        {/* state가 array 자료이면 복사부터 하고 진행! */}
        {
          글제목.map(function(a, i){
            return ( 
              <div className="list" key={i}>
                <h4 onClick={()=>{setModal(!modal); setTitle(i)}}>{글제목[i]} <span onClick={(e)=>{
                  // 이벤트 버블링 막아주는 함수
                  e.stopPropagation();
                  let copy = [...따봉];
                  copy[i] == 0 ? copy[i]++ : copy[i]--;
                  따봉변경(copy);
                }}>👍</span> {따봉[i]}</h4>
                <p>2월 17일 발행</p>
                <button className="delBtn" onClick={()=>{
                  let copy = [...글제목];
                  copy.splice(i, 1)
                  글제목변경(copy)
                }}>삭제</button>
              </div>
    
            )
          })
        }
        {/* 여러 이벤트핸들러가 존재하기 때문에 필요시 찾아서 사용. 약 30개 정도 */}
        <input type="text" onChange={(e)=>{입력값변경(e.target.value)}}></input>
        <button onClick={()=>{
          if(!입력값){
            alert('입력해주세요!')
          }else{
          let copy = [...글제목]
          let copy2 = [...따봉]
          copy.unshift(입력값);
          copy2.unshift(0)
          글제목변경(copy)
          따봉변경(copy2)
          console.log(copy2)
          }}}>입력</button>
          


        {/* 초기 모달의 값이 false 니깐 버튼을 눌렀을 때 반대인 true 로 값이 바뀌고,
        모달 값이 true로 바뀌었으니깐 다시 버튼을 누르면 false 로 바뀐다.*/}
        {/* {
          modal == true ? <Modal title={title} 글제목={글제목} 글제목변경={글제목변경}/> : null
        } */}
    </div>
    
    
  );
}
  function Modal(props){
    return(
      <div className="modal">
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button>글수정</button>
      </div>
    )
  }



export default App;
