import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import FruitCard from './fruitsCard';
import {withAuth0} from '@auth0/auth0-react';
import './Home.css';

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state={
      fruits:[],
      addedFruits:[]
    }
  }

  componentDidMount = () =>{
    axios
    .get('https://examm-301.herokuapp.com/fruits')
    .then(result=>{
      this.setState({
        fruits: result.data
      })
      console.log(this.state.fruits);
    })
    .catch(err => console.log('error'))
  }

  addFruit = (item) => {
    const obj = {
      name : item.name,
      image: item.image,
      price : item.price,
      email: this.props.auth0.user.email
    }
    axios
    .post('https://examm-301.herokuapp.com/fruits',obj)
    .then(result => {
      this.setState({
        addedFruits:result.data
      })
      console.log(this.state.addedFruits);
    })
    .catch(err=>console.log('error'))
  }

  render() {
    return (
      <>
        <h1>API Fruits</h1>
        <div id='homeCards'>
        {this.state.fruits.map(item =>{
          return(
            <FruitCard 
            fruit = {item}
            addFruit = {this.addFruit}
            />
          )
        })}
        </div>
      </>
    )
  }
}

export default withAuth0(Home);
