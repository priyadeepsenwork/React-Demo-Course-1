import Weather from "./Weather"
import UserStatus from "./UserStatus"
import Greeting from "./Greeting"

const Parent = () => {
  return (
    <div>
        <Weather
            temperature={18}
        />
        <UserStatus 
            loggedIn={true}
            isAdmin={true}
        />
        <Greeting
            timeOfDay={`morning`}
        />
    </div>
  )
}

export default Parent