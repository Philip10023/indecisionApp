import React from 'react'
// cannot export default inlineillegal for const definitions

const Option = (props) => (
  <div className="option">
    <p className="option__text">
      {props.count}.
      {props.optionText}
    </p>
    <button
    className="button button--link"
      onClick={(e) => {
        props.handleDeleteOption(props.optionText)
      }}
      >
        x
    </button>
  </div>
)

export default Option;
