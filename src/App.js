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
import Basic from "./Basic";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* <Logo className="App-logo" /> */}
      <div className="header">Hello React!</div>
      <Basic></Basic>
      {/* <Button
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
      </Modal> */}
    </>
  );
}

export default App;
