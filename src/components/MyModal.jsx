import { Modal } from '@heroui/react'
import React from 'react'

export const MyModal = ({isOpen,setIsOpen,selectedFood}) => {
  return (
    <div>
        <Modal.Backdrop isOpen={isOpen} onOpenChange={setIsOpen}>
          <Modal.Container placement="center">
            <Modal.Dialog className="max-h-[80vh] w-[80vw] max-w-none">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Heading className='uppercase text-center font-bold'>{selectedFood.title}</Modal.Heading>
              </Modal.Header>
              <Modal.Body className="overflow-hidden">
                <img className="block h-auto max-h-[70vh] w-full object-contain" src={'images/'+selectedFood.img} alt={selectedFood.title} />
              </Modal.Body>
              
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
    </div>
  )
}

