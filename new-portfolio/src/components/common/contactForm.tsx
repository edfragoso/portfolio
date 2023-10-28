"use client";
import { FormEvent, useState, useEffect } from "react";
import { BoxContent, Form, Input, TextArea } from "./styles/contactFormStyle";
import { SubmitButton } from "../atoms/SubmitButton";
import { Loading } from "../atoms/loadingSpinner";
import { Alert } from "@mui/material";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      title: "",
      message: "",
    });
  };

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/routes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccess(true);
        resetForm();
      } else {
        setShowError(true);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setShowSuccess(false);
        setShowError(false);
      }, 5000);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <BoxContent>
      <Form onSubmit={handleFormSubmit}>
        {loading && <Loading />}
        {showSuccess && (
          <Alert severity="success">Mensagem enviada com sucesso!</Alert>
        )}
        {showError && (
          <Alert severity="error">Problema no servidor, tente novamente mais tarde</Alert>
        )}
        <h1>Envie sua mensagem.</h1>
        <div>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Seu nome"
            required
          />

          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Seu email"
            required
          />
        </div>

        <Input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Titulo ou assunto"
          required
        />

        <TextArea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Mensagem"
          required
        />

        <SubmitButton onClick={handleFormSubmit} title={"enviar"} />
      </Form>
    </BoxContent>
  );
}
