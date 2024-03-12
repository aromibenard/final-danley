"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
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
    href: "/industries/hospitality",
    description:
      "Garbage collection & Recycling Services for your Hospitality + hotel waste",
  },
  {
    title: "Restaurants & Food Services",
    href: "/industries/restaurants",
    description:
      "Garbage collection & Recycling Services for your Restaurant or Food Service",
  },
  {
    title: "Grocery Stores",
    href: "/industries/groceries",
    description:
      "Garbage collection & Recycling Services for your Grocery Store",
  }
]

const components2: { title: string; href: string; description: string }[] = [
    {
      title: "About Us",
      href: "/company/about",
      description:
        "About D Waste",
    },
    {
      title: "Our Mission",
      href: "/company/mission",
      description:
        "D Waste Mission",
    },
    {
      title: "Our Team & Leadership",
      href: "/",
      description:
        "The professional team",
    },
    {
        title: "Our Core Objectives",
        href: "/company/objectives",
        description:
          "Company objectives",
      },
      {
        title: "Our Partners",
        href: "/company/partners",
        description:
          "our partners",
      }
]

const components3: { title: string; href: string; description: string }[] = [
    {
      title: "Locations",
      href: "/information/locations",
      description:
        "Learn more about the regions we operate in. ",
    },
    {
      title: "Sorting Guide",
      href: "/information/sorting",
      description:
        "Food Waste, Plastic Waste, Landfill Waste",
    },
    {
      title: "Privacy Policy",
      href: "/information/privacy",
      description:
        "Review the privacy policy",
    },
    {
        title: "Terms of Use",
        href: "/docs/primitives/progress",
        description:
          "Review the terms of use",
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
              <ListItem href="/services/households" title="For Households">
              Garbage collection & Recycling Services for Residential clients
              </ListItem>
              <ListItem href="/services/municipalities" title="For Municipality">
              Your communities waste + recycling solution.
              </ListItem>
              <ListItem href="/" title="Recycling">
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
          <Link href="/contacts" legacyBehavior passHref>
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
