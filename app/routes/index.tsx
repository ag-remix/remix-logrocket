import { Link } from 'remix'

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Remix LogRocket Example</h1>
      <Link to="/about">About</Link>
    </div>
  )
}
