import React, { Component } from 'react'
import { Animated } from 'react-native'

export class AnimatedView extends Component {
  opacity = new Animated.Value(0.5);

  componentDidMount() {
    this.animation()                       // Starts the animation
  }

  animation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.opacity, {
          toValue: 1,
          duration: 1000,
        }),
        Animated.timing(this.opacity, {
          toValue: 0.5,
          duration: 1000
        })
      ])
    ).start()
  }
  render({ children, style } = this.props) {
    const opacity = this.opacity;
    return (
      <Animated.View style={[style, { opacity: opacity }]}>
        {children}
      </Animated.View>
    )
  }
}

export default AnimatedView
