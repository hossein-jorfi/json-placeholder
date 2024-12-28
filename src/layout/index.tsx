import React, { ReactNode } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { useLocation, useNavigate } from "react-router";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const navigateHandler = (item: string, index: number) => {
    if (index == 1) {
      navigate(item);
    }
  };

  const renderHeader = (
    <header
      className={cn(
        "flex justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 px-4 fixed w-full bg-background/70 backdrop-blur-md z-10"
      )}
    >
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            {pathname?.split("/")?.map((item: string, index) => (
              <React.Fragment key={item}>
                <BreadcrumbItem
                  onClick={() => navigateHandler(item, index)}
                  className={`${
                    index == 1
                      ? "cursor-pointer hover:underline"
                      : "cursor-default"
                  }`}
                >
                  <BreadcrumbPage>{item}</BreadcrumbPage>
                </BreadcrumbItem>
                {pathname?.split("/")?.length != index + 1 && (
                  <BreadcrumbSeparator />
                )}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );

  return (
    <>
      <AppSidebar />
      <ModeToggle />
      <ScrollArea className="h-screen w-full">
        <SidebarInset>
          {renderHeader}
          <div className="px-4 pb-4 mt-16">{children}</div>
        </SidebarInset>
      </ScrollArea>
    </>
  );
}
