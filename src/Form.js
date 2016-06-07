
var ContactForm = React.createClass({
  	getInitialState:function(){
    	return {value:{},submit:{}};
  	},
  	onChange:function(e){
    	var attrName = e.target.getAttribute('name');
    	var input = {};
    	input[attrName] = e.target.value;
    	var value = Object.assign({}, this.state.value, input);
    	console.log(value);
    	this.setState({value:value});
  	},
  	onSubmit: function(e) {
    	e.preventDefault();
    	console.log(this.state.value);
    	this.setState({submit:this.state.value});
  	},

  	render: function() {
	   return (
   	   React.DOM.form({className:'ContactForm', onSubmit:this.onSubmit},
      	  	React.DOM.input({
         	 	name:'name',
          		type: 'text',
	          	placeholder: 'Name (required)',
   	       	onChange: this.onChange,
      	  	}),
        		React.DOM.input({
         		name:'email',
	          	type: 'text',
   	       	placeholder: 'Email (required)',
      	    	onChange: this.onChange,
        		}),
	        	React.DOM.textarea({
   	       	name:'description',
      	    	placeholder: 'Description',
         	 	onChange: this.onChange,
	        	}),
   	     	React.DOM.button({type: 'submit'}, "Add Contact"),
      	  	React.DOM.div({},
      	  		React.DOM.h2({},'onChange'),
        			JSON.stringify(this.state.value)),
	        	React.DOM.div({},
	        		React.DOM.h2({},'onSubmit'),
	        		JSON.stringify(this.state.submit))
   	   )
    	);
  	},
});

ReactDOM.render(
   React.createElement(ContactForm, {}),
   document.getElementById('react-app')
);


