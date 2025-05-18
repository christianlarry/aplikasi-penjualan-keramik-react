"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { LuCheck, LuChevronDown, LuSearch, LuX } from "react-icons/lu"
import { cn } from "../../../../utils/classNames"

export type SelectOption = {
  value: string
  label: string
}

type SelectProps = {
  options: SelectOption[]
  value: SelectOption | SelectOption[] | null
  onChange: (value: SelectOption | SelectOption[] | null) => void
  multiple?: boolean
  placeholder?: string
  disabled?: boolean
  className?: string
  searchable?: boolean
}

export function Select({
  options,
  value,
  onChange,
  multiple = false,
  placeholder = "Select...",
  disabled = false,
  className,
  searchable = true,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const containerRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Filter options based on search term
  const filteredOptions = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()))

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchable && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isOpen, searchable])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen)
      setSearchTerm("")
    }
  }

  const selectOption = (option: SelectOption) => {
    if (multiple) {
      if (Array.isArray(value)) {
        const isSelected = value.some((item) => item.value === option.value)
        if (isSelected) {
          onChange(value.filter((item) => item.value !== option.value))
        } else {
          onChange([...value, option])
        }
      } else {
        onChange([option])
      }
    } else {
      onChange(option)
      setIsOpen(false)
    }
  }

  const removeOption = (option: SelectOption, e: React.MouseEvent) => {
    e.stopPropagation()
    if (multiple && Array.isArray(value)) {
      onChange(value.filter((item) => item.value !== option.value))
    } else {
      onChange(null)
    }
  }

  const clearAll = (e: React.MouseEvent) => {
    e.stopPropagation()
    onChange(multiple ? [] : null)
  }

  const isOptionSelected = (option: SelectOption) => {
    if (multiple) {
      return Array.isArray(value) && value.some((item) => item.value === option.value)
    }
    return !Array.isArray(value) && value?.value === option.value
  }

  return (
    <div className={cn("relative w-full", className)} ref={containerRef}>
      {/* Select trigger */}
      <div
        className={cn(
          "flex min-h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
          "focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
          disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
          isOpen && "ring-2 ring-ring ring-offset-2",
        )}
        onClick={toggleDropdown}
        tabIndex={0}
        role="combobox"
        aria-expanded={isOpen}
        aria-disabled={disabled}
      >
        <div className="flex flex-grow flex-wrap gap-1">
          {multiple ? (
            Array.isArray(value) && value.length > 0 ? (
              <div className="flex flex-wrap gap-1">
                {value.map((option) => (
                  <div key={option.value} className="flex items-center gap-1 rounded-md bg-muted px-2 py-1 text-xs">
                    <span>{option.label}</span>
                    <button
                      onClick={(e) => removeOption(option, e)}
                      className="rounded-full hover:bg-muted-foreground/20"
                      aria-label={`Remove ${option.label}`}
                    >
                      <LuX className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <span className="text-muted-foreground">{placeholder}</span>
            )
          ) : !Array.isArray(value) && value ? (
            <span>{value.label}</span>
          ) : (
            <span className="text-muted-foreground">{placeholder}</span>
          )}
        </div>
        <div className="flex items-center gap-1">
          {((multiple && Array.isArray(value) && value.length > 0) ||
            (!multiple && !Array.isArray(value) && value)) && (
            <button onClick={clearAll} className="rounded-full p-1 hover:bg-muted" aria-label="Clear selection">
              <LuX className="h-4 w-4" />
            </button>
          )}
          <LuChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
        </div>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80">
          {searchable && (
            <div className="sticky top-0 z-10 mb-1 flex items-center border-b bg-popover p-2">
              <LuSearch className="mr-2 h-4 w-4 shrink-0 opacity-50" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="flex h-8 w-full rounded-sm bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}

          {filteredOptions.length > 0 ? (
            <div className="py-1">
              {filteredOptions.map((option) => {
                const selected = isOptionSelected(option)
                return (
                  <div
                    key={option.value}
                    className={cn(
                      "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
                      selected ? "bg-accent text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground",
                    )}
                    onClick={() => selectOption(option)}
                  >
                    <span className="flex-grow truncate">{option.label}</span>
                    {selected && <LuCheck className="h-4 w-4 ml-2" />}
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="py-6 text-center text-sm text-muted-foreground">No results found</div>
          )}
        </div>
      )}
    </div>
  )
}

