import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css"
import photo from "./a.webp"

function Hi() {
  return <div>


  <div className="resume">
     <div className="resume_left">
       <div className="resume_profile">
    <img src={photo} alt="" />
         {/* <img src="https://i.imgur.com/eCijVBe.png" alt="profile_pic"> */}
       </div>
       <div className="resume_content">
         <div className="resume_item resume_info">
           <div className="title">
             <p className="bold">Abdul Waris</p>
             <p className="regular">Developer</p>
           </div>
           <ul>
             <li>
               <div className="icon">
                 {/* <i className="fas fa-map-signs"></i> */}
               </div>
               <div className="data">
                 Gulshan-e-iqbal, karachi <br /> Pakistan
               </div>
             </li>
             <li>
               <div className="icon">
                 {/* <i className="fas fa-mobile-alt"></i> */}
               </div>
               <div className="data">
                 +92 182384986
               </div>
             </li>
             <li>
               <div className="icon">
                 <i className="fas fa-envelope"></i>
               </div>
               <div className="data">
                 iamhina03@gmail.com
               </div>
             </li>
             <li>
               <div className="icon">
                 <i className="fab fa-weebly"></i>
               </div>
               <div className="data">
                 www.example.com
               </div>
             </li>
           </ul>
         </div>
         <div className="resume_item resume_skills">
           <div className="title">
             <p className="bold">skill's</p>
           </div>
           <ul>
             <li>
               <div className="skill_name">
                 HTML
               </div>
               <div className="skill_progress">
                 <span className='p90'></span>
               </div>
               <div className="skill_per">90%</div>
             </li>
             <li>
               <div className="skill_name">
                 CSS
               </div>
               <div className="skill_progress">
               <span className='p70'></span>
               </div>
               <div className="skill_per">70%</div>
             </li>
             <li>
               <div className="skill_name">
                 JS
               </div>
               <div className="skill_progress">
               <span className='p90'></span>
               </div>
               <div className="skill_per">90%</div>
             </li>
             <li>
               <div className="skill_name">
                 REACT
               </div>
               <div className="skill_progress">
               <span className='p20'></span>
               </div>
               <div className="skill_per">20%</div>
             </li>
             <li>
               <div className="skill_name">
                 JQUERY
               </div>
               <div className="skill_progress">
               <span className='p35'></span>
               </div>
               <div className="skill_per">35%</div>
             </li>
           </ul>
         </div>
         <div className="resume_item resume_social">
           <div className="title">
             <p className="bold">Social</p>
           </div>
           <ul>
             <li>
               <div className="icon">
                 <i className="fab fa-facebook-square"></i>
               </div>
               <div className="data">
                 <p className="semi-bold">Facebook</p>
                 <p>iamhina03@facebook</p>
               </div>
             </li>
             <li>
               <div className="icon">
                 <i className="fab fa-twitter-square"></i>
               </div>
               <div className="data">
                 <p className="semi-bold">Twitter</p>
                 <p>iamhina03@twitter</p>
               </div>
             </li>
             <li>
               <div className="icon">
                 <i className="fab fa-youtube"></i>
               </div>
               <div className="data">
                 <p className="semi-bold">Youtube</p>
                 <p>iamhina03@youtube</p>
               </div>
             </li>
             <li>
               <div className="icon">
                 <i className="fab fa-linkedin"></i>
               </div>
               <div className="data">
                 <p className="semi-bold">Linkedin</p>
                 <p>iamhina03@linkedin</p>
               </div>
             </li>
           </ul>
         </div>
       </div>
    </div>
    <div className="resume_right">
      <div className="resume_item resume_about">
          <div className="title">
             <p className="bold">About me</p>
           </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis illo fugit officiis distinctio culpa officia totam atque exercitationem inventore repudiandae?</p>
      </div>
      <div className="resume_item resume_work">
          <div className="title">
             <p className="bold">Work Experience</p>
           </div>
          <ul>
              <li>
                  <div className="date">2013 - 2015</div> 
                  <div className="info">
                       <p className="semi-bold">Lorem ipsum dolor sit amet.</p> 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                  </div>
              </li>
              <li>
                <div className="date">2015 - 2017</div>
                <div className="info">
                       <p className="semi-bold">Lorem ipsum dolor sit amet.</p> 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                  </div>
              </li>
              <li>
                <div className="date">2017 - Present</div>
                <div className="info">
                       <p className="semi-bold">Lorem ipsum dolor sit amet.</p> 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                  </div>
              </li>
          </ul>
      </div>
      <div className="resume_item resume_education">
        <div className="title">
             <p className="bold">Education</p>
           </div>
        <ul>
              <li>
                  <div className="date">2010 - 2013</div> 
                  <div className="info">
                       <p className="semi-bold">Web Designing (Texas University)</p> 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                  </div>
              </li>
              <li>
                <div className="date">2000 - 2010</div>
                <div className="info">
                       <p className="semi-bold">Texas International School</p> 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                  </div>
              </li>
          </ul>
      </div>
      <div className="resume_item resume_hobby">
        <div className="title">
             <p className="bold">Hobby</p>
           </div>
         <ul>
           <li><i className="fas fa-book"></i></li>
           <li><i className="fas fa-gamepad"></i></li>
           <li><i className="fas fa-music"></i></li>
           <li><i className="fab fa-pagelines"></i></li>
        </ul>
      </div>
    </div>
  </div>
  
  </div>;
}

ReactDOM.render(<Hi/>, document.querySelector('#root'));
