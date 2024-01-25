import React, { Component } from 'react';
import { SearchBarHead, SearchForm, SearchFormBtn, SearchFormButtonLabel, SearchFormInput } from './Searchbar.styled'

export class Searchbar extends Component {
	state = {
	query: '',
};

handleChange = event => {     
	this.setState({ query: event.target.value });    
};

handleSubmit = event => {    
	event.preventDefault();
	if (!this.state.query.trim()) { 
		return
}
		this.props.onSubmit(this.state.query);
};

render() {
	return (
		<SearchBarHead>
			<SearchForm onSubmit={this.handleSubmit}>
				<SearchFormBtn type="submit">
					<SearchFormButtonLabel>Search</SearchFormButtonLabel>
				</SearchFormBtn>

						<SearchFormInput
						type="text"
						autoComplete="off"
						autoFocus
						placeholder="Search images and photos"
						value={this.state.query}
						onChange={this.handleChange}
						/>
				</SearchForm>
		</SearchBarHead>
);
}
}