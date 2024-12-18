import styles from "./authLayout.module.css"
import cn from "classnames"

import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className={cn(styles.layout)}>
        <div className={cn(styles.logo)}>
            <img src="https://media.istockphoto.com/id/1216076576/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BE%D1%80%D0%B0%D0%BD%D0%B6%D0%B5%D0%B2%D0%BE-%D0%B6%D0%B5%D0%BB%D1%82%D1%8B%D0%B9-%D0%B2%D1%81-%D1%8F%D1%80%D0%BA%D0%B8%D0%B9-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg?s=612x612&w=0&k=20&c=8rJpNw5YZTQBM57AY2lbfmKDrIJwiZ9RfoH7nCtyLuI=" alt="logo" />
        </div>
        <div className={cn(styles.content)}>
            <Outlet/>
        </div>
    </div>
  )
}

export default AuthLayout;
