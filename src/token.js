import React from 'react'
import PropTypes from 'prop-types'

class DefaultToken extends React.PureComponent {
  static propTypes = {
    onRemove: PropTypes.func,
    text: PropTypes.string
  }

  static defaultProps = {
    onRemove() {}
  }

  state = {
    hover: false
  }

  onMouseEnter = (e) => {
    this.setState({hover: true})
  }

  onMouseLeave = (e) => {
    this.setState({hover: false})
  }

  render() {
    const styles = {
      container: {
        alignItems: 'center',
        backgroundColor: '#000000',
        borderRadius: '3px',
        color: 'rgba(255,255,255,1)',
        display: 'inline-flex',
        marginBottom: 2,
        marginRight: 6,
        marginTop: 2,
        paddingBottom: 3,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 3,
        minHeight: 23
      },
      text: {
        paddingRight: 10,
        fontWeight: 400
      }
    }

    const deleteStyle = this.state.hover
      ? {cursor: 'pointer', color: 'rgba(255,255,255,0.7)'}
      : {cursor: 'pointer'}

    return (
      <li style={styles.container} className="rt-token">
        <span style={styles.text} className="rt-token-text">{this.props.text}</span>
        <span
          className="rt-token-delete"
          style={deleteStyle}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          onClick={this.props.onRemove}
        >
          ✕
        </span>
      </li>
    )
  }
}

export default DefaultToken
