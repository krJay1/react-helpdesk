import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "./AppSidebar"
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
        <main className="flex-1 flex">            
            <Outlet/>
        </main>
    </SidebarProvider>
  )
}