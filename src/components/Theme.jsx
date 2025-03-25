import React from "react";
import "../css/Theme.css"

class Theme extends React.Component {

    constructor() {
        super()
        this.state = {
            main: "lightm",
            child: "lightc",
            msg:" hey its Day Good Morning Have a Nice Day !!!"

        }
    }

    chengeToDay = () => {
        this.setState ({
            main:"lightm",
            child:"lightc",
            msg:" hey its Day Good Morning Have a Nice Day !!!"
        })
        
    }

    chengeToNight = () => {
        this.setState ({
            main:"darkm",
            child:"darkc",
            msg:" hey its Night Good Night Sweet Dreams !!!"
        })
    }


    render() {
        return (
            <>
                <div className={this.state.main}>
                    <div className={this.state.child}>
                        <h1>Welcome to Chenge Day Night Mode </h1>
                        <br />
                        <h3>{this.state.msg}</h3>
                    </div>
                    <div className="c2">
                        <img src="https://png.pngtree.com/png-clipart/20230315/ourmid/pngtree-sun-cartoon-cute-doodle-png-image_6646859.png" alt="" width="50px" onClick={this.chengeToDay} />

                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgN9YQhFGayNroypgycpzG8Daa86mspo3JsQ&s" alt="" width="50px" onClick={this.chengeToNight} height={30}/>

                    </div>
                </div>
            </>
        )
    }

}

export default Theme;