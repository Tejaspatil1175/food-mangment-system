"use client"

import { useState } from 'react'
import { Bell } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export function AlertBell() {
  const [alerts, setAlerts] = useState([
    { id: 1, message: "New market report available" },
    { id: 2, message: "Weather alert: Heavy rain expected" },
    { id: 3, message: "Upcoming webinar on sustainable farming" },
  ])

  const clearAlert = (id: number) => {
    setAlerts(alerts.filter(alert => alert.id !== id))
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {alerts.length > 0 && (
            <Badge className="absolute -top-1 -right-1 px-1 min-w-[1.25rem] h-5">
              {alerts.length}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[300px]">
        {alerts.length === 0 ? (
          <DropdownMenuItem>No new alerts</DropdownMenuItem>
        ) : (
          alerts.map(alert => (
            <DropdownMenuItem key={alert.id} className="flex justify-between items-center">
              <span>{alert.message}</span>
              <Button variant="ghost" size="sm" onClick={() => clearAlert(alert.id)}>
                Clear
              </Button>
            </DropdownMenuItem>
          ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

