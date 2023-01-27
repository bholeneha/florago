import './ProfilePage.css'
import * as usersService from '../../utilities/users-service'

export default function ProfilePage() {

    async function handleCheckToken() {
        const expDate = await usersService.checkToken()
        console.log(expDate)
    }

    return (
        <>
            <h1>Profile</h1>
            <div className="ShopArea">
                <aside className='UserNavList'>
                    <ul>
                        <li>Manage Your Account</li>
                        <li>Order History</li>
                    </ul>
                </aside>
                <div className="UserInfoArea">

                </div>
            </div>
        </>
    )
}