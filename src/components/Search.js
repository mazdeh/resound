import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    e.preventDefault();
    const { dispatch } = this.props;
    const q = e.target.value;
    // dispatch(track(q));
  }

  render() {
    return (
      null
      // <Form inline>
      //   <FormGroup>
      //     <FormControl
      //       type="text"
      //       placeholder="Search tracks"
      //     />
      //   </FormGroup>
      //     <Button onClick={this.handleChange} type="submit">
      //       Search
      //     </Button>
      // </Form>
    )
  }
}

export default Search;
