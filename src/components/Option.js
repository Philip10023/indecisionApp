import React from 'react'
// cannot export default inlineillegal for const definitions

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
        props.handleDeleteOption(props.optionText)
      }}
      >
      x
      </button>
    </div>
  );
}

export default Option;
