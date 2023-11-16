import {Component} from 'react'
import {
  Background,
  Inner,
  ParagraphElement,
  InputElement,
  Inner2,
  ButtonElement,
} from './StyledComponents'

class SinglePage extends Component {
  state = {
    input: '',
    save: false,
  }

  onchanginginput = e => {
    this.setState({input: e.target.value})
  }

  savedbutton = () => {
    const {save} = this.state
    this.setState({save: !save})
  }

  render() {
    const {input, save} = this.state
    console.log(input)
    return (
      <Background>
        <Inner>
          <h1>Editable Text Input</h1>

          {save ? (
            <Inner2>
              <ParagraphElement>{input}</ParagraphElement>
              <ButtonElement outline={save} onClick={this.savedbutton}>
                Edit
              </ButtonElement>
            </Inner2>
          ) : (
            <Inner2>
              <InputElement
                onChange={e => this.onchanginginput(e)}
                value={input}
              />
              <ButtonElement outline={save} onClick={this.savedbutton}>
                Save
              </ButtonElement>
            </Inner2>
          )}
        </Inner>
      </Background>
    )
  }
}

export default SinglePage
