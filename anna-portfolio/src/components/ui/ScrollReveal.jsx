import { useSpring, animated } from '@react-spring/web'
import { useInView } from '../../hooks/useInView'

/**
 * ScrollReveal — bọc bất kỳ component nào để có entrance animation khi scroll vào viewport.
 * Dùng @react-spring/web thay vì react-motion (không hỗ trợ React 19).
 */
export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up', // 'up' | 'left' | 'none'
  className = '',
}) {
  const [ref, inView] = useInView({ threshold: 0.15, once: true })

  const getFrom = () => {
    if (direction === 'up') return { opacity: 0, transform: 'translateY(24px)' }
    if (direction === 'left') return { opacity: 0, transform: 'translateX(-24px)' }
    return { opacity: 0, transform: 'translateY(0px)' }
  }

  const getTo = () => ({ opacity: 1, transform: 'translateY(0px) translateX(0px)' })

  const style = useSpring({
    from: getFrom(),
    to: inView ? getTo() : getFrom(),
    delay,
    config: { tension: 180, friction: 28, clamp: true },
  })

  return (
    <animated.div ref={ref} style={style} className={className}>
      {children}
    </animated.div>
  )
}
