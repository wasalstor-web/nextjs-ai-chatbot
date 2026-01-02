"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Calendar, Search, X } from "lucide-react";
import { format } from "date-fns";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Chat } from "@/lib/db/schema";

interface ChatSearchProps {
  chats: Chat[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ChatSearch({ chats, open, onOpenChange }: ChatSearchProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDateFilter, setSelectedDateFilter] = useState<string | null>(null);

  // Filter chats based on search query and date filter
  const filteredChats = chats.filter((chat) => {
    const matchesSearch = searchQuery
      ? chat.title.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    if (!matchesSearch) return false;

    if (!selectedDateFilter) return true;

    const chatDate = new Date(chat.createdAt);
    const now = new Date();

    switch (selectedDateFilter) {
      case "today":
        return chatDate.toDateString() === now.toDateString();
      case "yesterday": {
        const yesterday = new Date(now);
        yesterday.setDate(yesterday.getDate() - 1);
        return chatDate.toDateString() === yesterday.toDateString();
      }
      case "week": {
        const weekAgo = new Date(now);
        weekAgo.setDate(weekAgo.getDate() - 7);
        return chatDate >= weekAgo;
      }
      case "month": {
        const monthAgo = new Date(now);
        monthAgo.setMonth(monthAgo.getMonth() - 1);
        return chatDate >= monthAgo;
      }
      default:
        return true;
    }
  });

  const handleSelect = (chatId: string) => {
    onOpenChange(false);
    router.push(`/chat/${chatId}`);
  };

  const clearDateFilter = useCallback(() => {
    setSelectedDateFilter(null);
  }, []);

  // Reset search when dialog closes
  useEffect(() => {
    if (!open) {
      setSearchQuery("");
      setSelectedDateFilter(null);
    }
  }, [open]);

  const dateFilters = [
    { label: "Today", value: "today" },
    { label: "Yesterday", value: "yesterday" },
    { label: "Last 7 days", value: "week" },
    { label: "Last 30 days", value: "month" },
  ];

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <Command shouldFilter={false}>
        <CommandInput
          placeholder="Search your chats..."
          value={searchQuery}
          onValueChange={setSearchQuery}
        />
        
        {/* Date Filter Pills */}
        <div className="flex flex-wrap gap-1.5 border-b px-3 py-2">
          {dateFilters.map((filter) => (
            <Badge
              key={filter.value}
              variant={selectedDateFilter === filter.value ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() =>
                setSelectedDateFilter(
                  selectedDateFilter === filter.value ? null : filter.value
                )
              }
            >
              <Calendar className="mr-1 h-3 w-3" />
              {filter.label}
            </Badge>
          ))}
          {selectedDateFilter && (
            <Button
              variant="ghost"
              size="sm"
              className="h-6 px-2 text-xs"
              onClick={clearDateFilter}
            >
              <X className="h-3 w-3" />
              Clear
            </Button>
          )}
        </div>

        <CommandList>
          <CommandEmpty>
            {searchQuery || selectedDateFilter
              ? "No chats found matching your search."
              : "Start typing to search your chats..."}
          </CommandEmpty>
          
          {filteredChats.length > 0 && (
            <CommandGroup heading={`Results (${filteredChats.length})`}>
              {filteredChats.slice(0, 50).map((chat) => (
                <CommandItem
                  key={chat.id}
                  value={chat.id}
                  onSelect={() => handleSelect(chat.id)}
                  className="flex items-start gap-2"
                >
                  <Search className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                  <div className="flex flex-1 flex-col gap-1">
                    <span className="line-clamp-1">{chat.title}</span>
                    <span className="text-xs text-muted-foreground">
                      {format(new Date(chat.createdAt), "PPp")}
                    </span>
                  </div>
                </CommandItem>
              ))}
              {filteredChats.length > 50 && (
                <div className="px-2 py-1.5 text-center text-xs text-muted-foreground">
                  Showing 50 of {filteredChats.length} results
                </div>
              )}
            </CommandGroup>
          )}
        </CommandList>
      </Command>
    </CommandDialog>
  );
}
