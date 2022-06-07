import { width } from "dom-helpers";
import React from "react";
import { useState } from 'react';
import writingcss from '../../css/Writing.css';
import Nav from 'react-bootstrap/Nav'
import { Navigate, useNavigate } from "react-router";
 

// 글목록 컴포넌트

 function Writing(props) {

  let [array, arrayFunction ] = useState([1,2,6,9])
  // 임시 글목록 데이터
  let navigate = useNavigate();

  return (
 
    <div className="profile" >

        <div style={{backgroundColor:"#79e39b", marginBottom:"10px"}} className="profileTop">
            <h3 style={{fontSize:"20px"}}>작성한 글</h3>
        </div>        
        <div className="buttons">
          <button onClick={()=> {
            navigate('/writing')
          }}>작성글</button>
          <button onClick={()=> {
            navigate('/comment')
          }}>작성댓글</button>
        </div>
        <div className="writingContainer">
        {array.map(function(a, i) {
         return ( 
          <div className="writingLists">
            <div style={{width:"60%"}} className="ListsText">
              <h4 style={{fontSize:"17px", marginBottom:"-1px"}}>제목쓰기</h4>
              <span className="username">username</span>
              <span style={{fontSize:"13px", opacity:"0.7", fontWeight:400}}>작성 날짜</span>
            </div>
            <div style={{display:"flex", alignItems:"center"}} className="ListsRight">
             <div style={{ width:"100px", marginRight:"8px", borderRadius:"20px"}}>
              <img style={{ width:"100%",  overflow:"hidden", marginRight:"10px", borderRadius:"5px"}} src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Ftvcast.phinf%2F20220527_19%2FHIhcs_1653641355051tJ9AX_JPEG%2F615ca910-dd99-11ec-9fa8-505dacfba98a_09.jpg%22&type=nf464_260"/>
             </div>  
              <div className="writingComment" >
                <h5 style={{fontSize:"14px", marginTop:"0"}}>4</h5>
                <span style={{fontSize:"12px", opacity:"0.7", fontWeight:600}}>댓글</span>
              </div>
            </div>
          </div>
       
          
         )

        }) 
      }
      </div> 


     </div> 	
        
  )
}


// 댓글창 컴포넌트

function Comment() {

  return (
  
    <div style={{backgroundColor:"#79e39b", marginBottom:"10px"}} className="profileTop">
        <h3 >Profile</h3>
          
            <div  className="profileUser">
              <div className="profileUserImg" >
              <img src="https://cdn.onlinewebfonts.com/svg/img_285684.png"/>
              </div>		  
              <h4 className="userName" >User Name</h4>
              <span className="userMail">email12345@gmail.com</span>
              <div className="penBox">
                <img className="pen" src="./file-pen-solid.svg"/>
          
              </div>
          </div>
        
  </div>
 
 

  )


}
 
  
 
 
export { Writing as default, Comment};
 