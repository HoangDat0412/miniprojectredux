import React from 'react'
import { useSpring, animated } from '@react-spring/web'

export default function DemoUseSpring(props) {
    const propsanimated = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config:{duration :1000}
      })
    const propsAnimatedNumber = useSpring({
        from:{Number:0},
        to:{Number:1200},
    })
    const propsScroll = useSpring({
        form:{scroll:0},
        to:{scroll:100},
        config:{duration:1000}
    })
  return (
    <div>
        <h1>Change color text</h1>
        <animated.div style={propsanimated}> I will fade in</animated.div>
        <hr></hr>
        <h1>Change number</h1>
        <animated.h1 >
            {propsAnimatedNumber.Number}
        </animated.h1>

        <hr/>

        <h1>Scroll</h1>
        <animated.div scrollTop={propsScroll.scroll}>
        </animated.div>

        
    </div>
  )
}
