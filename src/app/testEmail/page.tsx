"use client";
import { Alert, Box, Button, Flex, Input, Textarea } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function TestEmail() {
  const form = useRef<any>(null);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();

    const resetFormFields = () => {
      if (form.current) {
        form.current.reset(); // Reset the form fields
      }
    };

    if (form.current)
      emailjs
        .sendForm(
          "service_xjo1mec",
          "template_i0gatxp",
          form.current,
          "6mtvUEGXw5fUmXxWR"
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsSuccessModalVisible(true);
            resetFormFields();
          },
          (error) => {
            console.log(error.text);
            setIsErrorModalVisible(true);
          }
        );
  };

  return (
    <Flex align="center" justify="center" minH="100vh" bg="gray.100">
      <Box maxW="md" p={8} bg="white" shadow="md" rounded="md">
        <h1 className="text-2xl font-bold mb-4">Envoyer un e-mail</h1>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <Input
            type="text"
            name="user_name"
            placeholder="Nom"
            border="1px"
            p={2}
            rounded="md"
            focusBorderColor="blue.500"
            mt={"10px"}
          />
          <Input
            type="email"
            name="user_email"
            placeholder="Adresse e-mail"
            border="1px"
            p={2}
            rounded="md"
            focusBorderColor="blue.500"
            mt={"10px"}
          />
          <Textarea
            name="message"
            placeholder="Message"
            border="1px"
            p={2}
            rounded="md"
            focusBorderColor="blue.500"
            mt={"10px"}
          />
          <Button
            type="submit"
            w="full"
            p={2}
            bg="blue.500"
            color="white"
            rounded="md"
            _hover={{ bg: 'blue.600' }}
            mt={"10px"}
          >
            Envoyer
          </Button>
        </form>
        {isSuccessModalVisible && (
          <Alert bg="green.200" p={2} mt={4} rounded="md">
            Email envoyé avec succès!
          </Alert>
        )}
        {isErrorModalVisible && (
          <Alert bg="red.200" p={2} mt={4} rounded="md">
            Erreur lors de l &nbsp; envoi de l &nbsp; e-mail. Veuillez réessayer plus tard.
          </Alert>
        )}
      </Box>
    </Flex>
  );
}
