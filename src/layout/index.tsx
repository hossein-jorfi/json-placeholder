import { ReactNode } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useLocation } from "react-router";
import { ModeToggle } from "@/components/ui/mode-toggle";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const { pathname } = useLocation();

  const renderHeader = (
    <header className="flex justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 px-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>{pathname?.split("/")[1]}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <ModeToggle />
    </header>
  );

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {renderHeader}
        <div className="px-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
