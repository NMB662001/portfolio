import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className='abc'>
    <p id="cm">Contact Me </p><p class="git12">-----Get In Touch-----</p><div class="git1">
          <p class="l2" >Get In Touch </p> <div class="l1"><h1>Message Me</h1></div><br/>
              <form class="m1">
                  <input class="i1" placeholder="Name" />
                  <input class="i2" placeholder="Email" />
                  <input class="i3" placeholder="Subject" />
                  <input class="i4" placeholder="Message" />
                  <button class="btn">Send message</button>
              </form>
              <div class="icon">

                  <i class="fas fa-user"></i>
                  <label> &nbsp;Name</label><p>Nisha Milind Bhujbal</p>
                  <br/>
                      <i class="fas fa-map-marker-alt"></i>
                      <label>Address</label><p>Ahmednagar Maharashtra</p>

                      <br/>
                          <i class="fas fa-envelope"></i>
                          <label>Email</label><p>nishabhujbal6@gmail.com</p>
                      </div>
                  </div></div>
              )
              }

              export default Contact