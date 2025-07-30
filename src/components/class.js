import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userInfo:{
                name:"Dummy"
            }
        }
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/NavjotKapatia")
        const json = await data.json()
        this.setState({
            userInfo: json,
        })
        
        console.log(json)
    }
    render(){
        const {name} = this.state.userInfo
        return(            
            <div className="userclass">
               <h2>Name: {name}</h2>
            </div>
        )
    }
}
export default UserClass