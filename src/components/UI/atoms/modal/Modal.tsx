import type React from "react"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { LuX } from "react-icons/lu"
import { cn } from "../../../../utils/classNames"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
  size?:"sm"|"md"|"lg"
}

export const Modal = ({ isOpen, onClose, children, className,size="md" }: ModalProps) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    if (isOpen) {
      document.body.style.overflow = "hidden"
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    window.addEventListener("keydown", handleEscape)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  if (!isMounted || !isOpen) return null

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div
        className={cn(
          "relative z-50 w-full rounded-lg bg-white p-0 shadow-lg animate-in fade-in zoom-in-95 duration-200 mx-5 max-h-10/12 flex flex-col",
          className,
          size==="sm"?"max-w-md":size==="md"?"max-w-xl":size==="lg"&&"max-w-3xl"
        )}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </div>,
    document.body,
  )
}

interface ModalHeaderProps {
  children: React.ReactNode
  onClose?: () => void
  className?: string
  showCloseButton?: boolean
}

export const ModalHeader = ({ children, onClose, className, showCloseButton = true }: ModalHeaderProps) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between border-b border-gray-200 px-6 py-4 ",
        className,
      )}
    >
      <div className="font-medium">{children}</div>
      {showCloseButton && onClose && (
        <button
          onClick={onClose}
          className="rounded-full p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer"
          aria-label="Close"
        >
          <LuX className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}

interface ModalBodyProps {
  children: React.ReactNode
  className?: string
}

export function ModalBody({ children, className }: ModalBodyProps) {
  return <div className={cn("px-6 py-4 overflow-auto", className)}>{children}</div>
}

interface ModalFooterProps {
  children: React.ReactNode
  className?: string
}

export const ModalFooter = ({ children, className }: ModalFooterProps) => {
  return (
    <div
      className={cn(
        "flex items-center justify-end gap-2 border-t border-gray-200 px-6 py-4",
        className,
      )}
    >
      {children}
    </div>
  )
}

