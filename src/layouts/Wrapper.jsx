import '../App.css'
import Root from '../routes/Root'

function Wrapper({children}) {

  return (
    <>
        <Root/>
      {children}
    </>
  )
}

export default Wrapper