"use client"

import { useStoreModal } from '@/hooks/use-store-modal'
import React, { useEffect } from 'react'

const StorePage = () => {
    const onOpen = useStoreModal((state) => state.onOpen)
    const isOpen = useStoreModal((state) => state.isOpen)

    useEffect(() => {
        if (!isOpen) {
            onOpen()
        }
    }, [isOpen, onOpen])

  return null
}

export default StorePage