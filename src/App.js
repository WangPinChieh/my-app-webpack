import React, { useState } from "react";
import "./App.styl";
import Logo from "./logo.svg";
import { Box, Button } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";
import Modal from "./Modal";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* <Logo className="App-logo" /> */}
      <div className="header">Hello React!</div>
      <Button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Open
      </Button>
      <Modal
        isOpen={isOpen}
        onSubmit={() => {
          alert("OnSubmit");
          setIsOpen(false);
        }}
      >
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
      </Modal>
      {/* <Box
        as="form"
        onSubmit={() => {
          alert("submit");
        }}
      >
        <Button
          colorScheme="blue"
          mr={3}
          onClick={() => {
            alert("click");
          }}
        >
          Submit
        </Button>
      </Box> */}
    </>
  );
}

export default App;
