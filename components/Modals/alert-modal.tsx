"use client"

import { useEffect, useState } from "react"
import { DialogModal } from "../DialogModal"
import { Button } from "../ui/button"

interface AlertModalProps {
    isOpen: boolean
    loading: boolean
    onClose: () => void
    onConfirm: () => void
}

export const AlertModal: React.FC<AlertModalProps> = ({
    isOpen,
    loading,
    onClose,
    onConfirm
}) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <DialogModal
        title="Are you sure?"
        description="This action is permanent"
        isOpen={isOpen}
        onClose={onClose}
        >
            <div className="w-full pt-6 space-x-2 flex items-center justify-end">
                <Button
                disabled={loading}
                onClick={onClose}
                >
                    Cancel
                </Button>
                <Button
                disabled={loading}
                variant="destructive"
                onClick={onConfirm}
                >
                    Confirm
                </Button>
            </div>

        </DialogModal>
    )
}