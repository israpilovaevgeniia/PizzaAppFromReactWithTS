import styles from "./layout.module.css"
import cn from "classnames"
import { NavLink, Outlet } from "react-router-dom";
import Button from "../../assets/components/button/button";

const avatarImg = "src/assets/avatar.png"
const menuImg = "src/assets/menu.png"
const cartImg = "src/assets/shopping-cart.png"
const exitBtnImg = "src/assets/powerOff.png"

function Layout () {

    return (
        <div className={cn(styles.layout)}>
            <div className={cn(styles.sidebar)}>
                <div className={cn(styles.user)}>
                    <img 
                      src={ avatarImg } 
                      alt="user avatar" 
                      title="avatar" 
                      className={cn(styles.avatar)}
                    />
                    <div className={cn(styles.name)}>Name user</div>
                    <div className={cn(styles.email)}>Exemple@gmail.com </div>
                </div>
                <div className={cn(styles.menu)}>
                    <NavLink to="/" className={({ isActive }) => cn(styles.link, {
                        [styles.active]: isActive
                    })}>
                      <img src={menuImg} alt="menu" />
                      Menu
                    </NavLink>
                    <NavLink to="/cart" className={({ isActive }) => cn(styles.link, {
                        [styles.active]: isActive
                    })}>
                      <img src={cartImg} alt="cart" />
                      Cart
                    </NavLink> 
                </div>
                <Button className={cn(styles.exitBtn)}>
                    <img src={exitBtnImg} alt="exitBtn" />
                    <span>Выйти</span>
                </Button>
            </div>
            <div>
                <Outlet/>
            </div>
        </div> 
    )
}

export default Layout;