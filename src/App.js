<<<<<<< HEAD
/* eslint-disable */ 
=======
/* eslint-disable */
>>>>>>> 54f9c2a792ae05d8c55dd2f2d6b2ffb7199bf3c5

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

<<<<<<< HEAD
function App() {

  let post = '강남 우동 맛집';

   // a는 state 보관 값, b는 state 변경 도움 함수
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬독학']);
  let [따봉, 따봉변경] = useState(0);

 
  return (
    <div className="App">
        <div className="black-nav">
          <h4>ReactBlog</h4>
        </div>
        <div className="list">
          <h4>{글제목[0]} <span onClick={()=>{ 따봉변경(따봉+1) }}>👍</span> {따봉} </h4>
          <p>2월 17일 발행</p>
        </div>
        <div className="list">
          <h4>{글제목[1]}</h4>
          <p>2월 17일 발행</p>
        </div>
        <div className="list">
          <h4>{글제목[2]}</h4>
          <p>2월 17일 발행</p>
        </div>
        <Modal/>
       
      

    </div>
  );
}
function Modal(){
  return(
    <div className="modal">
=======

// 메인페이지
function App() {

  // 변수 넣을 때는 {} 로 꽂아 넣기
  let post = '인큐버스';

  // let [state 안에 담긴 변수, state 변경을 도와주는 함수]
  // 변수와 다르게 state의 값이 바뀌었을 때 자동으로 재렌더링이 된다.
  let [글제목, 글제목변경] = useState(['구로동맛집', '문래동맛집', '대림동맛집']);

  let [좋아요, 좋아요변경] = useState([0,0,0]);

  let [modal, setModal] = useState(false);


  let [날짜, c] = useState('9월 15일 발행');

  return (

    // 클래스를 넣을 때는 className
    <div className="App">
      <div className="black-nav">
        <h4>{post}</h4>
      </div>

      {/* <button onClick={()=>{
        // [...] array를 바꿔주라는 함수
        let copy = [...글제목];
        copy[0] = '역삼동맛집';
        글제목변경(copy);
        
        }}>제목변경</button>

      <button onClick={()=>{
        let copy2 = [...글제목].sort();
        글제목변경(copy2); 
      }}>가나다 정렬</button> */}

      {/* <div className='list'>
        <h4>{글제목[0]} <span onClick={() => { 좋아요변경(좋아요 + 1) }}>👍</span> {좋아요} </h4>
        <p>{날짜}</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}  <span onClick={() => { 좋아요변경1(좋아요1 + 1) }}>👍</span> {좋아요1} </h4>
        <p>{날짜}</p>
      </div> */}

      {/* 모달창 open/close  */}
      {/* <div className='list'>
      <h4 onClick={() => {
          modal == true ? setModal(false) : setModal(true);
        }}>{글제목[2]}</h4>
        <p>{날짜}</p>
      </div> */}

      {
        글제목.map((a, i) => {
          return (
            <div className='list' key={i}>
              <h4>{글제목[i]}
                <span onClick={() => {
                  let copy = [...좋아요];
                  copy[i]++;
                  좋아요변경(copy)
                }}>👍</span> {좋아요[i]} </h4>
              <p>{날짜}</p>
            </div>
          )
        })
      }
      {/* 모달창 초기에 안나오게 */}
      {
        modal == true ? <Modal /> : null
      }
    </div>
  );
}
function Modal() {
  return (
    <div className='modal'>
>>>>>>> 54f9c2a792ae05d8c55dd2f2d6b2ffb7199bf3c5
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

<<<<<<< HEAD

=======
>>>>>>> 54f9c2a792ae05d8c55dd2f2d6b2ffb7199bf3c5
export default App;
