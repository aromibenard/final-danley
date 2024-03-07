"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Hotels & Hospitality",
    href: "/services/primitives/alert-dialog",
    description:
      "Garbage collection & Recycling Services for your Hospitality + hotel waste",
  },
  {
    title: "Restaurants & Food Services",
    href: "/docs/primitives/hover-card",
    description:
      "Garbage collection & Recycling Services for your Restaurant or Food Service",
  },
  {
    title: "Grocery Stores",
    href: "/docs/primitives/progress",
    description:
      "Garbage collection & Recycling Services for your Grocery Store",
  }
]

const components2: { title: string; href: string; description: string }[] = [
    {
      title: "Our Story",
      href: "/services/primitives/alert-dialog",
      description:
        "Garbage collection & Recycling Services for your Hospitality + hotel waste",
    },
    {
      title: "Our Mission",
      href: "/docs/primitives/hover-card",
      description:
        "Garbage collection & Recycling Services for your Restaurant or Food Service",
    },
    {
      title: "Our Team & Leadership",
      href: "/docs/primitives/progress",
      description:
        "Garbage collection & Recycling Services for your Grocery Store",
    },
    {
        title: "Our Core Objectives",
        href: "/docs/primitives/progress",
        description:
          "Garbage collection & Recycling Services for your Grocery Store",
      },
      {
        title: "Our Partners",
        href: "/docs/primitives/progress",
        description:
          "Garbage collection & Recycling Services for your Grocery Store",
      }
]

const components3: { title: string; href: string; description: string }[] = [
    {
      title: "Locations",
      href: "/services/primitives/alert-dialog",
      description:
        "Where We Collect",
    },
    {
      title: "Sorting Guide",
      href: "/docs/primitives/hover-card",
      description:
        "Food Waste, Plastic Waste, Landfill Waste",
    },
    {
      title: "Privacy Policy",
      href: "/docs/primitives/progress",
      description:
        "view",
    },
    {
        title: "Terms of Use",
        href: "/docs/primitives/progress",
        description:
          "View",
      },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>

        {/* services */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      D-Waste
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Explore the catalogue of services we offer
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="For Households">
              Garbage collection & Recycling Services for Residential clients
              </ListItem>
              <ListItem href="/docs/installation" title="For Municipality">
              Your communities waste + recycling solution.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Recycling">
                Recycling Services
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* industries */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Company */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components2.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        {/* Resources */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components3.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"