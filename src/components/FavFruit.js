import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {withAuth0 , useAuth0} from '@auth0/auth0-react';
import FavFruitCard from './favFruitsCards';
import UpdateFruit from './updateFruit';
import './Home.css';

class FavFruit extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      favFruits:[],
      show:false,
      selectedFruit:{}
    }
  }

  componentDidMount = () =>{
    let email = this.props.auth0.user.email;
    axios
    .get(`https://examm-301.herokuapp.com/getFruits?email=${email}`)
    .then(result =>{
      this.setState({
        favFruits:result.data
      })
    })
    .catch(err=>console.log('error'))
  }
  updateFruit=(event)=>{
    event.preventDefault();
    const obj ={
      name : event.target.name.value,
      image:event.target.photo.value,
      price:event.target.price.value,
      email:this.props.auth0.user.email,
      fruitId:this.state.selectedFruit._id
    }
    axios
    .put(`https://examm-301.herokuapp.com/flowers/${obj.fruitId}`,obj)
    .then(result=>{
      this.setState({
        favFruits:result.data
      })
    })
    .catch(err=>console.log('error'))
  }

  deleteFruit=(item)=>{
    const id = item._id;
    const email = this.props.auth0.user.email;
    axios
    .delete(`https://examm-301.herokuapp.com/flowers/${id}?email=${email}`)
    .then(result=>{
      this.setState({
        favFruits:result.data
      })
    })
    .catch(err=>console.log('error'))
  }
  handleShow = (item) =>{
    this.setState({
      show:true,
      selectedFruit:item
    })
  }
  handleClose = () =>{
    this.setState({
      show:false
    })
  }

  render() {
    return(
      <>
        <h1>My Favorite Fruits</h1>
        <div id='favFruitCards'>
        <FavFruitCard
        favFruits = {this.state.favFruits}
        updateFruit = {this.updateFruit}
        handleShow = {this.handleShow}
        deleteFruit={this.deleteFruit}
        />
        </div>
        {this.state.show && 
        <UpdateFruit
        show={this.state.show}
        handleClose = {this.handleClose}
        updateFruit = {this.updateFruit}
        fruitInfo = {this.state.selectedFruit}
        />}
      </>
    )
  }
}

export default withAuth0(FavFruit);
