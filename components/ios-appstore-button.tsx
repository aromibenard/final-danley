'use client'

import { DownloadIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"

export function AppStoreButton() {
  return (
    <Button>
      <DownloadIcon className="mr-2 h-4 w-4" /> Get on Apple Appstore
    </Button>
  )
}