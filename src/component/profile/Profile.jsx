import { contains, style } from 'dom-helpers'
import React from 'react'
import { Route, Routes, useNavigate } from 'react-router'
import { useState, useEffect } from 'react';
import Button from '@restart/ui/esm/Button';
import { Modal } from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton'
import Nav from 'react-bootstrap/Nav'
import { Container, Row, Col } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar'
import '../../css/Profile.css' 
import Writing from './Writing';  
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';




// 프로필 페이지

export default function Profile () {
 
	let navigate = useNavigate();
	let [userName, nameChange] = useState(["손흥민"]);
	// 임시 유저 네임 데이터
	let [userImage, imageChange] = useState(['/img_285684.png'])

	// 임시 프로필 useState

    return (

		<Container>
		 <Row>
          <Col  >
 		  <div style={{backgroundColor:"#79e39b"}} className="profileTop">
	
					<div  className="profileUser">
 					  <div className="profileUserImg" >
						 <img src={userImage}/>
					  </div>		  
						 <h4 className="userName" >{userName}</h4>
						<span className="userMail">email12345@gmail.com</span>
					 
					</div>
			
		 
		   </div>	
		   </Col>			
 
			 <div  className="profileBottom">
							<ul className="profileLists">
						    <Edit userImage={userImage} userName={userName} nameChange={nameChange}/>		
							
								<li onClick={()=> {
									navigate("/writing")
								}}>
									<span><img src="./list-ul-solid.svg"/></span>
									<span> 작성한 글 </span>
											
							</li>
							<Distance/>
							<Wastes/>
							<Logout/>
							</ul>
			 </div>
 	
		 </Row> 	
 
		  </Container>
 	 
       
    )
}	



// 모달 컴포넌트 


function Logout() {
 	const [lgShow, setLgShow] = useState(false);
  
	return (
	  <>
	   <li onClick={() => setLgShow(true)} >
					   <span style={{marginRight:"20px"}}><img style={{width:"25px"}} src="arrow-right-from-bracket-solid.svg"/></span>
					   <span style={{
						   fontSize:"18px", fontFamily:"SCDream4",
						    fontWeight:"500", lineHeight:"1.2em"}}>
								로그아웃</span></li>
 	 	<Modal
		  size="lg"
		  show={lgShow}
		  onHide={() => setLgShow(false)}
		  aria-labelledby="Logout-modal-sizes-title-lg"
		>
		  <Modal.Header closeButton>
			<Modal.Title id="Logout-modal-sizes-title-lg">
			<h4>로그아웃 하시겠습니까?</h4>
			</Modal.Title>
		  </Modal.Header>
		  <Modal.Body>
			  <button>예</button>
			  <button>아니요</button>
		  </Modal.Body>
		</Modal>
	  </>
	);
  }
  

// 달린 거리 모달창

function Distance() {
	const [lgShow, setLgShow] = useState(false);
	let [totalTime, countTime] = useState(0);
 
	let [tap, tapChange] = useState(0)
 
	
	// 달린 거리 일/주/월 통계 탭

	function TabContent() {
		return [
		<div className="TabOne">
			<h4>합계</h4>	
			 <div className="distanceSumText">	
				  <strong style={{fontSize:"35px", marginRight:"5px"}}>3358</strong>
				  <span style={{fontSize:"18px", fontWeight:"500"}}>걸음</span>	
			  </div>	  	
			  
			  <div className="dailyGraph" style={{textAlign:"center", marginBottom:"30px"}}>
				  <img style={{width:"260px", margin:"0 auto"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Blue_bar_graph.png/1200px-Blue_bar_graph.png" />
			   </div>

			   <div className="distanceStatus">
				  <div>
					  <h4>2.44</h4>
					  <span>총 거리</span>
				  </div>
				  <div>
					  <h4>00:44</h4>
					  <span>총 시간</span>
				  </div>
				  <div>
					  <h4>87</h4>
					  <span>총 소모한 칼로리양</span>
				  </div> 
			  </div>
			  <div className="healthTip">
				  <h5>건강 도움말</h5>	
				  <p>매일 8,000보 이상을 걸으면 건강을 유지하는 데 도움이 
					  될 수 있습니다. 분당 110보를 걷는 속도로 빠르게 걸으면 
					  더 효과적입니다.
				  </p>
				  </div>	
		  </div>,
		  <div className="TapTwo">
			  <h4>평균</h4>	
			 <div className="distanceSumText">	
				  <strong style={{fontSize:"35px", marginRight:"5px"}}>3358</strong>
				  <span style={{fontSize:"18px", fontWeight:"500"}}>일별 걸음 수</span>	
			  </div>	  	
			  <div className="dailyGraph" style={{textAlign:"center", marginBottom:"30px"}}>
				  <img style={{width:"260px", margin:"0 auto"}} src="https://community.powerbi.com/t5/image/serverpage/image-id/400487iF6CDD7F918074A01/image-size/large?v=v2&px=999" />
			   </div>

			   <div className="distanceStatus">
				  <div>
					  <h4>2.44</h4>
					  <span>총 거리</span>
				  </div>
				  <div>
					  <h4>00:44</h4>
					  <span>총 시간</span>
				  </div>
				  <div>
					  <h4>87</h4>
					  <span>총 소모한 칼로리양</span>
				  </div> 
			  </div>
			  <div className="healthTip">
				  <h5>건강 도움말</h5>	
				  <p>매일 8,000보 이상을 걸으면 건강을 유지하는 데 도움이 
					  될 수 있습니다. 분당 110보를 걷는 속도로 빠르게 걸으면 
					  더 효과적입니다.
				  </p>
				  </div>	
		  </div>,
		  <div className="TapThree">
			  <h4>평균</h4>	
			 <div className="distanceSumText">	
				  <strong style={{fontSize:"35px", marginRight:"5px"}}>3358</strong>
				  <span style={{fontSize:"18px", fontWeight:"500"}}>일별 걸음 수</span>	
			  </div>	  	
			  <div className="dailyGraph" style={{textAlign:"center", marginBottom:"30px"}}>
				  <img style={{width:"260px", margin:"0 auto"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Blue_bar_graph.png/1200px-Blue_bar_graph.png" />
			   </div>

			   <div className="distanceStatus">
				  <div>
					  <h4>2.44</h4>
					  <span>총 거리</span>
				  </div>
				  <div>
					  <h4>00:44</h4>
					  <span>총 시간</span>
				  </div>
				  <div>
					  <h4>87</h4>
					  <span>총 소모한 칼로리양</span>
				  </div> 
			  </div>
			  <div className="healthTip">
				  <h5>건강 도움말</h5>	
				  <p>매일 8,000보 이상을 걸으면 건강을 유지하는 데 도움이 
					  될 수 있습니다. 분당 110보를 걷는 속도로 빠르게 걸으면 
					  더 효과적입니다.
				  </p>
				  </div>	
		  </div>
][tap]

		if (tap == 0){
		
		  }
	 
		 
		}
	  

   return (
	 <>
	  <li onClick={() => setLgShow(true)} >
					  <span style={{marginRight:"20px"}}><img style={{width:"25px"}} src="./route-solid.svg"/></span>
					  <span style={{
						  fontSize:"18px", fontFamily:"SCDream4",
						   fontWeight:"500", lineHeight:"1.2em"}}>
							   플로깅 한 거리</span></li>
		 <Modal
		 size="lg"
		 show={lgShow}
		 onHide={() => setLgShow(false)}
		 aria-labelledby="Distance-modal-sizes-title-lg"
	   >
		 <Modal.Header closeButton>
		   <Modal.Title  id="Distance-modal-sizes-title-lg">
		   <h4>달린 거리</h4> 
		   </Modal.Title>
		 </Modal.Header>
		 <Modal.Body>


			 
			 <div className="dis">

			 <Nav variant="tabs"  style={{marginBottom:"20px"}}  defaultActiveKey="link0">
				<Nav.Item>
				<Nav.Link style={{fontSize:"20px"}} onClick={()=> {
					tapChange(0)
				}}  eventKey="link0">일</Nav.Link>
				</Nav.Item>
				<Nav.Item>
				<Nav.Link style={{fontSize:"20px"}} onClick={()=> {
					tapChange(1)
				}} eventKey="link1">주</Nav.Link>
				</Nav.Item>
				<Nav.Item>
				<Nav.Link style={{fontSize:"20px"}} onClick={()=> {
					tapChange(2)
				}} eventKey="link2">월</Nav.Link>
				</Nav.Item>
			</Nav>
			   <TabContent/>			
				{/* TabContent의 state변경 함수를 이용하면 
				    버튼을 클릭할 때 마다 스테이트를 바꿔주고 
					그 스테이트에 해당하면 HTML을 배출하는 형식 가능
				*/}
			 </div>
			 
			 

		 </Modal.Body>
		 
	   </Modal>
	 </>
   );
 }


 // TabContent

 
//  주운 쓰레기 양 

function Wastes() {
	const [lgShow, setLgShow] = useState(false);
  
   return (
	 <>
	  <li onClick={() => setLgShow(true)} >
					  <span style={{marginRight:"20px"}}><img style={{width:"25px"}} src="./recycle-solid.svg"/></span>
					  <span style={{
						  fontSize:"18px", fontFamily:"SCDream4",
						   fontWeight:"500", lineHeight:"1.2em"}}>
							  주운 쓰레기 양</span></li>
		 <Modal
		 size="lg"
		 show={lgShow}
		 onHide={() => setLgShow(false)}
		 aria-labelledby="Wastes-modal-sizes-title-lg"
	   >
		 <Modal.Header closeButton>
		   <Modal.Title id="Wastes-modal-sizes-title-lg">
		   <h5 style={{fontWeight:"400"}}>주운 쓰레기 양</h5>
		   </Modal.Title>
		 </Modal.Header>
		 <Modal.Body>
		
		 <Container >
			<Row>
				<Col md={12}   >
				 
				<div className="icons" style={{textAlign:"center", border:"none"}} >	
					 <img style={{width:"80%", }} src="https://popedouglasrecycle.com/wp-content/uploads/2021/02/pope.png"/>
					 <span style={{fontSize:"16px", fontWeight:"200"}}>"버린 쓰레기 총합"</span>
	
				 <div style={{display:"flex", alignItems:"center"}}>
					<span style={{fontSize:"22px", fontWeight:"600", marginRight:"3px"}}>1500</span><span style={{fontSize:"13px"}}>개</span>
				 </div>
				</div>
				</Col>
 				<div className="icons" style={{marginBottom:"10px"}}>
					
					<div className="icon">	
					<h6>플라스틱</h6>
					<img src="./wasteicon/plastic.png"/>
					<div className="iconsText">
						<span>500</span>
						<span>개</span>
					</div>
					</div>	
					<div className="icon">	
					<h6>병</h6>
					<img src="./wasteicon/wine.png"/>
					<div className="iconsText">
						<span>500</span>
						<span>개</span>
					</div>
					
					</div>	
					<div className="icon">	
					<h6>종이</h6>
					<img src="./wasteicon/paper-bin.png"/>
					<div className="iconsText">
						<span>500</span>
						<span>개</span>
					</div>
					</div>	
					<div className="icon">	
					<h6>고철</h6>
					<img src="./wasteicon/pipes.png"/>
					<div className="iconsText">
						<span>500</span>
						<span>개</span>
					</div>
					</div>
					<div className="icon">	
					<h6>일반 쓰레기</h6>
					<img src="./wasteicon/plastic-bag.png"/>
					<div className="iconsText">
						<span>500</span>
						<span>개</span>
					</div>
					</div>
				</div>
				

				 
				
			
		 
			</Row>
			
		</Container>	
		 </Modal.Body>
		 <div className="bottomdiv">
						<div  className="icons" style={{marginBottom:"5px", borderBottomLeftRadius:"0px", borderBottomRightRadius:"0px" }}>
							<span style={{fontSize:"25px", fontWeight:"300"}}>당신이 지구에 끼친 선한 영향력</span>
							<div className="bottomImgsBoxs">	
							<div className="bottomImgs1"></div>
					 
						</div>	
						</div>
					
					</div>	
	   </Modal>
	 </>
   );
 }
 
//  프로필 모달
 
 function Edit(props) {
	const [show, setShow] = useState(false);
	let copy = [...props.userName];


		// input file 배열에 저장 

	const [files, setFiles] = useState('');
 
 
 	

	// 닉네임 변경 input 컴포넌트

 	let a = localStorage.getItem('username');
	let name = JSON.parse(a)
	console.log(name)
  

	function Input() {
 		 

	 
		let [origin, originChange] = useState([name])
		// 서버에서 받아온 데이터로 치자, 그 데이터를 useState에 넣은 것 
		

		console.log(origin)

		const [input, inputChange] = useState([""])
		// input 값을 관리하는 useState

		const onChange = (e) => {
	
			inputChange(e.target.value);
	
			
			console.log(input)
		 
		};
		
		return (
			<div>
				<input className="editNameInput" placeholder='닉네임' onChange={onChange} value={input} />
				<button type="submit" onClick={(e)=> {
			//  form태그후에 새로고침 하지 않기 위해 preventDefault 
					let copy = [...origin];
					copy.shift();
					copy.unshift(input);
					// 내 생각에는 이것이 입력하는 동시에 삭제가 되고 새로운 닉네임이 들어가는 방식으로 생각됨

					originChange(copy);
					localStorage.setItem('username', JSON.stringify(copy));
				    props.nameChange(copy);
					// 원본 데이터를 다이렉트로 바꿔주는 u
		    // 원본을 건들지 않기 위해 copy를 통해서 데이터 배열에 unshift (array 자료 맨앞에 자료 추가)
			

				}} className="editNameButton">변경</button>
			 </div>
		);
	}
 
	return (
	  <>
	  	<li>
		  <span  onClick={() => setShow(true)}>
			  <img src="./user-solid.svg"/>
		  </span>
		  <span  onClick={() => setShow(true)}> 프로필 수정</span>
		</li>
		 
		<Modal
		  show={show}
		  onHide={() => setShow(false)}
		  dialogClassName="modal-1-0w"
		  aria-labelledby="example-custom-modal-styling-title"
		  style={{marginTop:"30px", marginLeft:"30px", width:"85%", height:"500px"}}
		>
		  <Modal.Header  closeButton style={{marginBottom:"5px"}}>
			<Modal.Title id="example-custom-modal-styling-title">
			  <span style={{marginBottom:"15px"}}>프로필 편집</span>
			</Modal.Title>
		  </Modal.Header>
		  <Modal.Body  >
			<div style={{marginBottom:"60px"}} className="editImgBox">   
			 <div className="editText" >
				<span>사진 변경</span>
		      <div style={{display:"flex", alignItems:"center"}}>
				<input  onChange={(e)=> {
					console.log(e.target.files)
				}} style={{display:"none"}} type="file" name="file" accept="image/*" id="bizFile"/>
				<label style={{color:"blue"}} for="bizFile" class="btn fileBtn">이미지 선택</label>
				{/* <span onClick={(e)=> {console.log(e.target.files)}} style={{}}>업로드</span>  */}

			 {/* 이미지 업로드 버튼 구현 */}
			 {/* 서버가 없어서 일단 보류  */}


		      </div>		 
			</div>	
			<div className="editImg" style={{width:"100%"}}>
					<img style={{width:"100px", margin:"0, auto"}} src={props.userImage} />
			</div>
			</div> 
			<div style={{marginBottom:"110px"}} className="editName">
			 <h6 style={{ marginBottom:"40px", fontWeight:"600"}}>닉네임 수정</h6>
			 <form style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
							<Input/>
			  </form>

			 {/* 닉네임 수정 마크업 공사 진행중 */}
			 
			 {/* 
			 어디까지?
				 2. 눌러서 수정하고 변경 버튼 누르면 데이타 (useState)값 기존값 삭제하고 새로운 것으로 변경
				 배열을 어떻게 바꿀 것인가? 이것 구글링하기
			 
			 */}
			</div>
		

		  </Modal.Body>
		</Modal>
	  </>
	);
  }
  
  

  