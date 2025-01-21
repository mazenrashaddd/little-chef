import "./Header.css";
import chefIcon from "../../assets/chef.png"

export default function Header(){
    return(
        <header className = "headerSection">
            <img className = "heading-icon" src={chefIcon} alt="Chef Icon"/>
            <h1>Little Chef</h1>
        </header>
    )
}