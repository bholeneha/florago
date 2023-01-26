import * as usersService from '../../utilities/users-service'

export default function ProfilePage() {

    async function handleCheckToken() {
        const expDate = await usersService.checkToken()
        console.log(expDate)
    }

    return (
        <>
            <h1>Profile</h1>
            <button onClick={handleCheckToken}>Check When My Login Expires</button>
        </>
    )
}