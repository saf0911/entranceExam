import React, {Component} from "react";
// import AddIngredients from "./AddIngredients";
import {withRouter} from "react-router-dom";
// import RecipeForm from "./RecipeForm";
import PropTypes from "prop-types";

export default class TypingTest extends Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      result: ""
    };
    this.baseState = this.state;
   // this.editRecipe = this.editRecipe.bind(this);
  }
  // componentDidMount() {
  //   const recId = this.props.match.params.id;
  //   this.setState({
  //     recipe: this.props.recipes.find(x => x._id === recId)
      
  //   });     
  //   console.log(this.state.recipe); 
   
  // }
 
  // editRecipe(recipe) {  
  //   console.log(this.props);

  //   this.props.updateRecipe(recipe);
  //   this.props.loadMyRecipes();
  //   this.props.history.push("/");
  // }

  render() {
   
    return (
      <div>
        <input type="text" value={this.state.result} onChange={(e) => {
                    
          this.setState({
            result: e.target.value 
          });
          console.log(this.state.result);
        }
                 } /> 
      
      </div>);
      /* //   //<RecipeForm submitRecipe={this.editRecipe} recipe={this.props.recipes.find(x => x._id === this.props.match.params.id)} />
  
      //   {/* <button onClick={() => this.updateRecipe()}>Save Recipe</button>

      //   <button onClick={() => this.erase()}>Clear Recipe</button> */
 
  }
}
TypingTest.propTypes = {
  match: PropTypes.object,
  recipes: PropTypes.array,
  recipe: PropTypes.object,
  updateRecipe: PropTypes.func,
  loadMyRecipes: PropTypes.func,
  history: PropTypes.object
}
;