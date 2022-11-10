
/* Add the Profile function here */

const myName = 'Andrew'

function Profile(props){
  return <main id="content" role="main" className="base">
           <h1>{props.name}'s React Page</h1>
           <p>{props.bio}</p>
         </main>
}

export default Profile