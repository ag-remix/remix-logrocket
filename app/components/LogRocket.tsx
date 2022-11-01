import LogRocket from 'logrocket'
import setupLogRocketReact from 'logrocket-react'

export default function ({ appId }: { appId: string }) {
  LogRocket.init(appId)
  setupLogRocketReact(LogRocket)
  return null
}
