import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { UserNav } from "@/components/UserNav"
import { User2 } from "lucide-react"
const data = { name: "Kumar", email: "krjaydeep1@gmail.com", avatar: "" }
export function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <UserNav user={data} />
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup />
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                        <SidebarTrigger size={"lg"} className="items-center justify-start px-2">
                            Collaps
                        </SidebarTrigger> 
                </SidebarMenu>

            </SidebarFooter>
        </Sidebar>
    )
}

