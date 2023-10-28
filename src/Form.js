import React from 'react'

function Form() {
  const days=[1,2,3];
  const dayList= days.map(day=><option>{day}</option>)
  return (
    <div className='container' >
        
        <form>
        <h1>Create a new account</h1>
        <h4>it's quick and easy</h4>
        <section>
            <input type="text" placeholder='Firstname' />
            <input type="text" placeholder='Surename' />
        </section>

        <section>
            <input type="text" placeholder='Mobile number or email address'/>
        </section>
        <section>
            <input type="text" placeholder='New password'/>
        </section>
        <h6>Date of birth</h6>
        <section>
        <select name="number" id="day">{dayList}</select>
            
        </section>

    
    </form>
    </div>
  )
}

export default Form