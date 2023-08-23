import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Link,
} from "@nextui-org/react";
import { Input, Textarea } from "@nextui-org/react";
const DataForm = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        className="rounded-full w-full h-16"
        color="primary"
      >
        Proceed To Purchase
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="auto">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Order Details
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Name"
                  placeholder="Enter your name"
                  variant="bordered"
                />
                <Input
                  autoFocus
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                />
                <Input
                  autoFocus
                  label="Mobile"
                  placeholder="Enter your mobile no."
                  variant="bordered"
                />
                <Textarea
                  label="Address"
                  variant="bordered"
                  labelPlacement="outside"
                  placeholder="Street Address"
                  className=""
                />
                <div className="flex gap-2">
                <Input
                  autoFocus
                  label="City"
                  className="w-1/2"
                  placeholder="Enter your city"
                  variant="bordered"
                />
                <Input
                autoFocus
                className="w-1/2"
                label="Zip code"
                placeholder="ZIP"
                variant="bordered"
              />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Continue
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default DataForm;
