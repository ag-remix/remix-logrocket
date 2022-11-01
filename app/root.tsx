import {
  json,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from 'remix'
import type { MetaFunction, LoaderFunction } from 'remix'
import { ClientOnly } from 'remix-utils'
import LogRocket from '~/components/LogRocket'

export const meta: MetaFunction = () => {
  return { title: 'Remix Log Rocket' }
}

export const loader: LoaderFunction = () => {
  return json({ LOGROCKET_APP_ID: process.env.LOGROCKET_APP_ID })
}

export default function App() {
  const data = useLoaderData()
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
        <ClientOnly>
          {() => <LogRocket appId={data.LOGROCKET_APP_ID} />}
        </ClientOnly>
      </body>
    </html>
  )
}
