import React from 'react'

function App  ()  {
 
    return (
    <div
        className="container">
            <h1>form </h1>
            <form>
                <label htmlFor='firsttname'>firsttname</label>
                <input type='text' placeholder='Enter First Name' name='firstname' />

                <label htmlFor='lasttname'>lasttname</label>
                <input type='text' placeholder='Enter last Name' name='lasttname' />

                <label htmlFor='email'>email</label>
                <input type='email' placeholder='Enter email' name='email' />
                <label htmlFor='contact'>Contact</label>
                <input type='text' placeholder='Enter phone#' name='contact' />
                <label htmlFor='gender'>gender</label>
                <input type='radio'  name='gender' /> Male
                <input type='radio'  name='gender' /> female
                <input type='radio'  name='gender' /> animal
                <label htmlFor="subject"> subject</label>
                <select name='subject' id='subject'>
                    <option value="math">math</option>
                    <option value="physic">physic</option>
                    <option value="english">english</option>
                </select>
                <label htmlFor="resume">resume</label>
                <input type="file" placeholder='select resume' name='resume' />
                <label htmlFor="url" name="url" placeholder="enter image url" ></label>
                <label htmlFor="about" >about</label>
                <textarea name="about" id="about" cols="30" rows="10" placeholder='Enter description' ></textarea>
                <button type="button">reset</button> 
                <button type='submit'>submit</button>


            </form>
    </div>
  )
}
export default App;