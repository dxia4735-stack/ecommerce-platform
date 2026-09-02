import './globals.css';
import { ShopProvider } from './shop-context';import {RouteGuard} from './route-guard';
import { Nav } from './ui';
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-CN"><body><ShopProvider><Nav/><RouteGuard>{children}</RouteGuard></ShopProvider></body></html>}
