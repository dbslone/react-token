import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ReactToken from '../src/index'

storiesOf('ReactToken', module)
  .add('with no props', () => <ReactToken />)
  .add('is disabled', () => <ReactToken disabled />)
  .add('with placeholder', () => <ReactToken placeholder="Start typing" />)
  .add('with 1 token', () => <ReactToken placeholder="Start typing" selected={['test 1']} />)
  .add('with set width', () => (
    <div style={{ width: 500 }}>
      <ReactToken placeholder="Start typing" selected={['test 1']} />
    </div>
  ))
  .add('with autocomplete', () => (
    <div style={{ width: 500 }}>
      <ReactToken
        autocompleteOptions={['d', 'another name', 'test', 'more', 'options', 'again', 'more', 'again', 'test']}
        placeholder="Start typing"
        selected={['test 1']}
      />
    </div>
  ))
  .add('is required', () => (
    <div style={{ width: 500 }}>
      <ReactToken placeholder="Start typing" required />
    </div>
  ))
  .add('on blur should create token from input', () => (
    <div style={{ width: 500 }}>
      <ReactToken
        autocompleteOptions={['d', 'another name', 'test', 'more', 'options', 'again', 'more', 'again', 'test']}
        placeholder="Start typing"
        required
      />
    </div>
  ))
  .add('with multiple', () => (
    <div style={{ width: 500 }}>
      <ReactToken
        autocompleteOptions={['d', 'another name', 'test', 'more', 'options', 'again', 'more', 'again', 'test']}
        placeholder="Start typing"
      />
      <br />
      <ReactToken autocompleteOptions={['d', 'another name', 'test', 'more', 'options', 'again', 'more', 'again', 'test']} placeholder="Start typing" />
    </div>
  ))
