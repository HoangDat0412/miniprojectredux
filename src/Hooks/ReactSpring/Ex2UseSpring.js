import { useSpring,animated } from '@react-spring/web'
import React from 'react'

export default function Ex2UseSpring() {
    let propsUseSpring = useSpring({
        from:{
            color:[238,99,99],
        },
        to:{
            color:[131,111,255],
        },
        config:{
            duration:2000,
            delay:0
        }
    })

    // tăng phông chữ 
    let propAnimation = useSpring(
        {
            from:{
                width:'0%',
                fontSize:'10px'

            },
            to: async(next,cancel)=> {
               await next({ width:'100%',height:'100%',fontSize:'50px'})
               await next({ width:'50%',height:'50%',fontSize:'10px'})
               await next({ width:'100%',height:'100%',fontSize:'50px'})
            },
            config:{
                duration:5000
            }
        }
    )



  return (
    <div>
        <animated.div style={{
            color: propsUseSpring.color.interpolate((r,g,b)=> {return `rgb(${r},${g},${b})`})
        }}>
            Hello world
        </animated.div>

        <animated.div style={propAnimation}>
            Hello Các Bạn
        </animated.div>
    </div>
  )
}
